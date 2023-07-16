import { NavLink } from 'react-router-dom'
import CartButton from '../CartButton'
import CurrentLocationTag from '../CurrentLocationTag'
import { Main, Logo, TagsContainer } from './styles'
import logo from '/src/assets/images/Logo.svg'

export default function Header() {
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
      </TagsContainer>
    </Main>
  )
}
