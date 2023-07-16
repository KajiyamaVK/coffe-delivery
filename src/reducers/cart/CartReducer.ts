import ICartReducerState from '../../types/ICartReducerState'
import { ActionsTypes } from '../../types/typesActions'
import { IAction } from './interfaces'

export default function CartReducer(state: ICartReducerState, action: IAction) {
  switch (action.type) {
    case ActionsTypes.ADD_TO_CART: {
      const newItem = action.payload.item
      return action.payload.item && { cart: [...state.cart, newItem] }
    }

    case ActionsTypes.REMOVE_ITEM:
      return (
        action.payload.id && {
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        }
      )
    case ActionsTypes.GET_CART:
      return { ...state }
    default:
      return { ...state }
  }
}
