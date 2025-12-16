import { Customer } from '@/entities/customer/model/customer.model'
import { formatNumber } from '@/shared/lib/formatNumber'
import { DollarOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Col, Row, theme } from 'antd'
import { CustomerDetailStatCard } from './CustomerDetailStatCard'

type Props = Pick<Customer, 'count' | 'totalAmount'>

const createIconStyle = (color: string) => ({ fontSize: 20, color })

function CustomerDetailHeader({ count, totalAmount }: Props) {
  const { token } = theme.useToken()
  const iconStyle = createIconStyle(token.colorPrimary)

  return (
    <Row gutter={16}>
      <Col span={12}>
        <CustomerDetailStatCard
          icon={<ShoppingCartOutlined style={iconStyle} />}
          label="총 구매 횟수:"
          value={`${count}회`}
        />
      </Col>

      <Col span={12}>
        <CustomerDetailStatCard
          icon={<DollarOutlined style={iconStyle} />}
          label="총 구매 금액:"
          value={`${formatNumber(totalAmount)}원`}
        />
      </Col>
    </Row>
  )
}

export { CustomerDetailHeader }
