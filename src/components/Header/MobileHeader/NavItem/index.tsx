import { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useTheme } from 'styled-components'
import { Dropdown } from '../Dropdown'
import { Link } from './styles'

type NavItemProps = {
  title: string
  setOpenMenu: (data: boolean) => void
  value: {
    haveDropdown: boolean
    link: string
    dropdown?: Array<{
      name: string
      link: string
    }>
  }
}

export function NavItem({ title, value, setOpenMenu }: NavItemProps): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState(false)
  const { white100 } = useTheme().colors

  const handleToggleDropdown = (): void => {
    setOpenDropdown((prevState) => !prevState)
  }
  return value.haveDropdown ? (
    <Dropdown openDropdown={openDropdown} options={value.dropdown!} setOpenMenu={setOpenMenu}>
      <Link onClick={handleToggleDropdown}>
        {title} <RiArrowDropDownLine color={white100} size={24} />
      </Link>
    </Dropdown>
  ) : (
    <Link href={value.link}>{title}</Link>
  )
}
