import { ICartItem } from '../../types/ICartItem'
import { ActionsTypes } from '../../types/typesActions'

interface IPayload {
  item?: ICartItem
  id?: number
}

interface IAction {
  type: ActionsTypes
  payload: IPayload
}

export type { IPayload, IAction }
