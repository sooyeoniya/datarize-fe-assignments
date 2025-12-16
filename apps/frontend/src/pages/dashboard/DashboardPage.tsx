import { CustomerListPanel } from '@/features/customer-list'
import * as S from './DsahboardPage.styled'
import { DashboardLayout } from './ui/DashboardLayout/DashboardLayout'

function DashboardPage() {
  return (
    <DashboardLayout>
      <S.RootRow gutter={24}>
        <S.LeftCol span={8}>
          <CustomerListPanel />
        </S.LeftCol>

        <S.RightCol span={16}>
          <S.RightInnerRow gutter={[0, 24]}>
            <S.PanelCol span={24}>{/* 가격대별 구매 빈도 차트 패널 */}</S.PanelCol>
            <S.PanelCol span={24}>{/* 고객 상세 구매 내역 패널 */}</S.PanelCol>
          </S.RightInnerRow>
        </S.RightCol>
      </S.RootRow>
    </DashboardLayout>
  )
}

export { DashboardPage }
