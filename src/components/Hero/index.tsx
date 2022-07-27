import { useTheme } from 'styled-components'
import { RiArrowDownLine } from '../../assets/icons'
import { Button } from '../Button'
import { Container, GradientOne, GradientTwo, Wrapper } from './styles'

export function Hero(): JSX.Element {
  const { white100 } = useTheme().colors
  return (
    <Container>
      <GradientOne />
      <Wrapper>
        <div>
          <h1>Three Soft</h1>
          <h3>
            Tenha o melhor sistema para gerenciar <br /> a rede do seu provedor.
          </h3>
          <Button variation='secondary'>Solicitar Demonstração</Button>
        </div>
        <a>
          Saiba mais <RiArrowDownLine size={18} color={white100} />
        </a>
      </Wrapper>
      <Button variation='secondary'>Solicitar Demonstração</Button>
      <GradientTwo />
    </Container>
  )
}
