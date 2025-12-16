import { buildQuery } from './buildQuery'
import { HttpError } from './http.error'
import { HttpOptions } from './types'

export async function httpGet<T>(url: string, options?: HttpOptions): Promise<T> {
  const query = buildQuery(options?.params)
  const fullUrl = query ? `${url}?${query}` : url

  try {
    const res = await fetch(fullUrl, { signal: options?.signal })

    if (!res.ok) {
      const message = await res.text()
      throw new HttpError(res.status, message || res.statusText)
    }

    return res.json()
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error
    }

    throw error
  }
}
