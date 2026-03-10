import { RecordStatus, GrindingFacility } from '@/shared/types'

export interface DriverSummary {
  id: number
  full_name: string
}

export interface CarSummary {
  id: number
  plate_number: string
}

export interface TruckLoadCreate {
  receipt_number: string
  load_date: string           // Jalali date string e.g. "1403/05/21"
  driver_id: number
  car_id: number
  destination: GrindingFacility
  tonnage: number
  cost_per_ton?: number | null
  total_cost?: number | null
  notes?: string | null
}

export interface TruckLoadUpdate {
  receipt_number?: string | null
  load_date?: string | null
  driver_id?: number | null
  car_id?: number | null
  destination?: GrindingFacility | null
  tonnage?: number | null
  cost_per_ton?: number | null
  total_cost?: number | null
  notes?: string | null
  status?: RecordStatus | null
}

export interface TruckLoadResponse {
  id: number
  receipt_number: string
  load_date: string
  load_date_gregorian: string
  driver: DriverSummary
  car: CarSummary
  destination: GrindingFacility
  tonnage: number
  cost_per_ton: number | null
  total_cost: number | null
  notes: string | null
  status: RecordStatus
  created_at: string
  updated_at: string
}

export interface TruckLoadFilters {
  page?: number
  size?: number
  destination?: GrindingFacility
  status?: RecordStatus
  driver_id?: number
  date_from?: string
  date_to?: string
}
