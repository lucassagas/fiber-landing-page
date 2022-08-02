import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;

  margin: 150px auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  > h6 {
    font-size: 1.125rem;
  }

  > h1 {
    font-size: 2.1875rem;

    margin: 1rem 0 4rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 6rem;

  > section {
    > h1 {
      font-size: 2.1875rem;
      margin-bottom: 2.5rem;
    }

    > ul {
      margin-left: 1rem;
      li {
        font-size: 1.25rem;
        :not(:first-child) {
          margin-top: 2rem;
        }
      }
    }

    > div {
      display: flex;
      gap: 2rem;

      margin-top: 2rem;
    }
  }

  .mobile {
    display: none;
    margin-top: 60px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }

    > section div {
      width: 100%;
      justify-content: center;
    }
  }
`
