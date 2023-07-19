import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/cartContext'
import Icon from '../Icon'
import {
  Input,
  InputContainer,
  Main,
  QuantityButton,
  AddItemButton,
} from './styles'
import { ICartItem } from '../../types/ICartItem'

interface IQuantitySelector {
  id: number
}

export default function QuantitySelector({ id }: IQuantitySelector) {
  const [quantity, setQuantity] = useState(0)
  const { addToCart, cart } = useContext(CartContext)
  const newItem: ICartItem = { id, quantity }

  retrieveQuantityInformation()

  function retrieveQuantityInformation() {
    if (quantity === 0) {
      const currentItem = cart.find((item) => {
        return item.id === id
      })
      let currentQuantity
      if (typeof currentItem !== 'undefined') {
        currentQuantity = currentItem?.quantity
      }
      currentQuantity && setQuantity(currentQuantity)
    }
  }

  console.log(cart)
  function handleAddToCart() {
    addToCart(newItem)
    alert('Item added to cart!')
  }

  type ActionType = 'add' | 'remove'
  function handleQuantityChange(action: ActionType) {
    if (action === 'add') {
      setQuantity(quantity + 1)
    } else if (action === 'remove') {
      quantity > 0 && setQuantity(quantity - 1)
    }
  }

  return (
    <Main>
      <div>
        <InputContainer>
          <QuantityButton
            onClick={() => {
              handleQuantityChange('remove')
            }}
          >
            <Icon color="purple" name="minus" size="14" />
          </QuantityButton>
          <Input
            type="number"
            max={99}
            min={0}
            value={quantity}
            onChange={(e) => {
              setQuantity(parseInt(e.target.value))
            }}
          />

          <QuantityButton
            onClick={() => {
              handleQuantityChange('add')
            }}
          >
            <Icon color="purple" name="plus" size="14" />
          </QuantityButton>
        </InputContainer>
      </div>

      <AddItemButton onClick={handleAddToCart}>
        <Icon color="white" name="shopping-cart-fill" size="22" />
      </AddItemButton>
    </Main>
  )
}
