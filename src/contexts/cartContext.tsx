/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useReducer } from 'react'
import { ICartItem } from '../types/ICartItem'
import { addToCartAction, removeItemAction } from '../reducers/cart/actions'
import CartReducer from '../reducers/cart/CartReducer'
import ICartReducerState from '../types/ICartReducerState'

interface ICartContext {
  cart: ICartItem[]
  addToCart: ({ id, quantity }: ICartItem) => ICartReducerState
  removeItem: (id: number) => ICartReducerState
}

export const CartContext = createContext({} as ICartContext)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const stateInitialValue = {
    cart: [],
  }
  const [cartState, dispatch] = useReducer(CartReducer, stateInitialValue)

  const { cart } = cartState

  function addToCart({ id, quantity }: ICartItem) {
    dispatch(addToCartAction({ id, quantity }))
    return { cart }
  }

  function removeItem(id: number) {
    dispatch(removeItemAction(id))
    return { cart }
  }

  return (
    <CartContext.Provider value={{ addToCart, removeItem, cart }}>
      {children}
    </CartContext.Provider>
  )
}
