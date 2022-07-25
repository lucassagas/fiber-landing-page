import styled, { css } from 'styled-components'

type ContainerProps = {
  variation: 'primary' | 'secondary' | 'neutral'
}

const ButtonVariations = {
  neutral: css`
    background: none;
    border: solid 1px ${({ theme }) => theme.colors.white100};
  `,
  primary: css`
    background: ${({ theme }) => theme.colors.blue700};
    border: none;
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.blue700};
    border: none;
  `,
}

export const Container = styled.button<ContainerProps>`
  min-width: 200px;
  padding: 10px;

  ${({ variation }) => ButtonVariations[variation]}
`
