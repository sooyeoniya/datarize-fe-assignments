import { Card, Typography } from 'antd'

const { Text } = Typography

function CustomerDetailPlaceholder() {
  return (
    <Card title="고객 상세 구매 내역" style={cardStyle} styles={{ body: cardBodyStyle }}>
      <Text type="secondary">좌측 고객을 선택하여 상세 구매 내역을 확인하세요.</Text>
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
  alignItems: 'center',
  justifyContent: 'center',
} as const

export { CustomerDetailPlaceholder }
