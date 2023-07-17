import FormHeader from './Components/FormHeader'
import { CartItemsContainer, ContentContainer, Main, Section } from './styles'
import Fields from './Components/Fields'

export default function Checkout() {
  return (
    <Main>
      <Section width="100%" maxWidth="40rem">
        <h3>Complete your purchase</h3>
        <ContentContainer>
          <div style={{ width: '100%' }}>
            <FormHeader />
            <Fields />
          </div>
        </ContentContainer>
      </Section>
      <Section width="28rem">
        <h3>Choosed coffees</h3>
        <ContentContainer>
          <CartItemsContainer>
            <h3>Cart Items</h3>
          </CartItemsContainer>
        </ContentContainer>
      </Section>
    </Main>
  )
}
