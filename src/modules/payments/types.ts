import { EntityType } from '@/shared/types'

export interface PaymentItemCreate {
  entity_type: EntityType
  entity_id: number
  amount: number
  notes?: string | null
}

export interface PaymentItemResponse {
  id: number
  payment_group_id: number
  entity_type: EntityType
  entity_id: number
  amount: number
  notes: string | null
  created_at: string
}

export interface PaymentGroupCreate {
  bank_name: string
  transaction_date: string     // Jalali date string
  reference_number?: string | null
  total_amount: number
  notes?: string | null
  items: PaymentItemCreate[]
}

export interface PaymentGroupUpdate {
  bank_name?: string | null
  transaction_date?: string | null
  reference_number?: string | null
  total_amount?: number | null
  notes?: string | null
}

export interface PaymentGroupResponse {
  id: number
  bank_name: string
  transaction_date: string
  transaction_date_gregorian: string
  reference_number: string | null
  total_amount: number
  notes: string | null
  items: PaymentItemResponse[]
  created_at: string
  updated_at: string
}

export interface PaymentFilters {
  page?: number
  size?: number
  bank_name?: string
  date_from?: string
  date_to?: string
  entity_type?: EntityType
}
