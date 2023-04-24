import { useTheme } from 'styled-components'
import heroMp4 from '../../assets/hero.mp4'
import { RiArrowDownLine } from '../../assets/icons'
import { Container, Wrapper, StyledLink } from './styles'

export function Hero(): JSX.Element {
  const { white100 } = useTheme().colors
  return (
    <Container>
      <video muted loop autoPlay>
        <source src={heroMp4} type='video/mp4' />
      </video>
      <Wrapper>
        <div>
          <h1>Three Soft</h1>
          <h3>
            Tenha o melhor sistema para gerenciar <br /> a rede do seu provedor.
          </h3>
          <StyledLink href='/#contactus'>Solicitar Demonstração</StyledLink>
        </div>
        <a>
          Saiba mais <RiArrowDownLine size={18} color={white100} />
        </a>
      </Wrapper>
      <StyledLink href='/#contactus'>Solicitar Demonstração</StyledLink>
    </Container>
  )
}
