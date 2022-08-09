import { useTheme } from 'styled-components'
import { RiFacebookCircleLine, RiInstagramLine, RiLinkedinBoxLine } from '../../assets/icons'
import { Container, Content } from './styles'

export function SocialMediaBar(): JSX.Element {
  const { white100 } = useTheme().colors
  return (
    <Container>
      <Content>
        <h3>Nos siga em nossas redes sociais.</h3>
        <span>
          <RiFacebookCircleLine color={white100} size={23} />
          <RiInstagramLine color={white100} size={23} />
          <RiLinkedinBoxLine color={white100} size={24} />
        </span>
      </Content>
    </Container>
  )
}
