export type CustomersParams = {
  sortBy?: 'asc' | 'desc'
  name?: string
}

export type CustomerItem = {
  id: number
  name: string
  count: number
  totalAmount: number
}

export type CustomersResponse = CustomerItem[]
