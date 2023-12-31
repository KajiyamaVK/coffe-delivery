import { ICoffeeDetails } from '../../../../types/ICoffeeDetails.ts'
import QuantitySelector from '../../../../components/QuantitySelector/index.tsx'
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
import { getimgUrl } from '../../../../functions/index.ts'

export default function CoffeeCard({
  id,
  img,
  name,
  description,
  price,
  attributes,
}: ICoffeeDetails) {
  return (
    <Main>
      <CoffeeImg src={getimgUrl(img)} />
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
        <QuantitySelector id={id} />
      </Footer>
    </Main>
  )
}
