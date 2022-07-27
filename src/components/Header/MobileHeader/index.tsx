import { useState } from 'react'
import { RiMenuLine } from '../../../assets/icons'
import logo from '../../../assets/logo.svg'
import { PATHS } from '../../../constants'
import { NavItem } from './NavItem'
import { Container, Menu } from './styles'

export function MobileHeader(): JSX.Element {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggleMenu = (): void => {
    setOpenMenu((prevState) => !prevState)
  }

  return (
    <Container>
      <header>
        <img src={logo} alt='logo' />
        <button type='button' onClick={handleToggleMenu}>
          <RiMenuLine size={30} />
        </button>
      </header>
      <Menu openMenu={openMenu}>
        <ul>
          {Object.entries(PATHS).map(([key, value]) => (
            <li key={key}>
              <NavItem title={key} value={value} />
            </li>
          ))}
        </ul>
      </Menu>
    </Container>
  )
}
