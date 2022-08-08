import styled from 'styled-components'
import contactUsImg from '../../assets/contact_us.svg'

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  margin: 0 auto 6.25rem;

  display: flex;

  > div {
    flex: 1;

    & + div {
      background: ${({ theme }) => theme.colors.gray700};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 700px) {
    padding: 0;
    text-align: center;
  }
`

export const Img = styled.div`
  background-image: url(${contactUsImg});
  background-position: center;

  @media (max-width: 700px) {
    display: none;
  }
`

export const Wrapper = styled.form`
  width: 320px;
  padding: 40px 20px;

  > h1 {
    font-size: 1.75rem;
  }

  > p {
    font-size: 1.125rem;
    margin: 2rem 0;
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > button {
      margin-top: 1.5rem;
    }
  }

  @media (max-width: 700px) {
    > h1 {
      font-size: 2.5rem;
    }

    > p {
      font-size: 1.2rem;
      margin: 2rem 0;
    }
  }
`
