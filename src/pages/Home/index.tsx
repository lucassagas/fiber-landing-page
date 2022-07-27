import { Customers } from '../../components/Customers'
import { Hero } from '../../components/Hero'
import { Modules } from '../../components/Modules'
import { Container } from './styles'

function Home() {
  return (
    <Container>
      <Hero />
      <Customers />
      <Modules />
    </Container>
  )
}

export default Home
