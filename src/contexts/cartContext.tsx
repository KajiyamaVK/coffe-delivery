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
  getCart: () => ICartReducerState
}

const cartInitialValue = [] as ICartItem[]

export const CartContext = createContext({
  cart: [],
  addToCart: ({ id, quantity }) => {
    const newItem = { id, quantity }
    const updatedCart = [...cartInitialValue, newItem]
    return { cart: updatedCart }
  },
  removeItem: (id) => {
    const updatedCart = cartInitialValue.filter((item) => item.id !== id)
    return { cart: updatedCart }
  },
  getCart: () => {
    return { cartInitialValue }
  },
} as ICartContext)

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

  function getCart() {
    dispatch(getCartAction())
    return { cart }
  }
  return (
    <CartContext.Provider value={{ addToCart, removeItem, getCart, cart }}>
      {children}
    </CartContext.Provider>
  )
}
