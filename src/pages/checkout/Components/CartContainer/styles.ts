import { styled } from 'styled-components'

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.base['base-card']};
  width: 28rem;
  gap: 3rem;
`
