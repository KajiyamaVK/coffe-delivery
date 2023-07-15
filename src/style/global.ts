import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
      *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        
        background: ${(props) => props.theme.colors.base.background};
        color: ${(props) => props.theme.colors.base['base-text']};
        -webkit-font-smoothing:antialiased;
    }

    body , input , button , textarea{
        font-family: ${(props) => props.theme.fontFamily};
        font-weight: 400;
        font-size: 1rem;
        
    }

`

export default GlobalStyle
