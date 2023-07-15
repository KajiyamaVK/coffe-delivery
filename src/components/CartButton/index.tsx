import { NavLink } from 'react-router-dom'
import { Main } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'

export default function CartButton() {
  return (
    <NavLink to="/checkout">
      <Main>
        <ShoppingCart weight="fill" size={22} />
      </Main>
    </NavLink>
  )
}
