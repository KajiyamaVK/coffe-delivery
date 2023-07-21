import { useContext } from 'react'
import {
  CoffeePhoto,
  Main,
  PurchasedCoffeeName,
  PurchasedCoffeeValue,
  TextContainer,
} from './styles'
import { CartContext } from '../../../../contexts/cartContext'
import { getimgUrl } from '../../../../functions'
import { mockdata } from '../../../../assets/mockData'
import QuantitySelector from '../../../../components/QuantitySelector'

export default function ItemCard() {
  const { cart } = useContext(CartContext)

  if (cart.length === 0) return <p>No item in the cart yet...</p>

  return cart.map((item) => {
    const coffee = mockdata.find((data) => {
      return data.id === item.id
    })

    if (typeof coffee !== 'undefined') {
      const itemTotalValue = coffee.price * item.quantity

      return (
        <Main key={coffee?.id}>
          <div>
            <CoffeePhoto src={getimgUrl(coffee?.img)} alt="" />
          </div>
          <TextContainer>
            <div>
              <PurchasedCoffeeName>{coffee.name}</PurchasedCoffeeName>
              <QuantitySelector id={item.id} />
            </div>
            <PurchasedCoffeeValue>
              R$ {itemTotalValue.toFixed(2)}
            </PurchasedCoffeeValue>
          </TextContainer>
          <p></p>
        </Main>
      )
    }
    return <></>
  })
}
