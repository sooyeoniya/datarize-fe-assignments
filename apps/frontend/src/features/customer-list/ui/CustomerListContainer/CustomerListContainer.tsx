import { Card } from 'antd'

type Props = {
  extra: React.ReactNode
} & React.PropsWithChildren

function CustomerListContainer({ extra, children }: Props) {
  return (
    <Card title="고객 목록" extra={extra} style={cardStyle} styles={{ body: cardBodyStyle }}>
      {children}
    </Card>
  )
}

const cardStyle = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
} as const

const cardBodyStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
  overflow: 'auto',
} as const

export { CustomerListContainer }
