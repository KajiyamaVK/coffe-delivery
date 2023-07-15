import { Main, Logo } from './styles'
// eslint-disable-next-line import/no-absolute-path
import logo from '/images/Logo.svg'

export default function Header() {
  return (
    <Main>
      <Logo
        src={logo}
        alt="Purple coffe cup with the website name Coffe Delivery just beside it."
      />
      <div></div>
    </Main>
  )
}
