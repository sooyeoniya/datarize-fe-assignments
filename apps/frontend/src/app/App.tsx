import { DashboardPage } from '@/pages/dashboard'
import { AppProviders } from './providers'

function App() {
  return (
    <AppProviders>
      <DashboardPage />
    </AppProviders>
  )
}

export default App
