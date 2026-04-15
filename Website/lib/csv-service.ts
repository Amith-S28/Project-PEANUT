import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export function getRawDistrictsData() {
  // Read exactly from workspace public folder where the CSV resides
  const filePath = path.join(process.cwd(), '..', 'public', 'FinalFinalAnalysis.csv');
  if(!fs.existsSync(filePath)) {
     console.error("CSV file not found at", filePath);
     return [];
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });
  return records;
}

export function getStats() {
  const data = getRawDistrictsData();
  const total_districts = data.length;
  
  const total_population = data.reduce((sum: number, d: any) => sum + (Number(d.estimated_population) || 0), 0);
  const total_green_cover = data.reduce((sum: number, d: any) => sum + (Number(d.current_green_cover_sq_km) || 0), 0);
  const avg_priority = total_districts > 0
      ? data.reduce((sum: number, d: any) => sum + (Number(d.priority_index) || 0), 0) / total_districts
      : 0;

  return { total_districts, total_population, total_green_cover, avg_priority };
}
