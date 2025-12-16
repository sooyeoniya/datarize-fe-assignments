import { useQuery } from '@tanstack/react-query'
import { fetchCustomerDetail } from './customerDetail.api'

export function useCustomerDetailQuery(customerId: number | null) {
  return useQuery({
    queryKey: ['customerDetail', customerId],
    queryFn: ({ queryKey, signal }) => {
      const [, id] = queryKey

      if (typeof id !== 'number') {
        throw new Error('customerId is required')
      }

      return fetchCustomerDetail(id, signal)
    },
    enabled: customerId !== null,
    staleTime: 1000 * 60 * 30, // 30분 사실 자주 바뀌진 않을 데이터같음 (고객 목록과 비슷할지도..?)
  })
}
