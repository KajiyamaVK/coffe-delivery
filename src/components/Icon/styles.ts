import { styled } from 'styled-components'

export const Main = styled.div`
  color: ${(props) =>
    props.theme.colors.products[
      props.color as keyof typeof props.theme.colors.products
    ]};
  padding-top: 0.2rem;
`
