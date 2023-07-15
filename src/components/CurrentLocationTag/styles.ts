import { styled } from 'styled-components'

export const Main = styled.div`
  background: ${(props) => props.theme.colors.products['purple-light']};
  padding: 0.5rem;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

export const LocationIcon = styled.div`
  color: ${(props) => props.theme.colors.products['purple-dark']};
  margin-right: 0.25rem;
  padding-top: 0.1rem;
`

export const CityName = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.products['purple-text']};
  line-height: 1.3;
`
