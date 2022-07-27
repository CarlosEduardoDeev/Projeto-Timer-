import { ThemeProvider } from 'styled-components'
import { Router } from './Components/Router'
import { GlobalStyle } from './Styles/global'
import { defaultTheme } from './Styles/Themes/default'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router/>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
