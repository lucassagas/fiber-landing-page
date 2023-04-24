import { FormEvent, useCallback, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { toast } from 'react-toastify'
import { Button } from '../Button'
import { Input } from '../Input'
import { Container, Img, Wrapper } from './styles'

type FormProps = {
  name: string
  email: string
  company: string
  position: string
}

const ADD_CONTACT = gql`
  mutation CreateContact($name: String!, $email: String!, $company: String!, $position: String!) {
    createContact(data: { name: $name, email: $email, company: $company, position: $position }) {
      id
      createdAt
      name
      email
      company
      position
    }
  }
`

export function ContactUs(): JSX.Element {
  const [formData, setFormData] = useState<FormProps>({
    name: '',
    email: '',
    company: '',
    position: '',
  })

  const [createContact] = useMutation(ADD_CONTACT, {
    variables: {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      position: formData.position,
    },
  })

  const handleSubmit = useCallback(
    async (event: FormEvent): Promise<void> => {
      event.preventDefault()
      createContact()
      setFormData({
        name: '',
        email: '',
        company: '',
        position: '',
      })

      toast('Enviado com sucesso', {
        type: 'success',
      })
    },
    [formData],
  )

  const handleChange = useCallback((event: FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget

    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }, [])

  return (
    <Container id='contactus'>
      <Img />
      <div>
        <Wrapper onSubmit={handleSubmit}>
          <h1>Fale Conosco</h1>
          <p>
            Preencha o formulário para que nossa <br /> equipe entre em contato.
          </p>

          <section>
            <Input
              label='Nome'
              name='name'
              onChange={handleChange}
              value={formData.name}
              required
            />
            <Input
              label='E-mail'
              name='email'
              onChange={handleChange}
              value={formData.email}
              type='email'
              required
            />
            <Input
              label='Empresa'
              name='company'
              onChange={handleChange}
              value={formData.company}
            />
            <Input
              label='Cargo'
              name='position'
              onChange={handleChange}
              value={formData.position}
            />

            <Button type='submit' variation='primary'>
              Enviar
            </Button>
          </section>
        </Wrapper>
      </div>
    </Container>
  )
}
