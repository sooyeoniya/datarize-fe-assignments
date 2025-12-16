/**
 * API DTO 타입 (API, Query에서만 허용)
 */

import { Customer } from '../model/customer.model'

export type CustomersParams = {
  sortBy?: 'asc' | 'desc'
  name?: string
}

export type CustomersResponse = Customer[]
