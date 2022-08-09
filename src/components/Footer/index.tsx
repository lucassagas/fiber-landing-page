import footerImg from '../../assets/logo_footer.svg'
import { Container, Content, Wrapper } from './styles'

export function Footer(): JSX.Element {
  return (
    <Container>
      <Content>
        <img src={footerImg} alt='logo da three soft' />

        <Wrapper>
          <section>
            <strong>Módulos</strong>
            <a href='#'>Fibra</a>
            <a href='#'>Logística</a>
            <a href='#'>Intranet</a>
            <a href='#'>Configurações</a>
          </section>
          <section>
            <strong>Sobre Nós</strong>
            <a href='#'>Three Soft</a>
          </section>
          <section>
            <strong>Fale Conosco</strong>
            <a href='#'>contato@threesoft.com.br</a>
          </section>
        </Wrapper>
        <section>
          <span>© 2021 Three Soft - Todos os Direitos Reservados</span>
          <span>CNPJ 912841204810710</span>
        </section>
      </Content>
    </Container>
  )
}
