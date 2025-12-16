import { useCustomersQuery } from '@/entities/customer/query/useCustomersQuery'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { formatNumber } from '@/shared/lib/formatNumber'
import { SearchOutlined } from '@ant-design/icons'
import { Card, Input, Table } from 'antd'
import { SortOrder } from 'antd/es/table/interface'
import { useState } from 'react'
import { Customer } from '@/entities/customer/model/customer.model'
import { EmptyFallback } from '@/shared/ui/fallbacks/EmptyFallback'

const SORT_ORDER_MAP = {
  ascend: 'asc',
  descend: 'desc',
} as const

type Props = {
  onSelectCustomer: (customer: Customer) => void
}

function CustomerList({ onSelectCustomer }: Props) {
  const [sortOrder, setSortOrder] = useState<SortOrder>(null)

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  const sortBy = sortOrder ? SORT_ORDER_MAP[sortOrder] : undefined
  const { data = [], isFetching } = useCustomersQuery({ sortBy, name: debouncedSearch || undefined })

  if (data.length === 0) {
    return (
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
        <EmptyFallback text="고객 목록 정보가 없습니다." />
      </Card>
    )
  }

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
