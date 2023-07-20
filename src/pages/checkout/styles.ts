import { styled } from 'styled-components'

interface ISection {
  width?: string
  maxwidth?: string
}

export const Main = styled.div`
  margin: 2.5rem 10rem;
  padding: 2.5rem;
  display: flex;
  column-gap: 2rem;
  row-gap: 10.75rem;
  justify-content: center;
`

export const ContentContainer = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.base['base-card']};
  display: flex;
  column-gap: 2rem;
`

export const IconContainer = styled.div`
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.products['yellow-dark']};
  display: flex;
  width: 15px;
  align-items: center;
  justify-content: center;
  height: 25px;
  margin-top: 0.1rem;
`

export const Section = styled.div<ISection>`
  width: ${({ width }) => width};
  max-width: ${({ maxwidth }) => maxwidth};
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  overflow: hidden;
`

/// /////////////////Address Box/////////////////////

export const TitleContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  line-height: 0.1rem;
`

export const SubTitle = styled.p`
  margin-left: 1.4rem;
  margin-top: 0;
  font-size: 0.875rem;
`

export const CartItemsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.base['base-card']};
  width: 28rem;
`

/// /////////////////Payment Methods Box/////////////////////

/// /////////////////Cart Items and Total/////////////////////
