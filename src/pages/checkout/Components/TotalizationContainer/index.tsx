import { InfoContainer, Main, InfoText, TotalText } from './styles'

export default function TotalizationContainer() {
  return (
    <Main>
      <InfoContainer>
        <InfoText>Items Total</InfoText>
        <InfoText>R$ 29,70</InfoText>
      </InfoContainer>
      <InfoContainer>
        <InfoText>Delivery Fee</InfoText>
        <InfoText>R$ 3.50</InfoText>
      </InfoContainer>
      <InfoContainer>
        <TotalText>Total</TotalText>
        <TotalText>R$ 3.50</TotalText>
      </InfoContainer>
    </Main>
  )
}
