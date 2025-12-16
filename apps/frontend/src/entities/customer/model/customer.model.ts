/**
 * Customer 도메인 모델
 */

export type Customer = {
  id: number
  name: string
  count: number
  totalAmount: number
}

type ISODateString = `${number}-${number}-${number}`

export type CustomerPurchase = {
  date: ISODateString
  product: string
  quantity: number
  price: number
  imgSrc: string
}
