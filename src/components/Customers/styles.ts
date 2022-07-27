import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Customer = styled.div`
  margin: 6.25rem 0;

  max-width: 700px;
  width: 100%;

  background: ${({ theme }) => theme.colors.gray700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.125rem;

  box-shadow: 16px 16px 15px rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    > img {
      margin-top: -5px;
    }
  }

  @media (max-width: 600px) {
    > img {
      width: 130px;
    }
  }

  @media (max-width: 400px) {
    > img {
      width: 110px;
    }

    > div img {
      width: 15px;
      margin: 0;
    }

    padding: 50px 20px;
  }
`
