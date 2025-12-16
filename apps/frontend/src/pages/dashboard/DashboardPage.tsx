import { CustomerDetailPanel } from '@/features/customer-detail'
import { CustomerListPanel } from '@/features/customer-list'
import { PurchaseFrequencyPanel } from '@/features/purchase-frequency'
import * as S from './DsahboardPage.styled'
import { DashboardLayout } from './ui/DashboardLayout/DashboardLayout'

function DashboardPage() {
  return (
    <DashboardLayout>
      <S.RootRow gutter={24} style={{ margin: 0 }}>
        <S.LeftCol span={8}>
          <CustomerListPanel />
        </S.LeftCol>

        <S.RightCol span={16}>
          <S.RightInnerRow gutter={[0, 24]}>
            <S.PanelCol span={24}>
              <PurchaseFrequencyPanel />
            </S.PanelCol>

            <S.PanelCol span={24}>
              <CustomerDetailPanel />
            </S.PanelCol>
          </S.RightInnerRow>
        </S.RightCol>
      </S.RootRow>
    </DashboardLayout>
  )
}

export { DashboardPage }
