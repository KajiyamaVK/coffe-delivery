import { IconContainer, TitleContainer, SubTitle } from './styles'
import Icon from '../../../../components/Icon'

export default function FormHeader() {
  return (
    <>
      <TitleContainer>
        <IconContainer>
          <Icon name="map-pin-line" color="yellow-dark" size={'22'} top={'0'} />
        </IconContainer>
        <p>Delivery Address</p>
      </TitleContainer>

      <SubTitle>
        Inform the address where you want to receive your purchase
      </SubTitle>
    </>
  )
}
