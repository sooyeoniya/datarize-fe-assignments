import { Card, Col, Image, Row, Typography, theme } from 'antd'
import { formatNumber } from '@/shared/lib/formatNumber'
import { CustomerPurchase } from '@/entities/customer/model/customer.model'

const { Text } = Typography

type Props = CustomerPurchase

function CustomerPurchaseItem({ date, product, imgSrc, price, quantity }: Props) {
  const { token } = theme.useToken()

  return (
    <Card style={{ borderRadius: 12 }} styles={{ body: { padding: 16 } }}>
      <Text strong>구매일자: {date}</Text>

      <Divider color={token.colorBorderSecondary} />

      <Row align="middle" justify="space-between">
        <Row align="middle" gutter={16}>
          <Col>
            <Image
              src={imgSrc}
              width={48}
              height={48}
              style={{ borderRadius: 10, objectFit: 'cover' }}
              preview={false}
            />
          </Col>

          <Col>
            <Text strong style={{ fontSize: 16 }}>
              {product}
            </Text>
          </Col>
        </Row>

        <Col style={{ textAlign: 'right' }}>
          <Text style={{ fontSize: 18, color: token.colorPrimary }} strong>
            {formatNumber(price)}원
          </Text>
          <br />
          <Text type="secondary">수량: {quantity}</Text>
        </Col>
      </Row>
    </Card>
  )
}

type DividerProps = {
  color: string
}

function Divider({ color }: DividerProps) {
  return (
    <div
      style={{
        height: 1,
        background: color,
        marginTop: 8,
        marginBottom: 16,
      }}
    />
  )
}

export { CustomerPurchaseItem }
