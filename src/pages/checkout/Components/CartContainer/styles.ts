import { styled } from 'styled-components'
import { ContentContainer } from '../../styles'

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.base['base-card']};
  width: 100%;
  gap: 3rem;
`

export const ContentContainerArea = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
`
