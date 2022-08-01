import { Card } from './Card'
import { Container, Wrapper } from './styles'

const cards = [
  {
    title: 'Chat',
    description:
      'Chat próprio integrado à todos os módulos para uso de seu provedor, com uso de interação interna e com técnicos externos',
  },
  {
    title: 'App para técnicos',
    description:
      'Acelere o trabalho em campo com, verificação de sinal, ocupação de CTO, localização, tratativa técnica entre outras funcionalidades.',
  },
  {
    title: 'Métricas',
    description:
      'Tenha relatórios e dados diários via dashboard como, ativações de clientes, CTO, portas disponíveis, OLT por cidade entre outras.',
  },
  {
    title: 'Notificações',
    description: 'Sistema de notificações integrado a todos os módulos, interagindo com o chat.',
  },
  {
    title: 'Interface',
    description:
      'Todo o fluxo de trabalho em campo, verificação de sinal, ocupação de CTO, localização, tratativa técnica entre outras funcionalidades.',
  },
]

export function HasInThreeSoft(): JSX.Element {
  return (
    <Container>
      <h6>Tem na Three soft</h6>
      <h1>
        Tenha um sistema preparado <br /> para seu provedor.
      </h1>

      <Wrapper>
        <Card cards={cards} />
      </Wrapper>
    </Container>
  )
}
