import logo from '../../../assets/logo.svg'
import { PATHS } from '../../../constants'
import { Button } from '../../Button'
import { NavItem } from './NavItem'
import { Container } from './styles'

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
        <Button variation='neutral'>Solicitar demonstração</Button>
      </nav>
    </Container>
  )
}
