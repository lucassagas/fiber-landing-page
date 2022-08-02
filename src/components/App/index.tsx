import appleStore from '../../assets/applestore.svg'
import playStore from '../../assets/playstore.svg'
import smarthPhone from '../../assets/smarthphone.svg'
import { Container, Wrapper } from './styles'

export function App(): JSX.Element {
  return (
    <Container>
      <h6>Fiber App</h6>
      <h1>Aplicativo para técnicos</h1>

      <Wrapper>
        <img src={smarthPhone} alt='foto de um celular com o mapa aberto' className='mobile' />
        <section>
          <h1>
            Acelere o fluxo de trabalho em <br /> campo com o Fiber App
          </h1>
          <ul>
            <li>Verificar sinal dos clientes</li>
            <li>Mapa com caixas.</li>
            <li>Verificar base de clientes.</li>
            <li>
              Chat intregrado com fluxo automatizado <br /> para ativar clientes.
            </li>
          </ul>

          <div>
            <img src={playStore} alt='logo da google play' />
            <img src={appleStore} alt='logo da apple store' />
          </div>
        </section>
        <img src={smarthPhone} alt='foto de um celular com o mapa aberto' className='desktop' />
      </Wrapper>
    </Container>
  )
}
