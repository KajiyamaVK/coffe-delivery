import { ContentContainer, Section } from '../../styles'
import ItemCard from '../ItemCard'
import { Items } from './styles'

export default function CartContainer() {
  return (
    <Section width="28rem">
      <h3>Choosed coffees</h3>
      <ContentContainer>
        <Items>
          <ItemCard />
        </Items>
      </ContentContainer>
    </Section>
  )
}
