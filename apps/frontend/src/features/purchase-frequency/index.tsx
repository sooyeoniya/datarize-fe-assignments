import { CardLoadingFallback } from '@/shared/ui/fallbacks/CardLoadingFallback'
import { DatePicker } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { Suspense, useState } from 'react'
import { PurchaseFrequencyChart } from './ui/PurchaseFrequencyChart'
import { PurchaseFrequencyContainer } from './ui/PurchaseFrequencyContainer'

const { RangePicker } = DatePicker

// TODO: 날짜 데이터도 path params에 넣는 거 어떨까?
const DEFAULT_FROM = '2024-07-01'
const DEFAULT_TO = '2024-07-31'

function PurchaseFrequencyPanel() {
  const [range, setRange] = useState<[Dayjs, Dayjs]>([dayjs(DEFAULT_FROM), dayjs(DEFAULT_TO)])

  return (
    <Suspense fallback={<CardLoadingFallback title="가격대별 구매 빈도" />}>
      <PurchaseFrequencyContainer
        extra={
          <RangePicker
            value={range}
            onChange={(values) => {
              if (!values) return

              const [fromDate, toDate] = values
              if (!fromDate || !toDate) return

              setRange([fromDate, toDate])
            }}
          />
        }
      >
        <PurchaseFrequencyChart range={range} />
      </PurchaseFrequencyContainer>
    </Suspense>
  )
}

export { PurchaseFrequencyPanel }
