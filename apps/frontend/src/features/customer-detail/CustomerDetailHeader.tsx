import { formatNumber } from '@/shared/lib/formatNumber'
import { DollarOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Card, Col, Row, theme, Typography } from 'antd'
import { CustomerItem } from '../customer-list/customers.types'

const { Text } = Typography

type Props = Pick<CustomerItem, 'count' | 'totalAmount'>

function CustomerDetailHeader({ count, totalAmount }: Props) {
  const { token } = theme.useToken()

  return (
    <Row gutter={16}>
      {/* TODO: 공통 컴포넌트 추출 */}
      <Col span={12}>
        <Card variant="borderless" style={{ background: '#f3f6ff' }} styles={{ body: { padding: 10 } }}>
          <ShoppingCartOutlined style={{ fontSize: 20, color: token.colorPrimary }} />
          <Text style={{ marginLeft: 8 }}>총 구매 횟수: </Text>
          <Text style={{ margin: '8px 0 0', color: token.colorPrimary }} strong>
            {count}회
          </Text>
        </Card>
      </Col>

      <Col span={12}>
        <Card variant="borderless" style={{ background: '#f3f6ff' }} styles={{ body: { padding: 10 } }}>
          <DollarOutlined style={{ fontSize: 20, color: token.colorPrimary }} />
          <Text style={{ marginLeft: 8 }}>총 구매 금액: </Text>
          <Text style={{ margin: '8px 0 0', color: token.colorPrimary }} strong>
            {formatNumber(totalAmount)}원
          </Text>
        </Card>
      </Col>
    </Row>
  )
}

export { CustomerDetailHeader }
