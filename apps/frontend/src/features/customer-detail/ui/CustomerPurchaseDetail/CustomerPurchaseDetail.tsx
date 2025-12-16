import { useCustomerPurchasesQuery } from '@/entities/customer/query/useCustomerPurchasesQuery'
import { Col, Row, Spin } from 'antd'
import { CustomerPurchaseItem } from './CustomerPurchaseItem'
import { Customer } from '@/entities/customer/model/customer.model'

type Props = {
  customerId: Customer['id']
}

// TODO: 데이터가 없을 때는 Empty 컴포넌트 보여주기
function CustomerPurchaseDetail({ customerId }: Props) {
  const { data = [], isLoading, isFetching } = useCustomerPurchasesQuery(customerId)

  if (isLoading || isFetching) {
    return (
      <Centered>
        <Spin />
      </Centered>
    )
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
