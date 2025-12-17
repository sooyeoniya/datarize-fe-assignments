import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPurchaseFrequency } from '../api/purchase-frequency.api'
import { PurchaseFrequencyParams } from '../api/purchase-frequency.types'

export function usePurchaseFrequencSuspenseQuery({ from, to }: PurchaseFrequencyParams = {}) {
  return useSuspenseQuery({
    queryKey: ['purchaseFrequency', { from, to }],
    queryFn: ({ signal }) => fetchPurchaseFrequency({ from, to }, signal),
    staleTime: 1000 * 60 * 30,
  })
}
