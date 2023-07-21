import {
  Background,
  ImageContainer,
  Main,
  Subtitle,
  TextContainer,
  Title,
  TopicItem,
  TopicsContainer,
} from './styles'
import coffeBanner from '/public/images/coffe_banner.png'
import Circle from '../../../../components/Circle'

export default function MainBanner() {
  return (
    <Main>
      <Background />
      <TextContainer>
        <Title>Find the perfect coffe for any moment of you day</Title>
        <Subtitle>
          With <b>Coffee Delivery</b> you receive your coffee wherever you are,
          at anytime.
        </Subtitle>
        <TopicsContainer>
          <div>
            <TopicItem>
              <div>
                <Circle
                  size="medium"
                  color="yellow-dark"
                  iconName="shopping-cart-fill"
                  iconColor="white"
                  iconSize="16px"
                />
              </div>
              <p>Simple and secured purchase</p>
            </TopicItem>
            <TopicItem>
              <div>
                <Circle
                  size="medium"
                  color="yellow"
                  iconName="timer-fill"
                  iconColor="white"
                  iconSize="16px"
                />
              </div>
              <p>Fast and trackable delivery</p>
            </TopicItem>
          </div>
          <div>
            <TopicItem>
              <div>
                <Circle
                  size="medium"
                  color="yellow-dark"
                  iconName="package-fill"
                  iconColor="white"
                  iconSize="16px"
                />
              </div>
              <p>Packaging keeps the coffee intact</p>
            </TopicItem>
            <TopicItem>
              <div>
                <Circle
                  size="medium"
                  color="purple"
                  iconName="coffee-fill"
                  iconColor="white"
                  iconSize="16px"
                />
              </div>
              <p>Your coffee arrives fresh and hot</p>
            </TopicItem>
          </div>
        </TopicsContainer>
      </TextContainer>
      <ImageContainer src={coffeBanner} alt="coffee Banner" />
    </Main>
  )
}
