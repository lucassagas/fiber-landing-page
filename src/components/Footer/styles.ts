import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 80px 20px;

  background: ${({ theme }) => theme.colors.black900};

  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;

  margin: 0 auto;

  > section {
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-top: 1rem;
  }

  @media (max-width: 500px) {
    > img {
      margin-left: 50%;
      transform: translate(-50%, 0);
    }
    > section {
      flex-direction: column;
      align-items: center;

      gap: 10px;
    }
  }
`

export const Wrapper = styled.nav`
  display: flex;
  gap: 80px;
  margin-top: 40px;
  padding-bottom: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white100};

  > section {
    display: flex;
    flex-direction: column;
    > strong {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray500};
    }

    > a {
      margin-top: 1rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white100};
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 40px;
  }
`
