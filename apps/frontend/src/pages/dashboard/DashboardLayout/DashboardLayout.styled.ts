import styled from '@emotion/styled'
import { Layout } from 'antd'

const { Header, Content } = Layout

export const RootLayout = styled(Layout)`
  height: 100vh;
  background: #f5f7fb;
`

export const DashboardHeader = styled(Header)`
  background: #fff;
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 20px;
  font-weight: 600;
  padding: 0 24px;
`

export const Logo = styled.img`
  height: 70px;
  width: auto;
  cursor: pointer;
`

export const DashboardContent = styled(Content)`
  padding: 24px;
`
