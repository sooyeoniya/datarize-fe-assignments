import { QueryParams } from './types'

export function buildQuery(params?: QueryParams) {
  if (!params) return ''
  const query = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (!value) return

    query.append(key, String(value))
  })

  return query.toString()
}
