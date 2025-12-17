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
    staleTime: 1000 * 60 * 30,
  })
}
