import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  background: ${({ theme }) => theme.colors.gray900};

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray800};
`
