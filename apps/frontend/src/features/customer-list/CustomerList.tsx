import { SearchOutlined } from '@ant-design/icons'
import { Card, Input, Table } from 'antd'
import { useCustomersQuery } from './useCustomersQuery'

function CustomerList() {
  // TODO: ID 기반으로 추가 정렬
  // TODO: 검색 기능 추가
  // TODO: 정렬 기능 추가

  const { data = [], isFetching } = useCustomersQuery()

  return (
    // TODO: 스타일 모두 분리
    <Card
      title="고객 목록"
      extra={<Input prefix={<SearchOutlined />} placeholder="고객 이름 검색" allowClear />}
      style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
      styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'auto' } }}
    >
      <Table
        size="small"
        pagination={false}
        rowKey="id"
        dataSource={data}
        loading={isFetching}
        columns={[
          {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: '이름',
            dataIndex: 'name',
            key: 'name',
          },
          // TODO: 숫자 출력 포맷팅 (구매 횟수랑 구매 금액)
          {
            title: '총 구매 횟수',
            dataIndex: 'count',
            key: 'count',
          },
          {
            title: '총 구매 금액',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
          },
        ]}
      />
    </Card>
  )
}

export { CustomerList }
