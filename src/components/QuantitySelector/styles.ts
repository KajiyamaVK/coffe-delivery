import { styled } from 'styled-components'

export const Main = styled.div`
  display: flex;
  column-gap: 0.5rem;
  height: 2.375rem;
`

export const Input = styled.input`
  width: 1.9rem;
  //removes the button arrows from the input
  -moz-appearance: textfield;
  appearance: textfield;
  border: none;
  background: transparent;
  line-height: 1.3;
  text-align: center;
`

export const QuantityButton = styled.button`
  color: ${({ theme }) => theme.colors.products.purple};
  background: transparent;
  cursor: pointer;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 8px;
  height: 2.375rem;
  background: ${({ theme }) => theme.colors.base['base-button']};
  align-items: center;
  justify-content: center;
`

export const AddItemButton = styled.button`
  background: ${({ theme }) => theme.colors.products['purple-dark']};
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &&:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.base['base-button']};
  }
`
