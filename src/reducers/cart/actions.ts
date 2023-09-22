import { ICartItem } from '../../types/ICartItem'
import { ActionsTypes } from '../../types/typesActions'

export function addToCartAction(item: ICartItem) {
  return { type: ActionsTypes.ADD_TO_CART, payload: { item } }
}

export function removeItemAction(id: number) {
  return { type: ActionsTypes.REMOVE_ITEM, payload: { id } }
}

export function resetAppAction() {
  return { type: ActionsTypes.RESET_APP, payload: {} }
}
