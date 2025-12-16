type QueryPrimitive = string | number | boolean | undefined

export type QueryParams = Record<string, QueryPrimitive>

export type HttpOptions = {
  params?: QueryParams
  signal?: AbortSignal
}
