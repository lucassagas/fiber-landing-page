import { AnimatePresence } from 'framer-motion'
import { ReactNode, useCallback, useRef, useState } from 'react'
import useEventListener from '../../../../hooks/useEventListener'
import { DROP_DOWN_ANIMATION } from './animation'
import { AnimatedDropdown, Container, NavButton } from './styles'

type DropdownProps = {
  children: ReactNode
  options: Array<{
    name?: string
    link?: string
  }>
}

export function Dropdown({ children, options = [] }: DropdownProps): JSX.Element {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDropdownVisibility = (): void => {
    setIsDropdownVisible(true)
  }

  const handleCloseDropdown = useCallback(({ target }: Event): void => {
    if (dropdownRef?.current?.contains(target as Node)) return

    setIsDropdownVisible(false)
  }, [])

  useEventListener('click', handleCloseDropdown, {
    enabled: isDropdownVisible,
  })

  return (
    <Container ref={dropdownRef} onClick={handleDropdownVisibility}>
      {children}
      <AnimatePresence>
        {isDropdownVisible && (
          <AnimatedDropdown
            variants={DROP_DOWN_ANIMATION}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <ul>
              {options?.map((option) => (
                <NavButton href={option.link} key={option.name}>
                  {option.name}
                </NavButton>
              ))}
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  )
}
