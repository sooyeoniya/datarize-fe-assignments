import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { CustomerList } from './CustomerList'

function CustomerListPanel() {
  return (
    // TODO: 임시 Errorboundary
    <ErrorBoundary>
      <CustomerList />
    </ErrorBoundary>
  )
}

export { CustomerListPanel }
