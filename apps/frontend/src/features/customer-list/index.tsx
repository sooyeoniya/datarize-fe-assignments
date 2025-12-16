import { Customer } from '@/entities/customer/model/customer.model'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useState } from 'react'
import { CustomerList } from './ui/CustomerList'
import { CustomerListContainer } from './ui/CustomerListContainer'
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary'

type Props = {
  onSelectCustomer: (customer: Customer) => void
}

function CustomerListPanel({ onSelectCustomer }: Props) {
  const [search, setSearch] = useState('')
  const searchQuery = useDebounce(search)

  return (
    <ErrorBoundary title="고객 목록" queryKey={['customers']}>
      <CustomerListContainer
        extra={
          <Input
            prefix={<SearchOutlined />}
            placeholder="고객 이름 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            allowClear
          />
        }
      >
        <CustomerList onSelectCustomer={onSelectCustomer} searchQuery={searchQuery} />
      </CustomerListContainer>
    </ErrorBoundary>
  )
}

export { CustomerListPanel }
