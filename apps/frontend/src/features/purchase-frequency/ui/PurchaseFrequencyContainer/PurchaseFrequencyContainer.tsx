import { Card } from 'antd'

type Props = {
  extra: React.ReactNode
} & React.PropsWithChildren

function PurchaseFrequencyContainer({ extra, children }: Props) {
  return (
    <Card
      title="가격대별 구매 빈도"
      extra={extra}
      style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
      styles={{ body: { flex: 1, display: 'flex', minHeight: 0 } }}
    >
      {children}
    </Card>
  )
}

export { PurchaseFrequencyContainer }
