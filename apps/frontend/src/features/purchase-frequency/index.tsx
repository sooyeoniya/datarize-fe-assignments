import { Suspense } from 'react'
import { PurchaseFrequencyChart } from './PurchaseFrequencyChart'

function PurchaseFrequencyPanel() {
  return (
    // TODO: fallback ui 구현
    // TODO: 내부 차트만 로딩처리 하는건 어떨까?
    <Suspense fallback={<>...loading</>}>
      <PurchaseFrequencyChart />
    </Suspense>
  )
}

export { PurchaseFrequencyPanel }
