import { ReactNode, useCallback } from 'react'
import { useModules } from '../../../../hooks/useModules'
import { Link, StyledDropdown } from './styles'

type DropdownProps = {
  children: ReactNode
  openDropdown: boolean
  setOpenMenu: (data: boolean) => void
  options: Array<{
    name?: string
    link?: string
  }>
}

export function Dropdown({
  children,
  options,
  openDropdown,
  setOpenMenu,
}: DropdownProps): JSX.Element {
  const { setSelectedModule } = useModules()

  const handleSelectModule = useCallback((moduleName: string) => {
    setSelectedModule(moduleName)
    setOpenMenu(false)
  }, [])
  return (
    <StyledDropdown>
      {children}

      {openDropdown &&
        options.map((option) => (
          <Link
            key={option.name}
            href={option.link}
            onClick={() => handleSelectModule(option.name!)}
          >
            {option.name}
          </Link>
        ))}
    </StyledDropdown>
  )
}
