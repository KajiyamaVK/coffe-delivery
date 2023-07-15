import { styled } from 'styled-components'

export const Main = styled.div`
  background-color: ${(props) => props.theme.colors.products['yellow-light']};
  color: ${(props) => props.theme.colors.products['yellow-dark']};
  border-radius: 8px;
  padding: 0.5rem;
  margin-left: 12px;
`
