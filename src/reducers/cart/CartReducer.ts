import ICartReducerState from '../../types/ICartReducerState'
import { ActionsTypes } from '../../types/typesActions'
import { IAction } from './interfaces'

export default function CartReducer(
  state: ICartReducerState,
  action: IAction,
): ICartReducerState {
  switch (action.type) {
    case ActionsTypes.ADD_TO_CART: {
      const newItem = action.payload.item
      if (newItem) {
        return { cart: [...state.cart, newItem] }
      }
      return { cart: [...state.cart] }
    }

    case ActionsTypes.REMOVE_ITEM:
      if (action.payload.id) {
        const cart = state.cart.filter((item) => item.id !== action.payload.id)
        return { cart }
      }
      return { cart: [...state.cart] }

    case ActionsTypes.GET_CART:
      return { ...state }
    default:
      return { ...state }
  }
}
