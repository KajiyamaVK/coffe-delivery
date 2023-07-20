import Button from '../../../../components/Button'
import Icon from '../../../../components/Icon'
import { ContentContainer, Section } from '../../styles'
import Fields from '../Fields'
import FormHeader from '../FormHeader'
import {
  ButtonsContainer,
  PaymentMethodsHeader,
  PaymentMethodsSubTitle,
  PaymentMethodsTitle,
  TitleContainer,
} from './styles'

function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  const activatedButton = document.querySelector('button.active')
  activatedButton?.classList.remove('active')
  e.currentTarget.classList.add('active')
}

export default function AddressAndPaymentMethod() {
  return (
    <Section width="100%" maxwidth="40rem">
      <h3>Complete your purchase</h3>
      <ContentContainer>
        <div style={{ width: '100%' }}>
          <FormHeader />
          <Fields />
        </div>
      </ContentContainer>
      <ContentContainer>
        <PaymentMethodsHeader>
          <TitleContainer>
            <Icon name="dollar" size="22" color="purple" />
            <PaymentMethodsTitle>Payment</PaymentMethodsTitle>
          </TitleContainer>

          <PaymentMethodsSubTitle>
            The payment is made in the moment of delivery. Choose the payment
            method.
          </PaymentMethodsSubTitle>
          <ButtonsContainer>
            <Button
              role="PaymentMethod-CreditCard"
              onClick={(e) => {
                handleClick(e)
              }}
            />
            <Button
              role="PaymentMethod-DebitCard"
              onClick={(e) => {
                handleClick(e)
              }}
            />
            <Button
              role="PaymentMethod-Money"
              onClick={(e) => {
                handleClick(e)
              }}
            />
          </ButtonsContainer>
        </PaymentMethodsHeader>
      </ContentContainer>
    </Section>
  )
}
