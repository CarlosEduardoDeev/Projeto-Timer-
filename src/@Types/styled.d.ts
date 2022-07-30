import 'styled-components'
import { defaultTheme } from '../Styles/Themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// Esse arquivo contem apenas textos TypeScript,
// onde podemos user a função tipo de temas
