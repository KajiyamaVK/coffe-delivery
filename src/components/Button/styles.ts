import { styled } from 'styled-components'

const Button = styled.button`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Main = styled.div`
  background-color: ${(props) => props.theme.colors.products['yellow-light']};
  color: ${(props) => props.theme.colors.products['yellow-dark']};
  border-radius: 8px;
  padding: 0.5rem;
  margin-left: 12px;
`

export const PaymentButton = styled(Button)`
  padding: 1rem;
  gap: 0.75rem;
  color: ${(props) => props.theme.colors.base['base-text']};
  width: 100%;
  &&.active {
    background-color: ${(props) => props.theme.colors.products['purple-light']};
    border: 1px solid ${(props) => props.theme.colors.products.purple};
  }
`

export const CheckoutButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.products.yellow};
  color: ${({ theme }) => theme.colors.base.white};
  padding: 1.5rem 0;
  font-weight: 700;
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.base['base-button']};
  }
`
