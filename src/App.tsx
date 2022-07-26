import { ThemeProvider } from 'styled-components'
import { Button } from './Components/Button'
import { GlobalStyle } from './Styles/global'
import { defaultTheme } from './Styles/Themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
