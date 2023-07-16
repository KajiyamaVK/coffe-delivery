/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useReducer } from 'react'
import { ICartItem } from '../types/ICartItem'
import {
  addToCartAction,
  getCartAction,
  removeItemAction,
} from '../reducers/cart/actions'
import CartReducer from '../reducers/cart/CartReducer'
import ICartReducerState from '../types/ICartReducerState'

interface ICartContext {
  cart: ICartItem[]
  addToCart: ({ id, quantity }: ICartItem) => ICartReducerState
  removeItem: (id: number) => ICartReducerState
  getCart: () => ICartItem[]
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => {id: 1, quantity: 1}},
  removeItem: () => {},
  getCart: () => [],
})

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartState, dispatch] = useReducer(CartReducer, {
    cart: [],
  } as ICartReducerState)

  const { cart } = cartState

  function addToCart({ id, quantity }: ICartItem) {
    dispatch(addToCartAction({ id, quantity }))
  }

  function removeItem(id: number) {
    dispatch(removeItemAction(id))
  }

  function getCart() {
    dispatch(getCartAction())
  }
  return (
    <CartContext.Provider value={{ addToCart, removeItem, getCart, cart }}>
      {children}
    </CartContext.Provider>
  )
}
