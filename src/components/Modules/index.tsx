import { useTheme } from 'styled-components'
import { RiInformationLine } from '../../assets/icons'
import { Description } from './Description'
import { Container, Content, KnowTheModules, NavItem } from './styles'

export function Modules(): JSX.Element {
  const { white100, purple900, blue500, orange900, gray500 } = useTheme().colors

  const modules = [
    { module: 'Fibra', color: purple900 },
    { module: 'Logística', color: blue500 },
    { module: 'Intranet', color: orange900 },
    { module: 'Configurações', color: gray500 },
  ]

  return (
    <Container>
      <KnowTheModules>
        <h1>
          Conheça os módulos
          <br /> de serviço.
        </h1>
        <RiInformationLine size={24} color={white100} />
      </KnowTheModules>
      <Content>
        <nav>
          <ul>
            {modules.map((threeModule) => (
              <NavItem color={threeModule.color} key={threeModule.module}>
                <button type='button'>{threeModule.module}</button>
              </NavItem>
            ))}
          </ul>
        </nav>
        <Description />
      </Content>
    </Container>
  )
}
