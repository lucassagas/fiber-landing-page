import logoNeorede from '../../assets/customers/neorede-logo.svg'
import quots from '../../assets/quots.svg'
import { Container, Customer } from './styles'

export function Customers(): JSX.Element {
  return (
    <Container>
      <Customer>
        <div>
          <img src={quots} alt='aspas' />
          <p>
            Atendemos o provedor mais <br /> premiado de Santa Catarina.
          </p>
        </div>
        <img src={logoNeorede} alt='logo da neorede' />
      </Customer>
    </Container>
  )
}
