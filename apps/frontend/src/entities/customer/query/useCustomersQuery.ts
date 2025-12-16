import { HttpError } from '@/shared/apis/http.error'
import { useQuery } from '@tanstack/react-query'
import { fetchCustomers } from '../api/customers.api'
import { CustomersParams } from '../api/customers.types'

export function useCustomersQuery({ sortBy, name }: CustomersParams = {}) {
  return useQuery({
    queryKey: ['customers', { sortBy, name }],
    queryFn: async ({ signal }) => {
      try {
        return await fetchCustomers({ sortBy, name }, signal)
      } catch (e) {
        if (e instanceof HttpError && e.status === 404) {
          return [] // 검색 결과 없음
        }
        throw e
      }
    },
    staleTime: 1000 * 60 * 5,
    // TODO: staleTime 다시 고민해보기,, 고객 목록은 비교적 자주 변할 수 있어서 purchaseFrequency 보다는 짧게 5분 설정 -> 이것도 시간 잘 모르겠음
  })
}
