import { Customers } from '../../components/Customers'
import { HasInThreeSoft } from '../../components/HasInThreeSoft'
import { Hero } from '../../components/Hero'
import { Modules } from '../../components/Modules'
import { Container } from './styles'

function Home() {
  return (
    <Container>
      <Hero />
      <Customers />
      <Modules />
      <HasInThreeSoft />
    </Container>
  )
}

export default Home
