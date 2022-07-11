import { ThemeProvider } from 'styled-components'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import { dark } from './styles/themes'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <GlobalStyles />
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default App
