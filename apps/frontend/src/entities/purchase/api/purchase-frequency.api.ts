import { httpGet } from '@/shared/apis/http'
import { PurchaseFrequencyParams, PurchaseFrequencyResponse } from './purchase-frequency.types'

export function fetchPurchaseFrequency(params?: PurchaseFrequencyParams, signal?: AbortSignal) {
  return httpGet<PurchaseFrequencyResponse>('/purchase-frequency', { params, signal })
}
