import { RecordStatus, GrindingFacility } from '@/shared/types'

export interface BunkerCreate {
  transport_date: string       // Jalali date string
  source_facility: GrindingFacility
  tonnage: number
  cost_per_ton?: number | null
  total_cost?: number | null
  driver_id?: number | null
  car_id?: number | null
  notes?: string | null
}

export interface BunkerUpdate {
  transport_date?: string | null
  source_facility?: GrindingFacility | null
  tonnage?: number | null
  cost_per_ton?: number | null
  total_cost?: number | null
  driver_id?: number | null
  car_id?: number | null
  notes?: string | null
  status?: RecordStatus | null
}

export interface BunkerResponse {
  id: number
  transport_date: string
  transport_date_gregorian: string
  source_facility: GrindingFacility
  tonnage: number
  cost_per_ton: number | null
  total_cost: number | null
  driver_id: number | null
  car_id: number | null
  notes: string | null
  status: RecordStatus
  created_at: string
  updated_at: string
}

export interface BunkerFilters {
  page?: number
  size?: number
  source_facility?: GrindingFacility
  status?: RecordStatus
  date_from?: string
  date_to?: string
}
