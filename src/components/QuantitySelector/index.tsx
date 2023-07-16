import {
  Input,
  InputContainer,
  Main,
  QuantityButton,
  AddItemButton,
} from './styles'
import Icon from '../Icon'

export default function QuantitySelector() {
  return (
    <Main>
      <div>
        <InputContainer>
          <QuantityButton>
            <Icon color="purple" name="minus" size="14" />
          </QuantityButton>
          <Input type="number" max={99} />
          <QuantityButton>
            <Icon color="purple" name="plus" size="14" />
          </QuantityButton>
        </InputContainer>
      </div>

      <AddItemButton>
        <Icon color="white" name="shopping-cart-fill" size="22" />
      </AddItemButton>
    </Main>
  )
}
