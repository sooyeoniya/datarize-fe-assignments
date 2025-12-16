import { formatNumber } from '@/shared/lib/formatNumber'
import { formatPriceRange } from '@/shared/lib/formatPriceRange'
import { Card, DatePicker, theme } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { usePurchaseFrequencyQuery } from './usePurchaseFrequencyQuery'

const { RangePicker } = DatePicker

// TODO: 날짜 데이터도 path params에 넣는 거 어떨까?
// TODO: 데이터가 없을 때는 Empty 컴포넌트 보여주기
const DEFAULT_FROM = '2024-07-01'
const DEFAULT_TO = '2024-07-31'

function PurchaseFrequencyChart() {
  const { token } = theme.useToken()

  const [range, setRange] = useState<[Dayjs, Dayjs]>([dayjs(DEFAULT_FROM), dayjs(DEFAULT_TO)])
  const { data } = usePurchaseFrequencyQuery({
    from: range[0].format('YYYY-MM-DD'),
    to: range[1].format('YYYY-MM-DD'),
  })

  const chartData = data.map((item) => ({ range: formatPriceRange(item.range), count: formatNumber(item.count) }))

  return (
    <Card
      title="가격대별 구매 빈도"
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
      style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
      styles={{ body: { flex: 1, display: 'flex', minHeight: 0 } }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 50, left: 20, bottom: 60 }}>
          <XAxis
            dataKey="range"
            angle={-30}
            textAnchor="end"
            interval={0}
            label={{
              value: '가격대 (원)',
              position: 'insideBottomRight',
              dx: 35,
            }}
          />
          <YAxis
            label={{
              value: '구매 횟수 (회)',
              angle: -90,
              position: 'insideTopLeft',
              dy: 55,
            }}
          />
          <Tooltip
            labelFormatter={(label: string) => `가격대: ${label}원`}
            formatter={(value?: number) => [`${value ?? 0}회`, '구매 횟수']}
          />
          <Bar dataKey="count" fill={token.colorPrimary} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export { PurchaseFrequencyChart }
