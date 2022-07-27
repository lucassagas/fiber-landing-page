import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string
  variation: 'primary' | 'secondary' | 'neutral'
}

export function Button({ children, type, variation, ...rest }: ButtonProps): JSX.Element {
  return (
    <Container variation={variation || 'neutral'} type={type || 'button'} {...rest}>
      {children}
    </Container>
  )
}
