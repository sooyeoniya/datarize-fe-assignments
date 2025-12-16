type ISODateString = `${number}-${number}-${number}`

type CustomerPurchaseItem = {
  date: ISODateString
  product: string
  quantity: number
  price: number
  imgSrc: string
}

export type CustomerPurchaseDetailResponse = CustomerPurchaseItem[]
