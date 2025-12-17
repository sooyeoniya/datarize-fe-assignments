import { Customer } from '@/entities/customer/model/customer.model'
import { CustomerDetailPanel } from '@/features/customer-detail'
import { CustomerListPanel } from '@/features/customer-list'
import { PurchaseFrequencyPanel } from '@/features/purchase-frequency'
import { useState } from 'react'
import { DashboardLayout } from '../DashboardLayout'
import * as S from './DashboardPage.styled'

function DashboardPage() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

  return (
    <DashboardLayout>
      <S.RootRow gutter={24} style={{ margin: 0 }}>
        <S.LeftCol span={8}>
          <CustomerListPanel onSelectCustomer={setSelectedCustomer} />
        </S.LeftCol>

        <S.RightCol span={16}>
          <S.RightInnerRow gutter={[0, 24]}>
            <S.PanelCol span={24}>
              <PurchaseFrequencyPanel />
            </S.PanelCol>

            <S.PanelCol span={24}>
              <CustomerDetailPanel customer={selectedCustomer} />
            </S.PanelCol>
          </S.RightInnerRow>
        </S.RightCol>
      </S.RootRow>
    </DashboardLayout>
  )
}

export { DashboardPage }
