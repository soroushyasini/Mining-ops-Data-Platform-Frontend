import { RecordStatus, GrindingFacility } from '@/shared/types'

export interface GrindingEntryCreate {
  entry_date: string           // Jalali date string
  facility: GrindingFacility
  input_tonnage: number
  output_tonnage?: number | null
  waste_tonnage?: number | null
  grinding_cost?: number | null
  notes?: string | null
}

export interface GrindingEntryUpdate {
  entry_date?: string | null
  facility?: GrindingFacility | null
  input_tonnage?: number | null
  output_tonnage?: number | null
  waste_tonnage?: number | null
  grinding_cost?: number | null
  notes?: string | null
  status?: RecordStatus | null
}

export interface GrindingEntryResponse {
  id: number
  entry_date: string
  entry_date_gregorian: string
  facility: GrindingFacility
  input_tonnage: number
  output_tonnage: number | null
  waste_tonnage: number | null
  grinding_cost: number | null
  notes: string | null
  status: RecordStatus
  created_at: string
  updated_at: string
}

export interface GrindingFilters {
  page?: number
  size?: number
  facility?: GrindingFacility
  status?: RecordStatus
  date_from?: string
  date_to?: string
}
