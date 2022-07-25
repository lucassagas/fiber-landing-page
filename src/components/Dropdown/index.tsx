import { AnimatePresence } from 'framer-motion'
import { ReactNode, useCallback, useRef, useState } from 'react'
import useEventListener from '../../hooks/useEventListener'
import { DROP_DOWN_ANIMATION } from './animation'
import { AnimatedDropdown, Container, NavButton } from './styles'

type DropdownProps = {
  children: ReactNode
}

export function ChatListDropDown({ children }: DropdownProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDropdownVisibility = (): void => {
    setIsDropdownVisible(true)
  }

  const handleCloseDropdown = useCallback(
    ({ target }: Event): void => {
      if (dropdownRef?.current?.contains(target as Node)) {
        return
      }

      setIsDropdownVisible(false)
    },
    [setIsDropdownVisible],
  )

  useEventListener('click', handleCloseDropdown, {
    enabled: isDropdownVisible,
  })

  return (
    <Container onClick={handleDropdownVisibility}>
      {children}
      <AnimatePresence>
        {isDropdownVisible && (
          <AnimatedDropdown
            ref={dropdownRef}
            variants={DROP_DOWN_ANIMATION}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <ul>
              <NavButton>Criar Grupo</NavButton>
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  )
}
