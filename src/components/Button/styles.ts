import { styled } from 'styled-components'

export const Main = styled.div`
  background-color: ${(props) => props.theme.colors.products['yellow-light']};
  color: ${(props) => props.theme.colors.products['yellow-dark']};
  border-radius: 8px;
  padding: 0.5rem;
  margin-left: 12px;
`

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.base['base-text']};
  width: 100%;
  &&.active {
    background-color: ${(props) => props.theme.colors.products['purple-light']};
    border: 1px solid ${(props) => props.theme.colors.products.purple};
  }
`
