import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'
import GlobalStyle from './style/global'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
