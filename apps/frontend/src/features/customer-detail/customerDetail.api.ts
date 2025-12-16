import { httpGet } from '@/shared/apis/http'
import { CustomerPurchaseDetailResponse } from './customerDetail.types'

export function fetchCustomerDetail(customerId: number) {
  return httpGet<CustomerPurchaseDetailResponse>(`/api/customers/${customerId}/purchases`)
}
