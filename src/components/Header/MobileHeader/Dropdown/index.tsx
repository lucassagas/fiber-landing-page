import { ReactNode } from 'react'
import { Link, StyledDropdown } from './styles'

type DropdownProps = {
  children: ReactNode
  openDropdown: boolean
  options: Array<{
    name?: string
    link?: string
  }>
}

export function Dropdown({ children, options, openDropdown }: DropdownProps) {
  return (
    <StyledDropdown>
      {children}

      {openDropdown &&
        options.map((option) => (
          <Link key={option.name} href={option.link}>
            {option.name}
          </Link>
        ))}
    </StyledDropdown>
  )
}
