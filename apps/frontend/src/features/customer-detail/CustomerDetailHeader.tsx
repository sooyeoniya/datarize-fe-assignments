import { Customer } from '@/entities/customer/model/customer.model'
import { formatNumber } from '@/shared/lib/formatNumber'
import { DollarOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Col, Row, theme } from 'antd'
import { StatCard } from './ui/StatCard/StatCard'

type Props = Pick<Customer, 'count' | 'totalAmount'>

function CustomerDetailHeader({ count, totalAmount }: Props) {
  const { token } = theme.useToken()

  return (
    <Row gutter={16}>
      <Col span={12}>
        <StatCard
          icon={<ShoppingCartOutlined style={{ fontSize: 20, color: token.colorPrimary }} />}
          label="총 구매 횟수:"
          value={`${count}회`}
        />
      </Col>

      <Col span={12}>
        <StatCard
          icon={<DollarOutlined style={{ fontSize: 20, color: token.colorPrimary }} />}
          label="총 구매 금액:"
          value={`${formatNumber(totalAmount)}원`}
        />
      </Col>
    </Row>
  )
}

export { CustomerDetailHeader }
