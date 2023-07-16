import { styled } from 'styled-components'

export const Main = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.base['base-card']};
  padding: 0 1.25rem 1.5rem 1.25rem;
  max-width: 16rem;
  min-width: 16rem;
  max-height: 19.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CoffeeImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;
`

export const CoffeeName = styled.h3`
  font-size: 1.25rem;
  line-height: 1.3;
`

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.base['base-label']};
  text-align: center;
`

export const CoffeeAttributes = styled.p`
  background: ${({ theme }) => theme.colors.products['yellow-light']};
  color: ${({ theme }) => theme.colors.products['yellow-dark']};
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  line-height: 1.3rem;
  font-size: 0.625rem;
  font-weight: 700;
`

export const AttributesContainer = styled.div`
  display: flex;
  column-gap: 0.25rem;
`

export const CoffeePrice = styled.h2`
  display: flex;
  line-height: 1.3rem;
  &&::before {
    content: 'R$ ';
    margin-top: 0.2rem;
    margin-right: 0.3rem;
    font-weight: 400;
    font-size: 0.875rem;
  }
`

export const Footer = styled.footer`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
