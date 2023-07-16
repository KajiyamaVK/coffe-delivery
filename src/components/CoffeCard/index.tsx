import { ICoffeeDetails } from '../../types/ICoffeeDetails.ts'
import QuantitySelector from '../QuantitySelector/index.tsx'
import {
  AttributesContainer,
  CoffeeAttributes,
  CoffeeDescription,
  CoffeeImg,
  CoffeeName,
  CoffeePrice,
  Footer,
  Main,
} from './styles.ts'

export default function CoffeeCard({
  id,
  img,
  name,
  description,
  price,
  attributes,
}: ICoffeeDetails) {
  function imgUrl(img: string) {
    return `src/assets/images/coffees/${img}.png`
  }

  return (
    <Main>
      <CoffeeImg src={imgUrl(img)} />
      <AttributesContainer>
        {attributes.map((attribute, index) => (
          <CoffeeAttributes key={`${id.toFixed(2)}${index.toFixed(2)}`}>
            {attribute.toUpperCase()}
          </CoffeeAttributes>
        ))}
      </AttributesContainer>
      <CoffeeName>{name}</CoffeeName>
      <CoffeeDescription>{description}</CoffeeDescription>
      <Footer>
        <CoffeePrice>{price.toFixed(2)}</CoffeePrice>
        <QuantitySelector />
      </Footer>
    </Main>
  )
}
