import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'
import { Layout } from './components/Layout'
import { ModulesProvider } from './contexts'
import { AppRoutes } from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { dark } from './styles/themes'
import { client } from './libs/apollo'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ModulesProvider>
          <ThemeProvider theme={dark}>
            <Layout>
              <GlobalStyles />
              <AppRoutes />
              <ToastContainer theme='dark' />
            </Layout>
          </ThemeProvider>
        </ModulesProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
