import { httpGet } from '@/shared/apis/http'
import { CustomersParams, CustomersResponse } from './customers.types'

export function fetchCustomers(params?: CustomersParams, signal?: AbortSignal) {
  return httpGet<CustomersResponse>('/customers', { params, signal })
}
