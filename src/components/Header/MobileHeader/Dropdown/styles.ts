import styled from 'styled-components'

export const StyledDropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Link = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white100};
  background: ${({ theme }) => theme.colors.gray800};
  border: solid 1px ${({ theme }) => theme.colors.gray900};
`
