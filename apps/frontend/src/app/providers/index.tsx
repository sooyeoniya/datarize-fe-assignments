import { AntdProvider } from './antd'
import { TanstackQueryProvider } from './tanstack-query'

function AppProviders({ children }: React.PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      <AntdProvider>{children}</AntdProvider>
    </TanstackQueryProvider>
  )
}

export { AppProviders }
