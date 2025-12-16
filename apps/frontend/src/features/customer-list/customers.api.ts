import { httpGet } from '@/shared/apis/http'
import { CustomersParams, CustomersResponse } from './customers.types'

export function fetchCustomers(params?: CustomersParams) {
  return httpGet<CustomersResponse>('/api/customers', { params })
}
