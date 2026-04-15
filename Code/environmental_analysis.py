import ee
import pandas as pd
import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
import math
import time
import os
def batch_analyze_all_subdistricts_full():
    """
    Performs a comprehensive environmental analysis for ALL sub-districts
    in India in batches, and saves them to a CSV file.
    Uses a user-uploaded GADM asset and robust .updateMask() for area calculations.
    """
    try:
        ee.Initialize(project='capproc')
        print("Google Earth Engine Initialized successfully.")
    except Exception as e:
        print(f"Error initializing Earth Engine: {e}")
        return

    # --- Step 1: Get the full list of sub-districts ---
    print("Fetching the list of all sub-districts in India...")
    
    try:
        # This path MUST match the asset you uploaded.
        gadm_asset_path = 'projects/capproc/assets/India_Subdistricts_GADM'
        india_subdistricts_collection = ee.FeatureCollection(gadm_asset_path)
        
        # --- [OPTIONAL] UNCOMMENT THE LINE BELOW TO TEST ON A SINGLE STATE ---
        # This is HIGHLY recommended before running the full script.
        # GADM uses 'NAME_1' for the state name.
        # india_subdistricts_collection = india_subdistricts_collection.filter(ee.Filter.eq('NAME_1', 'Punjab'))
        # ---
        
        count = india_subdistricts_collection.size().getInfo()
        print(f"Found {count} sub-districts to process.")
        subdistricts_list = india_subdistricts_collection.toList(count)
    except Exception as e:
        print(f"!!! FAILED TO LOAD ASSET: {e}")
        print(f"Please check the asset path '{gadm_asset_path}' is correct and the asset is shared ('Anyone can read').")
        return

    # --- Step 2: Define the server-side analysis function ---
    def analyze_feature(feature):
        geom = feature.geometry()
        pixel_area = ee.Image.pixelArea()
        
        # --- 1. Greenery (Updated to latest available: Q1 2026) ---
        s2_image = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED') \
                  .filterBounds(geom).filterDate('2026-01-01', '2026-04-01') \
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10)).median()
        ndvi = s2_image.normalizedDifference(['B8', 'B4']).rename('ndvi')
        greenery_mask = ndvi.gte(0.3)
        green_area_image = pixel_area.updateMask(greenery_mask)
        green_area_stats = green_area_image.reduceRegion(
            reducer=ee.Reducer.sum(), geometry=geom, scale=100, maxPixels=1e10
        )
        # ### ROBUSTNESS FIX ###
        green_stats_val = green_area_stats.get('area')
        current_green_area_sqm = ee.Algorithms.If(green_stats_val, green_stats_val, 0)

        # --- 2. Population (Multi-year for Forecasting) ---
        pop_years = [2000, 2005, 2010, 2015, 2020]
        pop_dict = {}
        for year in pop_years:
            population_image = ee.ImageCollection("WorldPop/GP/100m/pop") \
                                .filterDate(f'{year}-01-01', f'{year+1}-01-01').median()
            population_stats = population_image.reduceRegion(
                reducer=ee.Reducer.sum(), geometry=geom, scale=100, maxPixels=1e10
            )
            pop_stats_val = population_stats.get('population')
            pop_dict[f'population_{year}'] = ee.Number(ee.Algorithms.If(pop_stats_val, pop_stats_val, 0)).round()
        
        # We also keep total_population natively mapped to the most recent known full year (2020)
        total_population = pop_dict['population_2020']
        
        # --- 3. Total Area ---
        total_area_sqm = geom.area()

        # --- 4. Rainfall (Mean Annual - Updated to latest full year: 2025) ---
        rainfall_image_collection = ee.ImageCollection('UCSB-CHG/CHIRPS/PENTAD') \
                                      .filterDate('2025-01-01', '2025-12-31')
        total_annual_rainfall_image = rainfall_image_collection.sum().select('precipitation')
        rainfall_stats = total_annual_rainfall_image.reduceRegion(
            reducer=ee.Reducer.mean(), geometry=geom, scale=5566, maxPixels=1e10
        )
        # ### ROBUSTNESS FIX ###
        rain_stats_val = rainfall_stats.get('precipitation')
        annual_mean_rainfall_mm = ee.Algorithms.If(rain_stats_val, rain_stats_val, -9999)

        # --- 5. Temperature (Mean Annual - Updated to latest full year: 2025) ---
        temp_image = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") \
                       .filterDate('2025-01-01', '2025-12-31') \
                       .mean().select('temperature_2m')
        temp_celsius = temp_image.subtract(273.15)
        temp_stats = temp_celsius.reduceRegion(
            reducer=ee.Reducer.mean(), geometry=geom, scale=11132, maxPixels=1e10
        )
        # ### ROBUSTNESS FIX ###
        temp_stats_val = temp_stats.get('temperature_2m')
        annual_mean_temp_c = ee.Algorithms.If(temp_stats_val, temp_stats_val, -9999)
        
        # --- 6. Soil (Organic Carbon Proxy) ---
        soil_image = ee.Image("projects/soilgrids-isric/ocd_mean") \
                       .select('ocd_0-5cm_mean')
        soil_stats = soil_image.reduceRegion(
            reducer=ee.Reducer.mean(), geometry=geom, scale=1000, maxPixels=1e10
        )
        # ### ROBUSTNESS FIX (This caused the crash) ###
        soil_stats_val = soil_stats.get('ocd_0-5cm_mean')
        # Use a default that divides to -9999
        soil_org_carbon_pct_val = ee.Algorithms.If(soil_stats_val, soil_stats_val, -99990)
        soil_org_carbon_pct = ee.Number(soil_org_carbon_pct_val).divide(10)
        
        # --- 7. Surface Water (Updated to latest Sentinel-2 NDWI since JRC is stuck in 2021) ---
        # We re-use our Q1 2026 Sentinel-2 image for surface water to pull the absolute latest water bodies!
        ndwi = s2_image.normalizedDifference(['B3', 'B8'])
        water_mask = ndwi.gte(0.1) # NDWI > 0.1 is generally water
        water_area_image = pixel_area.updateMask(water_mask)
        water_stats = water_area_image.reduceRegion(
            reducer=ee.Reducer.sum(), geometry=geom, scale=100, maxPixels=1e10
        )
        # ### ROBUSTNESS FIX ###
        water_stats_val = water_stats.get('area')
        surface_water_sqm = ee.Algorithms.If(water_stats_val, water_stats_val, 0)

        properties = {
            'total_area_sqm': total_area_sqm,
            'current_green_area_sqm': current_green_area_sqm,
            'population': total_population,
            'annual_mean_rainfall_mm': annual_mean_rainfall_mm,
            'annual_mean_temp_c': annual_mean_temp_c,
            'soil_org_carbon_pct': soil_org_carbon_pct,
            'surface_water_sqm': surface_water_sqm
        }
        properties.update(pop_dict)
        return feature.set(properties)

    # --- Step 3: Process sub-districts in batches ---
    batch_size = 100
    all_results_features = []
    print(f"\nStarting batch processing with a batch size of {batch_size}...")
    
    for i in range(0, count, batch_size):
        start_index = i
        end_index = min(i + batch_size, count)
        batch_number = (i // batch_size) + 1
        total_batches = math.ceil(count / batch_size)
        
        print(f"\n--- Processing Batch {batch_number} of {total_batches} (Sub-districts {start_index} to {end_index-1}) ---")
        
        try:
            batch_ee_list = subdistricts_list.slice(start_index, end_index)
            batch_collection = ee.FeatureCollection(batch_ee_list)
            results_batch = batch_collection.map(analyze_feature)
            batch_info = results_batch.getInfo()
            all_results_features.extend(batch_info['features'])
            print(f"Batch {batch_number} complete. Processed {len(batch_info['features'])} sub-districts.")
            
        except Exception as e:
            print(f"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            print(f"!!! CRITICAL ERROR processing Batch {batch_number}: {e}")
            print("This batch failed, possibly due to computation limits.")
            print("Skipping this batch and continuing...")
            print(f"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

    # --- Step 4: Process all collected results locally ---
    print("\nAll batches complete. Processing final data and creating CSV...")
    processed_data = []
    
    # Pre-configure Polynomial features setup
    years_X = np.array([2000, 2005, 2010, 2015, 2020]).reshape(-1, 1)
    poly = PolynomialFeatures(degree=2)
    X_poly = poly.fit_transform(years_X)
    future_X = poly.transform(np.array([[2035]]))

    for feature in all_results_features:
        props = feature['properties']
        
        sub_district_name = props.get('NAME_3', 'N/A')
        district_name = props.get('NAME_2', 'N/A')
        state_name = props.get('NAME_1', 'N/A')
        
        total_area_sq_km = props.get('total_area_sqm', 0) / 1_000_000
        current_green_area_sq_km = props.get('current_green_area_sqm', 0) / 1_000_000
        population = props.get('population', 0)
        
        if total_area_sq_km == 0: continue
            
        who_target_sq_km = (population * 9) / 1_000_000
        canopy_target_sq_km = total_area_sq_km * 0.30
        final_target_sq_km = max(who_target_sq_km, canopy_target_sq_km)
        deficit_sq_km = max(0, final_target_sq_km - current_green_area_sq_km)
        
        # --- Artificial Intelligence: Polynomial Regression Population Forecast ---
        historical_pops = []
        for y in [2000, 2005, 2010, 2015, 2020]:
            historical_pops.append(props.get(f'population_{y}', 0))
        
        # Only predict if we have valid historical data
        predicted_pop_2035 = 0
        if sum(historical_pops) > 0:
            y_pops = np.array(historical_pops)
            model = LinearRegression()
            model.fit(X_poly, y_pops)
            predicted_pop_float = model.predict(future_X)[0]
            # Population shouldn't be negative
            predicted_pop_2035 = max(0, int(predicted_pop_float))
        
        future_who_target_sq_km = (predicted_pop_2035 * 9) / 1_000_000
        future_final_target_sq_km = max(future_who_target_sq_km, canopy_target_sq_km)
        future_deficit_sq_km = max(0, future_final_target_sq_km - current_green_area_sq_km)

        annual_mean_temp_c = props.get('annual_mean_temp_c', -9999)
        annual_mean_rainfall_mm = props.get('annual_mean_rainfall_mm', -9999)
        soil_org_carbon_pct = props.get('soil_org_carbon_pct', -9999)
        surface_water_sq_km = props.get('surface_water_sqm', 0) / 1_000_000

        res_dict = {
            'sub_district': sub_district_name,
            'district': district_name,
            'state': state_name,
            'total_area_sq_km': round(total_area_sq_km, 2),
            'estimated_population_2020': int(population),
            'predicted_population_2035': int(predicted_pop_2035),
            'current_green_cover_sq_km': round(current_green_area_sq_km, 2),
            'targeted_green_cover_sq_km': round(final_target_sq_km, 2),
            'greenery_deficit_sq_km': round(deficit_sq_km, 2),
            'future_targeted_green_cover_sq_km': round(future_final_target_sq_km, 2),
            'future_greenery_deficit_sq_km': round(future_deficit_sq_km, 2),
            'annual_mean_temp_c': round(annual_mean_temp_c, 2) if annual_mean_temp_c != -9999 else 'N/A',
            'annual_mean_rainfall_mm': round(annual_mean_rainfall_mm, 2) if annual_mean_rainfall_mm != -9999 else 'N/A',
            'soil_org_carbon_pct': round(soil_org_carbon_pct, 2) if soil_org_carbon_pct != -9999 else 'N/A',
            'surface_water_sq_km': round(surface_water_sq_km, 2)
        }
        # Add historical pops for transparency
        for y in [2000, 2005, 2010, 2015]:
            res_dict[f'population_{y}'] = int(props.get(f'population_{y}', 0))

        processed_data.append(res_dict)

    df = pd.DataFrame(processed_data)

    # --- Step 5: Save to Excel ---
    timestamp = time.strftime("%Y%m%d-%H%M%S")
    
    # Define your target directory
    save_directory = r"D:\Capstone_Projec"
    file_name = f'IND_Survey_WithAI_{timestamp}.xlsx'
    output_filename = os.path.join(save_directory, file_name)
    
    try:
        os.makedirs(save_directory, exist_ok=True)
    except OSError as e:
        print(f"Error creating directory {save_directory}: {e}")
        output_filename = file_name 
    
    # Save as Excel instead of CSV
    df.to_excel(output_filename, index=False)
    
    print("\n==========================================================")
    print(f"      SUCCESS! MULTI-YEAR AI FORECAST FULL ANALYSIS COMPLETE.")
    print(f"Data for {len(df)} sub-districts has been saved to:")
    print(f"      >> {output_filename} <<")
    print("==========================================================")


if __name__ == '__main__':
    batch_analyze_all_subdistricts_full()