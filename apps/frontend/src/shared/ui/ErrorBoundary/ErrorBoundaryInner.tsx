import { QueryClient } from '@tanstack/react-query'
import { Component } from 'react'
import { CardErrorFallback } from '../fallbacks/CardErrorFallback'

type State = {
  error: Error | null
}

type SingleQueryKey = readonly unknown[]
type MultipleQueryKeys = readonly SingleQueryKey[]
export type QueryKeyInput = SingleQueryKey | MultipleQueryKeys

type Props = {
  title: string
  children: React.ReactNode
  queryClient: QueryClient
  queryKey?: QueryKeyInput
}

class ErrorBoundaryInner extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  private resetAndRefetchQueries() {
    const { queryClient, queryKey } = this.props

    if (!queryKey) {
      queryClient.resetQueries()
      queryClient.refetchQueries()
      return
    }

    if (this.isMultipleQueryKeys(queryKey)) {
      queryKey.forEach((key) => {
        queryClient.resetQueries({ queryKey: key })
        queryClient.refetchQueries({ queryKey: key })
      })
      return
    }

    queryClient.resetQueries({ queryKey })
    queryClient.refetchQueries({ queryKey })
  }

  private isMultipleQueryKeys(key: QueryKeyInput): key is MultipleQueryKeys {
    return Array.isArray(key[0])
  }

  handleRetry = () => {
    this.setState({ error: null })
    this.resetAndRefetchQueries()
  }

  render() {
    if (this.state.error) {
      return <CardErrorFallback title={this.props.title} onRetry={this.handleRetry} />
    }

    return this.props.children
  }
}

export { ErrorBoundaryInner }
