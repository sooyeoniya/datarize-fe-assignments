import { ConfigProvider } from 'antd'
import { antdTheme } from './antd.theme'

function AntdProvider({ children }: React.PropsWithChildren) {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
}

export { AntdProvider }
