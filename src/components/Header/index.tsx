import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CartButton from '../CartButton'
import CurrentLocationTag from '../CurrentLocationTag'
import { Main, Logo, TagsContainer, Counter } from './styles'
import logo from '/src/assets/images/Logo.svg'
import Circle from '../Circle'
import { CartContext } from '../../contexts/cartContext'

export default function Header() {
  const { cart } = useContext(CartContext)
  const itemsInCartQuantity: string = cart
    .reduce((acc, item) => acc + item.quantity, 0)
    .toString()
  return (
    <Main>
      <NavLink to="/">
        <Logo
          src={logo}
          alt="Purple coffee cup with the website name coffee Delivery just beside it."
        />
      </NavLink>
      <TagsContainer>
        <CurrentLocationTag cityName="Porto Alegre" />
        <CartButton />
        {itemsInCartQuantity !== '0' && (
          <Counter>
            <Circle
              color="yellow-dark"
              text={itemsInCartQuantity}
              size="small"
            />
          </Counter>
        )}
      </TagsContainer>
    </Main>
  )
}
