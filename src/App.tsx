import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'
import GlobalStyle from './style/global'
import { CartContextProvider } from './contexts/cartContext'

function App() {
  return (
    <div>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </CartContextProvider>
    </div>
  )
}

export default App
