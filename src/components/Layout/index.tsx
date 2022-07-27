import { ReactNode } from 'react'
import { Header } from '../Header'
import { Container } from './styles'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
