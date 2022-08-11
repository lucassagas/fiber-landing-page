import { WhoAreWe } from '../../components/WhoAreWe'
import { WhoAreWeHero } from '../../components/WhoAreWeHero'
import { Container } from './styles'

export function About() {
  return (
    <Container>
      <WhoAreWeHero />
      <WhoAreWe />
    </Container>
  )
}
