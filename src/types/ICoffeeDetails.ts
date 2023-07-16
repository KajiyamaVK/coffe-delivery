import { typeCoffeAttributes } from './typesCoffeAttributes'

export interface ICoffeeDetails {
  id: number
  name: string
  description: string
  attributes: typeCoffeAttributes[]
  img: string
  price: number
}
