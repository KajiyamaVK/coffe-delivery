import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../../../vite.svg'
import './App.css'

import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}></ThemeProvider>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
