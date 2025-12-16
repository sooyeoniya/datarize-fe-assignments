import { CustomerDetailPanel } from '@/features/customer-detail'
import { CustomerListPanel } from '@/features/customer-list'
import { CustomerItem } from '@/features/customer-list/customers.types'
import { PurchaseFrequencyPanel } from '@/features/purchase-frequency'
import { useState } from 'react'
import * as S from './DashboardPage.styled'
import { DashboardLayout } from './ui/DashboardLayout/DashboardLayout'

function DashboardPage() {
  // TODO: Path Params로 넣으면 좋지 않을까? (새로고침 했을 때 데이터가 날라가는데, 고정시켜두면 좋지 않나 싶음)
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerItem | null>(null)

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
