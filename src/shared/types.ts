// Shared enums and types used across all modules

export type RecordStatus = 'registered' | 'costed' | 'invoiced' | 'paid'

export type GrindingFacility = 'robat_sefid' | 'shen_beton' | 'kavian'

export type EntityType = 'truck' | 'bunker' | 'grinding' | 'lab_batch' | 'payment_group'

export type SampleType = 'K' | 'L' | 'T' | 'CR' | 'RC'

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  size: number
  pages: number
}

// Human-readable Persian labels for enums
export const RECORD_STATUS_LABELS: Record<RecordStatus, string> = {
  registered: 'ثبت شده',
  costed: 'هزینه‌یابی شده',
  invoiced: 'صورت‌حساب صادر شده',
  paid: 'پرداخت شده',
}

export const GRINDING_FACILITY_LABELS: Record<GrindingFacility, string> = {
  robat_sefid: 'رباط سفید',
  shen_beton: 'شن بتن',
  kavian: 'کاویان',
}

export const ENTITY_TYPE_LABELS: Record<EntityType, string> = {
  truck: 'کامیون',
  bunker: 'باکت',
  grinding: 'آسیاب',
  lab_batch: 'دسته آزمایشگاهی',
  payment_group: 'گروه پرداختی',
}

export const SAMPLE_TYPE_LABELS: Record<SampleType, string> = {
  K: 'کیک (جامد)',
  L: 'محلول (مایع)',
  T: 'باطله',
  CR: 'کربن',
  RC: 'بررسی بازیافت',
}
