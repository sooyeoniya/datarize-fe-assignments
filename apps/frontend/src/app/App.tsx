import { DashboardPage } from '@/pages/dashboard'
import { AntdProvider } from './providers/antd'

function App() {
  return (
    <AntdProvider>
      <DashboardPage />
    </AntdProvider>
  )
}

export default App
