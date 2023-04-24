import logo from '../../../assets/logo.svg'
import { PATHS } from '../../../constants'
import { NavItem } from './NavItem'
import { Container, StyledLink } from './styles'

export function DesktopHeader(): JSX.Element {
  return (
    <Container>
      <img src={logo} alt='logo' />
      <nav>
        <ul>
          {Object.entries(PATHS).map(([key, value]) => (
            <li key={key}>
              <NavItem title={key} value={value} />
            </li>
          ))}
        </ul>
        <StyledLink href='/#contactus'>Solicitar demonstração</StyledLink>
      </nav>
    </Container>
  )
}
