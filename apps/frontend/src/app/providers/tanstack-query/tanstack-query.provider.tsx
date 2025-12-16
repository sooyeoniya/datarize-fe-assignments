import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient'

function TanstackQueryProvider({ children }: React.PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export { TanstackQueryProvider }
