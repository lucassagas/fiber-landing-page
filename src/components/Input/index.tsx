import { InputHTMLAttributes, useCallback, useRef, useState } from 'react'
import { Container, Label } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export function Input({ label, ...rest }: InputProps) {
  const InputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!InputRef.current?.value)
  }, [])

  return (
    <div>
      <Container id='defaultInput' isFocused={isFocused} isFilled={isFilled}>
        <input
          ref={InputRef}
          autoComplete='off'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />

        {label && (
          <Label isFocused={isFocused} isFilled={isFilled}>
            {label}
          </Label>
        )}
      </Container>
    </div>
  )
}
