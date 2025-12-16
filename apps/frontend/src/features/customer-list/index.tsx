import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { CustomerList } from './CustomerList'
import { Customer } from '@/entities/customer/model/customer.model'

type Props = {
  onSelectCustomer: (customer: Customer) => void
}

function CustomerListPanel({ onSelectCustomer }: Props) {
  return (
    // TODO: 임시 Errorboundary
    <ErrorBoundary>
      <CustomerList onSelectCustomer={onSelectCustomer} />
    </ErrorBoundary>
  )
}

export { CustomerListPanel }
