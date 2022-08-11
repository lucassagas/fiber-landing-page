import laptopImg from '../../assets/laptop.png'
import mapAbout from '../../assets/map_about.png'
import { Container } from './styles'

export function WhoAreWe(): JSX.Element {
  return (
    <Container>
      <h1>Quem Somos</h1>
      <p>
        A Three Soft é uma empresa de desenvolvimento de sistemas focada em construir ferramentas de
        inteligência para auxiliar empreendedores na tomada de decisões que possam fazer a diferença
        nas negociaçõe se e gerenciamento de demandas.
      </p>

      <div>
        <img
          src={laptopImg}
          alt=' imagem de um jovem segurando um celular em frente ao notebook com o sistema Three soft aberto'
        />
        <p>
          A Three Software é uma empresa totalmente focada em estudos e análises, afim de estar
          sempre atualizada com as tendências de gestão de empresas para soluções que agilizem o
          trabalho de seus clientes.
        </p>
      </div>

      <section>
        <p>
          A Three Software é uma empresa que fica localizada em Biguaçu/SC na Grande Florianóplis,
          onde se encontra os principais centros de tecnologia de software onde respiramos as
          melhores tendências e soluções do mercado para implementação.
        </p>
        <img src={mapAbout} alt='foto de uma mapa com as CTO marcadas no mapa' />
        <p>
          Hoje possui 3 colaboradores, com talentos diversificados e totalmente focados, utilizando
          das melhores tecnologias, equipamentos e softwares para promover produção com qualidade.
        </p>
      </section>
    </Container>
  )
}
