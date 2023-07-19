import { styled } from 'styled-components'

export const Main = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.base['base-button']};
`

export const PurchasedCoffeeName = styled.span`
  line-height: 1.3;
`

export const PurchasedCoffeeValue = styled.span`
  font-weight: 700;
`

export const TextContainer = styled.div`
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const CoffeePhoto = styled.img`
  width: 4rem;
  height: 4rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
