import { Customer } from '@/entities/customer/model/customer.model'
import { useCustomerPurchasesQuery } from '@/entities/customer/query/useCustomerPurchasesQuery'
import { EmptyFallback } from '@/shared/ui/fallbacks/EmptyFallback'
import { Col, Row, Spin } from 'antd'
import { CustomerPurchaseItem } from './CustomerPurchaseItem'

type Props = {
  customerId: Customer['id']
}

function CustomerPurchaseDetail({ customerId }: Props) {
  const { data = [], isLoading, isFetching } = useCustomerPurchasesQuery(customerId)

  if (isLoading || isFetching) {
    return (
      <Centered>
        <Spin />
      </Centered>
    )
  }

  if (data.length === 0) {
    return <EmptyFallback text="고객 상세 구매 내역 정보가 없습니다." />
  }

  return (
    <Row gutter={[0, 16]}>
      {data.map((item, index) => (
        <Col span={24} key={`${item.date}-${index}`}>
          <CustomerPurchaseItem
            date={item.date}
            product={item.product}
            imgSrc={item.imgSrc}
            price={item.price}
            quantity={item.quantity}
          />
        </Col>
      ))}
    </Row>
  )
}

function Centered({ children }: React.PropsWithChildren) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  )
}

export { CustomerPurchaseDetail }
