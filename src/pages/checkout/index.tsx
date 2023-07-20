import { Main } from './styles'
import AddressAndPaymentMethod from './Components/AddressAndPaymentMethod'
import CartContainer from './Components/CartContainer'

export default function Checkout() {
  return (
    <Main>
      <AddressAndPaymentMethod />
      <CartContainer />
    </Main>
  )
}
