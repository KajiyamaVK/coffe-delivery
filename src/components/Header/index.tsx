import { NavLink } from 'react-router-dom'
import CartButton from '../CartButton'
import CurrentLocationTag from '../CurrentLocationTag'
import { Main, Logo, TagsContainer } from './styles'
// eslint-disable-next-line import/no-absolute-path
import logo from '/images/Logo.svg'

export default function Header() {
  return (
    <Main>
      <NavLink to="/">
        <Logo
          src={logo}
          alt="Purple coffe cup with the website name Coffe Delivery just beside it."
        />
      </NavLink>
      <TagsContainer>
        <CurrentLocationTag cityName="Porto Alegre" />
        <CartButton />
      </TagsContainer>
    </Main>
  )
}
