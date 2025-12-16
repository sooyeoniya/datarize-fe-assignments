import DatarizeLogo from '@/shared/assets/datarize-logo.png'
import * as S from './DashboardLayout.styled'

function DashboardLayout({ children }: React.PropsWithChildren) {
  const handleLogoClick = () => window.location.reload()

  return (
    <S.RootLayout>
      <S.DashboardHeader>
        <S.Logo src={DatarizeLogo} alt="Datarize Logo" onClick={handleLogoClick} />
        <span>쇼핑몰 구매 데이터 대시보드</span>
      </S.DashboardHeader>

      <S.DashboardContent>{children}</S.DashboardContent>
    </S.RootLayout>
  )
}

export { DashboardLayout }
