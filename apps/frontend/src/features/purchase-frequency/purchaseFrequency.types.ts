export type PurchaseFrequencyParams = {
  from?: string
  to?: string
}

type PurchaseFrequencyItem = {
  range: string
  count: number
}

export type PurchaseFrequencyResponse = PurchaseFrequencyItem[]
