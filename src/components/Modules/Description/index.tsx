import { useTheme } from 'styled-components'
import { SelectedModuleProps } from '..'
import { RiArrowRightUpLine } from '../../../assets/icons'
import { Container, Link, Wrapper } from './styles'

type descriptionProps = {
  selectedModule: SelectedModuleProps
}

export function Description({ selectedModule }: descriptionProps): JSX.Element {
  const { white100 } = useTheme().colors
  return (
    <Container>
      <h2>{selectedModule?.slug}</h2>
      <Wrapper>
        {selectedModule?.description.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </Wrapper>
      <Link href='' color={selectedModule?.color}>
        Fale conosco <RiArrowRightUpLine size={18} color={white100} />
      </Link>
    </Container>
  )
}
