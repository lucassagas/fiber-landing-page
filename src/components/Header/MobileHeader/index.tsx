import { RiMenuLine } from '../../../assets/icons'
import logo from '../../../assets/logo.svg'
import { Container } from './styles'

export function MobileHeader() {
  return (
    <Container>
      <img src={logo} alt='logo' />
      <RiMenuLine size={30} />
    </Container>
  )
}
