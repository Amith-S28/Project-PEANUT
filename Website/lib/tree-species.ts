// Comprehensive tree species database with climate suitability
export const EXPANDED_TREE_SPECIES = {
  // Tropical & Subtropical Dry Forests
  tropical_dry: [
    "Neem (Azadirachta indica)",
    "Teak (Tectona grandis)",
    "Sal (Shorea robusta)",
    "Rosewood (Dalbergia latifolia)",
    "Indian Ash (Lannea coromandelica)",
    "Mahua (Madhuca longifolia)",
    "Khair (Acacia catechu)",
    "Semal (Bombax ceiba)",
    "Siris (Albizia lebbeck)",
    "Peepal (Ficus religiosa)",
    "Banyan (Ficus benghalensis)",
    "Arjun (Terminalia arjuna)",
  ],

  // Semi-Arid & Arid Regions
  arid_semiarid: [
    "Prosopis (Prosopis juliflora)",
    "Acacia (Acacia nilotica)",
    "Khejri (Prosopis cineraria)",
    "Jamun (Syzygium cumini)",
    "Ber (Ziziphus mauritiana)",
    "Babul (Acacia arabica)",
    "Khemp (Acacia senegal)",
    "Jujube (Ziziphus jujuba)",
    "Date Palm (Phoenix dactylifera)",
    "Mulberry (Morus alba)",
  ],

  // Tropical Wet Evergreen
  tropical_wet: [
    "Balsam (Impatiens balsamina)",
    "Anjeer (Ficus carica)",
    "Mango (Mangifera indica)",
    "Coconut (Cocos nucifera)",
    "Arecanut (Areca catechu)",
    "Cashew (Anacardium occidentale)",
    "Ebony (Diospyros melanoxylon)",
    "Mahogany (Swietenia macrophylla)",
    "Sapota (Manilkara zapota)",
    "Jackfruit (Artocarpus heterophyllus)",
  ],

  // Temperate & Subtropical Hill
  temperate_hill: [
    "Deodar (Cedrus deodara)",
    "Pine (Pinus roxburghii)",
    "Oak (Quercus semicarpifolia)",
    "Walnut (Juglans regia)",
    "Chestnut (Castanea sativa)",
    "Fir (Abies pindrow)",
    "Spruce (Picea smithiana)",
    "Rhododendron (Rhododendron arboreum)",
    "Magnolia (Magnolia grandiflora)",
    "Cypress (Cupressus sempervirens)",
  ],

  // Coastal Regions
  coastal: [
    "Mangrove (Rhizophora mucronata)",
    "Coconut Palm (Cocos nucifera)",
    "Casuarina (Casuarina equisetifolia)",
    "Neem (Azadirachta indica)",
    "Beach Almond (Terminalia catappa)",
    "Cashew (Anacardium occidentale)",
    "Salvadora (Salvadora persica)",
    "Calophyllum (Calophyllum inophyllum)",
    "Nypa (Nypa fruticans)",
  ],

  // Urban & Parks (Fast Growing, Pollution-Tolerant)
  urban_parks: [
    "Gulmohar (Delonix regia)",
    "Ashok (Saraca asoca)",
    "Jacaranda (Jacaranda mimosifolia)",
    "Lagerstroemia (Lagerstroemia speciosa)",
    "Orchid Tree (Bauhinia variegata)",
    "Bougainvillea (Bougainvillea spectabilis)",
    "Plumeria (Plumeria alba)",
    "Bottle Brush (Callistemon citrinus)",
    "Silk Cotton (Ceiba pentandra)",
    "Golden Shower (Cassia fistula)",
  ],

  // Soil Conservation & Erosion Control
  erosion_control: [
    "Bamboo (Bambusa species)",
    "Vetiver (Chrysopogon zizanioides)",
    "Ipil Ipil (Leucaena leucocephala)",
    "Seabuckthorn (Hippophae rhamnoides)",
    "Shisham (Dalbergia sissoo)",
    "Eucalyptus (Eucalyptus globulus)",
    "Casuarina (Casuarina equisetifolia)",
    "Acacia (Acacia auriculiformis)",
  ],

  // Water Harvesting & Wetland
  water_conservation: [
    "Vetiver (Chrysopogon zizanioides)",
    "Sesbania (Sesbania grandiflora)",
    "Willow (Salix alba)",
    "Poplar (Populus deltoides)",
    "Water Hyacinth companion plants",
    "Bamboo (for watershed areas)",
    "Salvadora (salt-tolerant)",
  ],

  // Fruit Trees (Multi-use)
  fruit_trees: [
    "Mango (Mangifera indica)",
    "Banana (Musa sapientum)",
    "Papaya (Carica papaya)",
    "Orange (Citrus sinensis)",
    "Guava (Psidium guajava)",
    "Pomegranate (Punica granatum)",
    "Lemon (Citrus limon)",
    "Amla (Phyllanthus emblica)",
    "Custard Apple (Annona squamosa)",
    "Tamarind (Tamarindus indica)",
  ],

  // Medicinal & Ayurvedic
  medicinal: [
    "Neem (Azadirachta indica)",
    "Turmeric (Curcuma longa)",
    "Tulsi (Ocimum sanctum)",
    "Brahmi (Bacopa monnieri)",
    "Ashwagandha (Withania somnifera)",
    "Giloy (Tinospora cordifolia)",
    "Arjun (Terminalia arjuna)",
    "Amla (Phyllanthus emblica)",
    "Babool (Acacia arabica)",
    "Bhringraj (Eclipta alba)",
  ],
}

// Function to get suitable species for climate parameters
export function getRecommendedSpecies(
  rainfall: number,
  temperature: number,
  zone?: string
): string[] {
  const species: string[] = []

  // Dry zones (< 750mm rainfall)
  if (rainfall < 750) {
    species.push(...EXPANDED_TREE_SPECIES.arid_semiarid)
    species.push(...EXPANDED_TREE_SPECIES.erosion_control)
  }
  // Semi-arid (750-1200mm)
  else if (rainfall < 1200) {
    species.push(...EXPANDED_TREE_SPECIES.tropical_dry)
    species.push(...EXPANDED_TREE_SPECIES.arid_semiarid)
  }
  // Moderate rainfall (1200-2500mm)
  else if (rainfall < 2500) {
    species.push(...EXPANDED_TREE_SPECIES.tropical_dry)
    species.push(...EXPANDED_TREE_SPECIES.tropical_wet)
    species.push(...EXPANDED_TREE_SPECIES.fruit_trees)
  }
  // High rainfall (> 2500mm)
  else {
    species.push(...EXPANDED_TREE_SPECIES.tropical_wet)
    species.push(...EXPANDED_TREE_SPECIES.temperate_hill)
  }

  // Add urban/multi-use species for all zones
  species.push(...EXPANDED_TREE_SPECIES.urban_parks)
  species.push(...EXPANDED_TREE_SPECIES.medicinal)

  // Remove duplicates and limit to 15 recommendations
  return [...new Set(species)].slice(0, 15)
}
