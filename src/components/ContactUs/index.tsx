import { FormEvent, useCallback, useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { Container, Img, Wrapper } from './styles'

type FormProps = {
  name: string
  email: string
  company: string
  office: string
}

export function ContactUs(): JSX.Element {
  const [formData, setFormData] = useState<FormProps>({
    name: '',
    email: '',
    company: '',
    office: '',
  })

  const handleSubmit = useCallback(
    async (event: FormEvent): Promise<void> => {
      event.preventDefault()
      console.log(formData)
    },
    [formData],
  )

  const handleChange = useCallback((event: FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget

    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }, [])

  return (
    <Container>
      <Img />
      <div>
        <Wrapper onSubmit={handleSubmit}>
          <h1>Fale Conosco</h1>
          <p>
            Preencha o formulário para que nossa <br /> equipe entre em contato.
          </p>

          <section>
            <Input label='Nome' name='name' onChange={handleChange} />
            <Input label='E-mail' name='email' onChange={handleChange} />
            <Input label='Empresa' name='company' onChange={handleChange} />
            <Input label='Cargo' name='office' onChange={handleChange} />

            <Button type='submit' variation='primary'>
              Enviar
            </Button>
          </section>
        </Wrapper>
      </div>
    </Container>
  )
}
