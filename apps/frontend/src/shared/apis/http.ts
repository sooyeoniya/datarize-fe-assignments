import { buildQuery } from './buildQuery'
import { HttpError } from './http.error'
import { HttpOptions } from './types'

export async function httpGet<T>(url: string, { params, signal }: HttpOptions = {}): Promise<T> {
  const query = buildQuery(params)
  const fullUrl = query ? `${url}?${query}` : url

  const res = await fetch(fullUrl, { signal })

  if (!res.ok) {
    const message = await res.text()
    throw new HttpError(res.status, message || res.statusText)
  }

  return res.json()
}
