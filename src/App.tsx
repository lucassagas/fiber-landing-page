import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Layout } from './components/Layout'
import { ModulesProvider } from './contexts'
import { AppRoutes } from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { dark } from './styles/themes'

function App() {
  return (
    <BrowserRouter>
      <ModulesProvider>
        <ThemeProvider theme={dark}>
          <Layout>
            <GlobalStyles />
            <AppRoutes />
          </Layout>
        </ThemeProvider>
      </ModulesProvider>
    </BrowserRouter>
  )
}

export default App
