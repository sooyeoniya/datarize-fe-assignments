import { httpGet } from '@/shared/apis/http'
import { CustomerPurchaseDetailResponse } from './customer-purchases.types'

export function fetchCustomerDetail(customerId: number, signal?: AbortSignal) {
  return httpGet<CustomerPurchaseDetailResponse>(`/api/customers/${customerId}/purchases`, { signal })
}
