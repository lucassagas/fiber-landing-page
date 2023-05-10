import laptopImg from '../../assets/laptop.png'
import mapAbout from '../../assets/map_about.png'
import { Container } from './styles'

export function WhoAreWe(): JSX.Element {
  return (
    <Container>
      <h1>Quem Somos</h1>
      <p>
        A Three Soft é uma empresa de desenvolvimento de sistema, focado em construir ferramentas
        para auxiliar empreendedores em seu gerenciamento.
      </p>

      <div>
        <img
          src={laptopImg}
          alt='imagem de um jovem segurando um celular em frente ao notebook com o sistema Three soft aberto'
        />
        <p>
          Prezamos por qualidade e velocidade, cada tela do nosso sistema é pensada em otimização
          dos processos, acelerando o fluxo de trabalho.
        </p>
      </div>

      <section>
        <p>
          A Three Soft é uma empresa que fica localizada em Biguaçu/SC na Grande Florianópolis, onde
          se encontra os principais centros de tecnologia de software, respiramos as melhores
          tendências e soluções do mercado para implementação.
        </p>
        <img src={mapAbout} alt='foto de uma mapa com as CTO marcadas no mapa' />
      </section>
    </Container>
  )
}
