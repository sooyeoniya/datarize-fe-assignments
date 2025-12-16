import { Card } from 'antd'

function CustomerDetailPanel() {
  const hasSelectedCustomer = !!false

  if (!hasSelectedCustomer) {
    return (
      <Card title="고객 상세 구매 내역">
        <p
          style={{
            textAlign: 'center',
            color: '#999',
            // padding: 80,
          }}
        >
          좌측 고객을 선택하여 상세 구매 내역을 확인하세요.
        </p>
      </Card>
    )
  }

  return <Card title="고객 상세 구매 내역"></Card>
}

export { CustomerDetailPanel }
