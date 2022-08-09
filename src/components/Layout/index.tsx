import { ReactNode } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { SocialMediaBar } from '../SocialMediaBar'
import { Container } from './styles'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Container>
      <Header />
      {children}
      <SocialMediaBar />
      <Footer />
    </Container>
  )
}
