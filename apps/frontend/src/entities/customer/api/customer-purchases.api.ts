import { httpGet } from '@/shared/apis/http'
import { CustomerPurchasesResponse } from './customer-purchases.types'

export function fetchCustomerPurchases(customerId: number, signal?: AbortSignal) {
  return httpGet<CustomerPurchasesResponse>(`/customers/${customerId}/purchases`, { signal })
}
