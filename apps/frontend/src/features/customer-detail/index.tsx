import { Customer } from '@/entities/customer/model/customer.model'
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
    <CustomerDetailContainer id={customer.id} name={customer.name}>
      <CustomerDetailHeader count={customer.count} totalAmount={customer.totalAmount} />
      <CustomerPurchaseDetail customerId={customer.id} />
    </CustomerDetailContainer>
  )
}

export { CustomerDetailPanel }
