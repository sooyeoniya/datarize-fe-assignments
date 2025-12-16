import { useQuery } from '@tanstack/react-query'
import { fetchCustomerPurchases } from '../api/customer-purchases.api'
import { Customer } from '../model/customer.model'

export function useCustomerPurchasesQuery(customerId: Customer['id'] | null) {
  return useQuery({
    queryKey: ['customerPurchases', customerId],
    queryFn: ({ queryKey, signal }) => {
      const [, id] = queryKey

      if (typeof id !== 'number') {
        throw new Error('customerId is required')
      }

      return fetchCustomerPurchases(id, signal)
    },
    enabled: customerId !== null,
    staleTime: 1000 * 60 * 30, // 30분 사실 자주 바뀌진 않을 데이터같음 (고객 목록과 비슷할지도..?)
  })
}
