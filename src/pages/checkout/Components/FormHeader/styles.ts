import { styled } from 'styled-components'

export const Main = styled.div`
  margin: 2.5rem 10rem;
  background-color: aqua;
`

export const Form = styled.form`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.base['base-card']};
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
