/**
 * API DTO 타입 (API, Query에서만 허용)
 */

import { PurchaseFrequency } from '../model/purchase-frequency.model'

export type PurchaseFrequencyParams = {
  from?: string
  to?: string
}

export type PurchaseFrequencyResponse = PurchaseFrequency[]
