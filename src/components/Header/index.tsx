import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'
import { Container } from './styles'

export function Header(): JSX.Element {
  return (
    <Container>
      <DesktopHeader />
      <MobileHeader />
    </Container>
  )
}
