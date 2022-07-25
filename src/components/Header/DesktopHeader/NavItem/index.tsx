import { RiArrowDropDownLine } from 'react-icons/ri'
import { useTheme } from 'styled-components'
import { Link } from './styles'

type NavItemProps = {
  title: string
  value: {
    haveDropdown: boolean
    link: string
  }
}

export function NavItem({ title, value }: NavItemProps) {
  const { white100 } = useTheme().colors
  return (
    <Link href={value.link}>
      {title}
      {value.haveDropdown && <RiArrowDropDownLine color={white100} size={24} />}
    </Link>
  )
}
