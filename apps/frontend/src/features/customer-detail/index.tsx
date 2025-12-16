import { Customer } from '@/entities/customer/model/customer.model'
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary'
import { CustomerDetailContainer } from './ui/CustomerDetailContainer'
import { CustomerDetailHeader } from './ui/CustomerDetailHeader'
import { CustomerDetailPlaceholder } from './ui/CustomerDetailPlaceholder'
import { CustomerPurchaseDetail } from './ui/CustomerPurchaseDetail'

type Props = {
  customer: Customer | null
}

function CustomerDetailPanel({ customer }: Props) {
  const hasSelectedCustomer = !!customer

  if (!hasSelectedCustomer) {
    return <CustomerDetailPlaceholder />
  }

  return (
    <ErrorBoundary title="고객 상세 구매 내역" queryKey={['customerPurchases']}>
      <CustomerDetailContainer id={customer.id} name={customer.name}>
        <CustomerDetailHeader count={customer.count} totalAmount={customer.totalAmount} />
        <CustomerPurchaseDetail customerId={customer.id} />
      </CustomerDetailContainer>
    </ErrorBoundary>
  )
}

export { CustomerDetailPanel }
