import { Customer } from '@/entities/customer/model/customer.model'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { useState } from 'react'
import { CustomerList } from './ui/CustomerList'
import { CustomerListContainer } from './ui/CustomerListContainer'

type Props = {
  onSelectCustomer: (customer: Customer) => void
}

function CustomerListPanel({ onSelectCustomer }: Props) {
  const [search, setSearch] = useState('')
  const searchQuery = useDebounce(search)

  return (
    // TODO: 임시 Errorboundary
    <ErrorBoundary>
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
