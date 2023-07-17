import { styled } from 'styled-components'

interface IInput {
  width?: string
  maxWidth?: string
  minWidth?: string
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  column-gap: 0.875rem;
  align-items: flex-start;
  width: 100%;
`

export const Input = styled.input<IInput>`
  background: ${({ theme }) => theme.colors.base['base-input']};
  font-size: 0.875rem;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  &::placeholder {
    color: ${({ theme }) => theme.colors.base['base-label']};
  }
  &:focus {
    outline: none;
  }
`

export const Division = styled.div`
  display: flex;
  width: 100%;
`
