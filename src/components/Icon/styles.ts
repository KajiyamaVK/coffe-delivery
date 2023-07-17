import { styled } from 'styled-components'

interface MainProps {
  color?: string
  topSpacing?: string
}

export const Main = styled.div<MainProps>`
  color: ${(props) =>
    props.theme.colors.products[
      props.color as keyof typeof props.theme.colors.products
    ]};
  padding-top: 0.2rem;
  position: relative;
  top: ${(props) => props.topSpacing || '0'};
`
