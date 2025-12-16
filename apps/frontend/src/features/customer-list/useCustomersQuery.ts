import { useQuery } from '@tanstack/react-query'
import { fetchCustomers } from './customers.api'
import { CustomersParams } from './customers.types'

export function useCustomersQuery({ sortBy, name }: CustomersParams = {}) {
  return useQuery({
    queryKey: ['customers', { sortBy, name }],
    // TODO: 검색 결과 없음 404 에러 처리하기
    queryFn: () => fetchCustomers({ sortBy, name }),
    staleTime: 1000 * 60 * 5,
    // TODO: staleTime 다시 고민해보기,, 고객 목록은 비교적 자주 변할 수 있어서 purchaseFrequency 보다는 짧게 5분 설정 -> 이것도 시간 잘 모르겠음
  })
}
