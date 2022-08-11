import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 1.25rem;
  margin: 6.25rem auto 6.25rem;

  > h1 {
    text-align: center;
    font-size: 5rem;
    font-family: FuturaPTLight;
  }

  > p {
    text-align: center;
    margin: 1rem 0 5rem;
    font-size: 24px;
  }

  > div {
    display: flex;
    gap: 2rem;
    align-items: center;

    > p {
      font-size: 1.25rem;
    }

    > img {
      width: 50%;
    }
  }

  > section {
    margin-top: 6.25rem;

    > p {
      font-size: 1.25rem;
    }

    > img {
      margin: 3.375rem 0 6.25rem;
      width: 100%;
    }
  }

  @media (max-width: 650px) {
    > div {
      flex-direction: column;
      > img {
        width: 90%;
      }
    }

    > h1 {
      font-size: 45px;
    }

    > p {
      font-size: 1.2rem;
    }
  }
`
