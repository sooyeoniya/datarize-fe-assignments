import { CardLoadingFallback } from '@/shared/ui/fallbacks/CardLoadingFallback'
import { Suspense } from 'react'
import { PurchaseFrequencyChart } from './PurchaseFrequencyChart'

function PurchaseFrequencyPanel() {
  return (
    // TODO: fallback ui 구현
    // TODO: 내부 차트만 로딩처리 하는건 어떨까?
    <Suspense fallback={<CardLoadingFallback title="가격대별 구매 빈도" />}>
      <PurchaseFrequencyChart />
    </Suspense>
  )
}

export { PurchaseFrequencyPanel }
