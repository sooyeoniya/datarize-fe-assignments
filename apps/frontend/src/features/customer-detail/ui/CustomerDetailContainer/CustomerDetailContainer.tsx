import { Customer } from '@/entities/customer/model/customer.model'
import { UserOutlined } from '@ant-design/icons'
import { Card, Typography } from 'antd'

const { Text } = Typography

type Props = Pick<Customer, 'id' | 'name'> & React.PropsWithChildren

function CustomerDetailContainer({ id, name, children }: Props) {
  return (
    <Card
      title="고객 상세 구매 내역"
      extra={
        <Text strong>
          <UserOutlined style={{ marginRight: 8 }} />
          {name} (ID: {id})
        </Text>
      }
      style={cardStyle}
      styles={{ body: cardBodyStyle }}
    >
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
  gap: '24px',
} as const

export { CustomerDetailContainer }
