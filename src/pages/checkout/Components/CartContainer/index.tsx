import { useContext } from 'react'
import { Section } from '../../styles'
import ItemCard from '../ItemCard'
import { Items, ContentContainerArea } from './styles'
import TotalizationContainer from '../TotalizationContainer'
import { CartContext } from '../../../../contexts/cartContext'
import Button from '../../../../components/Button'
import { useNavigate } from 'react-router-dom'

export default function CartContainer() {
  const { cart, resetApp } = useContext(CartContext)
  const navigate = useNavigate()
  const isButtonDisabled = cart.length === 0

  async function handleClick() {
    await resetApp()
    navigate('/')
  }

  return (
    <Section width="28rem">
      <h3>Choosed coffees</h3>
      <ContentContainerArea>
        <Items>
          <ItemCard />
        </Items>
        {cart.length > 0 && <TotalizationContainer />}
      </ContentContainerArea>
      <Button
        role="checkout"
        onClick={handleClick}
        disabled={isButtonDisabled}
      />
    </Section>
  )
}
