import { Customers } from '../../components/Customers'
import { Hero } from '../../components/Hero'
import { Container } from './styles'

function Home() {
  return (
    <Container>
      <Hero />
      <Customers />
    </Container>
  )
}

export default Home
