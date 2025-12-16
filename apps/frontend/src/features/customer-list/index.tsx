import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { CustomerList } from './CustomerList'
import { CustomerItem } from '../../entities/customer/api/customers.types'

type Props = {
  onSelectCustomer: (customer: CustomerItem) => void
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
