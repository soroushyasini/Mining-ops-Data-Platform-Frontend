import { GrindingFacility, SampleType } from '@/shared/types'

export interface LabBatchCreate {
  batch_date: string           // Jalali date string
  notes?: string | null
}

export interface LabBatchUpdate {
  batch_date?: string | null
  notes?: string | null
}

export interface LabBatchResponse {
  id: number
  batch_date: string
  batch_date_gregorian: string
  notes: string | null
  results_count: number
  created_at: string
  updated_at: string
}

export interface LabResultCreate {
  batch_id: number
  sample_code: string          // Auto-parsed: facility + type + date + sequence
  gold_ppm: number
  notes?: string | null
}

export interface LabResultUpdate {
  sample_code?: string | null
  gold_ppm?: number | null
  notes?: string | null
}

export interface LabResultResponse {
  id: number
  batch_id: number
  sample_code: string
  gold_ppm: number
  facility: GrindingFacility | null   // Parsed from sample_code
  sample_type: SampleType | null      // Parsed from sample_code
  sample_date: string | null          // Parsed from sample_code
  sequence_number: number | null      // Parsed from sample_code
  notes: string | null
  created_at: string
  updated_at: string
}

export interface LabResultBulkCreate {
  results: LabResultCreate[]
}

export interface LabFilters {
  page?: number
  size?: number
  facility?: GrindingFacility
  sample_type?: SampleType
  date_from?: string
  date_to?: string
}
