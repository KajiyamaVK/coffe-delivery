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
import coffeBanner from '/src/assets/images/coffe_banner.png'
import Circle from '../Circle'

export default function MainBanner() {
  return (
    <Main>
      <Background />
      <TextContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
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
                  iconSize="1rem"
                />
              </div>
              <p>Compra simples e segura</p>
            </TopicItem>
            <TopicItem>
              <div>
                <Circle
                  size="medium"
                  color="yellow"
                  iconName="timer-fill"
                  iconColor="white"
                  iconSize="1rem"
                />
              </div>
              <p>Compra simples e segura</p>
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
                  iconSize="1rem"
                />
              </div>
              <p>Compra simples e segura</p>
            </TopicItem>
            <TopicItem>
              <div>
                <Circle
                  size="medium"
                  color="purple"
                  iconName="coffee-fill"
                  iconColor="white"
                  iconSize="1rem"
                />
              </div>
              <p>Compra simples e segura</p>
            </TopicItem>
          </div>
        </TopicsContainer>
      </TextContainer>
      <ImageContainer src={coffeBanner} alt="coffee Banner" />
    </Main>
  )
}
