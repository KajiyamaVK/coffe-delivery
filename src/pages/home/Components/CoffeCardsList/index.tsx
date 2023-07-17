import CoffeCard from '../CoffeCard'
import { mockdata } from '../../../../../src/assets/mockData'
import { CardsContainer, Main } from './styles'

export default function CoffeCardsList() {
  return (
    <Main>
      <h1>Our coffees</h1>
      <CardsContainer>
        {mockdata.map((coffee) => (
          <CoffeCard key={coffee.id} {...coffee} />
        ))}
      </CardsContainer>
    </Main>
  )
}
