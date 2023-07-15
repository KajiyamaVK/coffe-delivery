import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
      *{
        box-sizing: border-box;
    }

    body{
        margin:0 ;
        padding:0;
        background: ${(props) => props.theme.colors.base.background};
        color: ${(props) => props.theme.colors.base['base-text']};
        -webkit-font-smoothing:antialiased;
    }

    body , input , button , textarea, span{
        font-family: ${(props) => props.theme['text-font']};
        font-weight: 400;
        font-size: 1rem;
        
    }

    button{
        cursor: pointer;
        border: none;
    }

`

export default GlobalStyle
