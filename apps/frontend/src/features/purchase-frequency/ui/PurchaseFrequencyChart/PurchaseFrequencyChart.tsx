import { usePurchaseFrequencSuspenseQuery } from '@/entities/purchase/query/usePurchaseFrequencySuspenseQuery'
import { formatNumber } from '@/shared/lib/formatNumber'
import { formatPriceRange } from '@/shared/lib/formatPriceRange'
import { EmptyFallback } from '@/shared/ui/fallbacks/EmptyFallback'
import { theme } from 'antd'
import { Dayjs } from 'dayjs'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {
  range: [Dayjs, Dayjs]
}

function PurchaseFrequencyChart({ range }: Props) {
  const { token } = theme.useToken()

  const { data } = usePurchaseFrequencSuspenseQuery({
    from: range[0].format('YYYY-MM-DD'),
    to: range[1].format('YYYY-MM-DD'),
  })

  const totalCount = data.reduce((sum, item) => sum + item.count, 0)

  if (totalCount === 0) {
    return <EmptyFallback text="해당 기간의 구매 데이터가 없습니다." />
  }

  const chartData = data.map((item) => ({ range: formatPriceRange(item.range), count: formatNumber(item.count) }))

  return (
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
  )
}

export { PurchaseFrequencyChart }
