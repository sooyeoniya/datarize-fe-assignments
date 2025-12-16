import { useQueryClient } from '@tanstack/react-query'
import { ErrorBoundaryInner, QueryKeyInput } from './ErrorBoundaryInner'

type Props = {
  title: string
  children: React.ReactNode
  queryKey?: QueryKeyInput
}

function ErrorBoundary({ children, title, queryKey }: Props) {
  const queryClient = useQueryClient()

  return (
    <ErrorBoundaryInner title={title} queryKey={queryKey} queryClient={queryClient}>
      {children}
    </ErrorBoundaryInner>
  )
}

export { ErrorBoundary }
