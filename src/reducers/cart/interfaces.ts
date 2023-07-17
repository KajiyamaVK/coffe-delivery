import { ICartItem } from '../../types/ICartItem'
import { ActionsTypes } from '../../types/typesActions'

interface IAction {
  type: ActionsTypes
  payload: { id?: number; item?: ICartItem }
}

export type { IAction }
