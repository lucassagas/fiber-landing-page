import { RiArrowDropDownLine } from 'react-icons/ri'
import { useTheme } from 'styled-components'
import { Dropdown } from '../Dropdown'
import { Link } from './styles'

type NavItemProps = {
  title: string
  value: {
    haveDropdown: boolean
    link: string
    dropdown?: Array<{
      name: string
      link: string
    }>
  }
}

export function NavItem({ title, value }: NavItemProps): JSX.Element {
  const { white100 } = useTheme().colors
  return value.haveDropdown ? (
    <Dropdown options={value.dropdown!}>
      <Link>
        {title} <RiArrowDropDownLine color={white100} size={24} />
      </Link>
    </Dropdown>
  ) : (
    <Link href={value.link}>{title}</Link>
  )
}
