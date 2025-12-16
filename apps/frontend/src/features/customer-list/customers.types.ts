export type CustomersParams = {
  /**
   * 구매 금액 기준 정렬
   * asc: 오름차순, desc: 내림차순
   */
  sortBy?: 'asc' | 'desc'
  name?: string
}

// TODO: customer-detail에서 customers에 있는 타입을 호출하고 있는 문제 해결하기 (같은 계층에서 서로 참조하면 안되는데 지금 그런 구조임, 아예 하나의 엔티티 폴더로 합치는건?)
export type CustomerItem = {
  id: number
  name: string
  count: number
  totalAmount: number
}

export type CustomersResponse = CustomerItem[]
