import { httpGet } from '@/shared/apis/http'
import { PurchaseFrequencyParams, PurchaseFrequencyResponse } from './purchaseFrequency.types'

export function fetchPurchaseFrequency(params?: PurchaseFrequencyParams, signal?: AbortSignal) {
  return httpGet<PurchaseFrequencyResponse>('/api/purchase-frequency', { params, signal })
}
