import styled from 'styled-components'

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white100};

  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;
`
