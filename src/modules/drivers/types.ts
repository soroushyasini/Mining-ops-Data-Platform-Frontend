export interface DriverCreate {
  full_name: string
  iban?: string | null
  phone?: string | null
}

export interface DriverUpdate {
  full_name?: string | null
  iban?: string | null
  phone?: string | null
}

export interface DriverResponse {
  id: number
  full_name: string
  iban: string | null
  phone: string | null
  created_at: string
  updated_at: string
}

export interface CarCreate {
  plate_number: string
  current_driver_id?: number | null
}

export interface CarUpdate {
  plate_number?: string | null
  current_driver_id?: number | null
}

export interface CarResponse {
  id: number
  plate_number: string
  current_driver_id: number | null
  current_driver: DriverResponse | null
  created_at: string
  updated_at: string
}

export interface DriversFilters {
  page?: number
  size?: number
  search?: string
}

export interface CarsFilters {
  page?: number
  size?: number
  search?: string
  driver_id?: number
}
