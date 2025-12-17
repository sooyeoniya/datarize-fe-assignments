import { Customer } from '@/entities/customer/model/customer.model'
import { useCustomersQuery } from '@/entities/customer/query/useCustomersQuery'
import { formatNumber } from '@/shared/lib/formatNumber'
import { Centered } from '@/shared/ui/Centered'
import { EmptyFallback } from '@/shared/ui/fallbacks/EmptyFallback'
import { Spin, Table, TableProps } from 'antd'
import { ColumnsType, SortOrder } from 'antd/es/table/interface'
import { useState } from 'react'

const SORT_ORDER_MAP = {
  ascend: 'asc',
  descend: 'desc',
} as const

const CUSTOMER_TABLE_COLUMNS = (sortOrder: SortOrder): ColumnsType<Customer> => [
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
]

type Props = {
  onSelectCustomer: (customer: Customer) => void
  searchQuery: string
}

function CustomerList({ onSelectCustomer, searchQuery }: Props) {
  const [sortOrder, setSortOrder] = useState<SortOrder>(null)
  const sortBy = sortOrder ? SORT_ORDER_MAP[sortOrder] : undefined

  const { data = [], isLoading, isFetching } = useCustomersQuery({ sortBy, name: searchQuery || undefined })

  if (isLoading) {
    return (
      <Centered>
        <Spin />
      </Centered>
    )
  }

  if (data.length === 0) {
    return <EmptyFallback text="고객 목록 정보가 없습니다." />
  }

  const handleTableChange: TableProps<Customer>['onChange'] = (_, __, sorter) => {
    if (!Array.isArray(sorter)) {
      setSortOrder(sorter.order ?? null)
    }
  }

  return (
    <Table
      size="small"
      pagination={false}
      rowKey="id"
      dataSource={data}
      loading={isFetching}
      columns={CUSTOMER_TABLE_COLUMNS(sortOrder)}
      onChange={handleTableChange}
      onRow={(record) => ({
        onClick: () => onSelectCustomer(record),
        style: { cursor: 'pointer' },
      })}
    />
  )
}

export { CustomerList }
