import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Layout } from './components/Layout'
import { AppRoutes } from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { dark } from './styles/themes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <Layout>
          <GlobalStyles />
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
