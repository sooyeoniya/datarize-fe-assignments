import { Card } from 'antd'

function CustomerDetailPanel() {
  const hasSelectedCustomer = !!false

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
      style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
      styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'auto' } }}
    ></Card>
  )
}

export { CustomerDetailPanel }
