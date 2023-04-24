import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 92px;
  background: ${({ theme }) => theme.colors.blue700};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  > h3 {
    text-transform: uppercase;
  }

  > span {
    display: flex;
    gap: 1.875rem;

    > svg {
      cursor: pointer;
    }
  }

  @media (max-width: 430px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span {
      margin-top: 1.2rem;
    }
  }
`
