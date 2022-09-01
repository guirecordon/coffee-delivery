import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartItemsContextProvider } from './contexts/CartItemsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <CartItemsContextProvider>
          <Router />
        </CartItemsContextProvider>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
