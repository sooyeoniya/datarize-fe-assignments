// TODO: 외부에서 타입 가져다 쓸 때는 api dto 를 참조하면 안되고 그 entity의 model 자체를 참조하기
import { CustomerItem } from '@/entities/customer/api/customers.types'
import { UserOutlined } from '@ant-design/icons'
import { Card, Typography } from 'antd'
import { CustomerDetailHeader } from './CustomerDetailHeader'
import { CustomerPurchaseDetail } from './CustomerPurchaseDetail'

const { Text } = Typography

type Props = {
  customer: CustomerItem | null
}

function CustomerDetailPanel({ customer }: Props) {
  const hasSelectedCustomer = !!customer

  if (!hasSelectedCustomer) {
    return (
      <Card
        title="고객 상세 구매 내역"
        style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
        styles={{ body: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' } }}
      >
        <p style={{ textAlign: 'center', color: '#999' }}>좌측 고객을 선택하여 상세 구매 내역을 확인하세요.</p>
      </Card>
    )
  }

  return (
    <Card
      title="고객 상세 구매 내역"
      extra={
        <Text strong>
          <UserOutlined style={{ marginRight: 8 }} />
          {customer.name} (ID: {customer.id})
        </Text>
      }
      style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
      styles={{
        body: { flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'auto', gap: '24px' },
      }}
    >
      <CustomerDetailHeader count={customer.count} totalAmount={customer.totalAmount} />
      <CustomerPurchaseDetail customerId={customer.id} />
    </Card>
  )
}

export { CustomerDetailPanel }
