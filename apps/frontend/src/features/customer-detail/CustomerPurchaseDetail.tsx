import { formatNumber } from '@/shared/lib/formatNumber'
import { Card, Col, Image, Row, Typography, theme } from 'antd'
import { useCustomerDetailQuery } from './useCustomerDetailQuery'

const { Text } = Typography

type Props = {
  customerId: number
}

// TODO: 여기도 로딩 추가하면 좋을듯!
// TODO: 데이터가 없을 때는 Empty 컴포넌트 보여주기
function CustomerPurchaseDetail({ customerId }: Props) {
  const { data = [] } = useCustomerDetailQuery(customerId)
  const { token } = theme.useToken()

  return (
    <Row gutter={[0, 16]}>
      {data.map((item, index) => (
        <Col span={24} key={`${item.date}-${index}`}>
          <Card style={{ borderRadius: 12 }} styles={{ body: { padding: 16 } }}>
            <Text strong>구매일자: {item.date}</Text>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: token.colorBorderSecondary,
                marginTop: 8,
                marginBottom: 16,
              }}
            />

            <Row align="middle" justify="space-between">
              <Row align="middle" gutter={16}>
                <Col>
                  <Image
                    src={item.imgSrc}
                    width={48}
                    height={48}
                    style={{ borderRadius: 10, objectFit: 'cover' }}
                    preview={false}
                  />
                </Col>

                <Col>
                  <Text strong style={{ fontSize: 16 }}>
                    {item.product}
                  </Text>
                </Col>
              </Row>

              <Col style={{ textAlign: 'right' }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: token.colorPrimary,
                  }}
                >
                  {formatNumber(item.price)}원
                </Text>
                <br />
                <Text type="secondary">수량: {item.quantity}</Text>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export { CustomerPurchaseDetail }
