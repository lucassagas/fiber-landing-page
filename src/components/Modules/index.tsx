import { AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { RiInformationLine } from '../../assets/icons'
import ConfigurationScreen from '../../assets/modules/configuration.svg'
import FiberScreen from '../../assets/modules/fiber.svg'
import { useModules } from '../../hooks/useModules'
import { Description } from './Description'
import { AnimateContainer, Container, Content, KnowTheModules, NavItem } from './styles'

export type SelectedModuleProps = {
  module: string
  color: string
  image?: React.FC<React.SVGProps<SVGSVGElement>> | string
  slug: string
  description: string[]
}

export function Modules(): JSX.Element {
  const { selectedModule: selectedModuleByDropdown } = useModules()
  const { white100, purple900, gray500 } = useTheme().colors
  const [selectedModule, setSelectedModule] = useState<SelectedModuleProps>()
  const [isVisible, setIsVisible] = useState(true)

  const modules = [
    {
      module: 'Fibra',
      color: purple900,
      image: FiberScreen,
      slug: 'Sistema de gerenciamento de rede.',
      description: [
        'Integração com os principais players do mercado de OLT.',
        'Mapa com toda rede, CTO, CEO, cabos e muito mais.',
        'Chat interno e atendimento para liberação técnica.',
        'Aplicativo para Técnicos.',
      ],
    },
    {
      module: 'Configurações',
      color: gray500,
      image: ConfigurationScreen,
      slug: 'Configure seus módulos da melhor forma para seu provedor.',
      description: [
        'Controle de usuários.',
        'Gerenciamento de grupos e permissões.',
        'Chat interno e atendimento para liberação técnica.',
        'Personalise fluxos e propiedades.',
      ],
    },
  ]

  useEffect(() => {
    const moduleByDropdown = modules.find((module) => module.module === selectedModuleByDropdown)
    setSelectedModule(moduleByDropdown || modules[0])
  }, [selectedModuleByDropdown])

  const handleSelectModule = useCallback((module: SelectedModuleProps): void => {
    setSelectedModule(module)
    setIsVisible(false)
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  return (
    <Container id='modules'>
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
              <NavItem
                isActive={selectedModule?.module === threeModule.module}
                onClick={() => handleSelectModule(threeModule)}
                color={threeModule.color}
                key={threeModule.module}
              >
                <button type='button'>{threeModule.module}</button>
              </NavItem>
            ))}
          </ul>
        </nav>
        <AnimatePresence exitBeforeEnter>
          {isVisible && (
            <AnimateContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img
                src={selectedModule?.image as string}
                alt='imagem da tela do modulo'
                className='mobile'
              />
              <Description selectedModule={selectedModule!} />
              <img
                src={selectedModule?.image as string}
                alt='imagem da tela do modulo'
                className='desktop'
              />
            </AnimateContainer>
          )}
        </AnimatePresence>
      </Content>
    </Container>
  )
}
