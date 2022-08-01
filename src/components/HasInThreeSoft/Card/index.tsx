import { useTheme } from 'styled-components'
import { RiArrowRightUpLine, RiQuestionAnswerLine, RiRoadMapLine } from '../../../assets/icons'
import mapPicture from '../../../assets/map.svg'
import { Container, ContainerWithMap, Wrapper } from './styles'

type CardProps = {
  cards: Array<{
    title: string
    description: string
  }>
}

export function Card({ cards }: CardProps): JSX.Element {
  const { gray900 } = useTheme().colors
  return (
    <>
      {cards.map((card) => (
        <Container key={card.title}>
          <div>
            <RiQuestionAnswerLine size={28} color={gray900} />
            <h1>{card.title}</h1>

            <p>{card.description}</p>
          </div>

          <a href='#'>
            Fale conosco <RiArrowRightUpLine size={15} color={gray900} />
          </a>
        </Container>
      ))}
      <ContainerWithMap>
        <Wrapper>
          <div>
            <RiRoadMapLine size={28} color={gray900} />
            <h1>Mapa</h1>

            <p>
              Administre de forma simples e rápida todas as OS do seu provedor, tendo como
              complemento gerenciamento das rotas e técnicos via mapa.
            </p>
          </div>

          <a href='#'>
            Fale conosco <RiArrowRightUpLine size={15} color={gray900} />
          </a>
        </Wrapper>
        <img src={mapPicture} alt='Mapa com CTOs' />
      </ContainerWithMap>
    </>
  )
}
