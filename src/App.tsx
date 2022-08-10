import { ThemeProvider } from 'styled-components'
import { Router } from '../Router'
import { GlobalStyle } from './Styles/global'
import { defaultTheme } from './Styles/Themes/default'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './Contexts/CycleContext'

export function App() {
  return (
    <BrowserRouter>
      {/* // ThemeProvider para escolher um tema para a pagina 
    e alternar em black ou white  */}
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        {/* ONDE IMPORTAMOS OS TEMAS GLOBAIS  */}
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
