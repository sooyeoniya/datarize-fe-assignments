import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPurchaseFrequency } from './purchaseFrequency.api'
import { PurchaseFrequencyParams } from './purchaseFrequency.types'

export function usePurchaseFrequencyQuery({ from, to }: PurchaseFrequencyParams = {}) {
  return useSuspenseQuery({
    queryKey: ['purchaseFrequency', { from, to }],
    queryFn: () => fetchPurchaseFrequency({ from, to }),
    staleTime: 1000 * 60 * 10,

    // 10분 -> 거의 변하지 않는 데이터일 가능성이 높음
    // 최신 날짜 범위를 선택하지 않는 이상
    // 그래서 staleTime을 좀 길게 가져감
    // 사실 이것보다 더 길게 해도 되긴함 30분~1시간
    // 그래도 일단은 10분으로 처리
  })
}
