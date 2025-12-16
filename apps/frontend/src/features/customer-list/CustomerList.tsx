import { useDebounce } from '@/shared/hooks/useDebounce'
import { formatNumber } from '@/shared/lib/formatNumber'
import { SearchOutlined } from '@ant-design/icons'
import { Card, Input, Table } from 'antd'
import { SortOrder } from 'antd/es/table/interface'
import { useState } from 'react'
import { CustomerItem } from './customers.types'
import { useCustomersQuery } from './useCustomersQuery'

type Props = {
  onSelectCustomer: (customer: CustomerItem) => void
}

function CustomerList({ onSelectCustomer }: Props) {
  const [sortOrder, setSortOrder] = useState<SortOrder>(null)

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  // TODO: 삼항연산자 -> 객체 방식으로 리팩터링
  const { data = [], isFetching } = useCustomersQuery({
    sortBy: sortOrder === 'ascend' ? 'asc' : sortOrder === 'descend' ? 'desc' : undefined,
    name: debouncedSearch || undefined,
  })

  return (
    // TODO: 스타일 모두 분리
    <Card
      title="고객 목록"
      extra={
        <Input
          prefix={<SearchOutlined />}
          placeholder="고객 이름 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
        />
      }
      style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
      styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'auto' } }}
    >
      <Table
        size="small"
        pagination={false}
        rowKey="id"
        dataSource={data}
        loading={isFetching}
        onChange={(_, __, sorter) => {
          if (!Array.isArray(sorter)) {
            setSortOrder(sorter.order ?? null)
          }
        }}
        onRow={(record) => ({
          onClick: () => {
            onSelectCustomer(record)
          },
          style: { cursor: 'pointer' },
        })}
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
          {
            title: '총 구매 횟수',
            dataIndex: 'count',
            key: 'count',
            render: (value: number) => formatNumber(value),
          },
          {
            title: '총 구매 금액',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            sorter: true,
            sortOrder,
            render: (value: number) => formatNumber(value),
          },
        ]}
      />
    </Card>
  )
}

export { CustomerList }
