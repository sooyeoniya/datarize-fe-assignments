import { httpGet } from '@/shared/apis/http'
import { Customer } from '../model/customer.model'
import { CustomerPurchasesResponse } from './customer-purchases.types'

export function fetchCustomerPurchases(customerId: Customer['id'], signal?: AbortSignal) {
  return httpGet<CustomerPurchasesResponse>(`/customers/${customerId}/purchases`, { signal })
}
