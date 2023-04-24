import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 88vh;

  background-size: cover;
  overflow: hidden;

  position: relative;

  > a {
    display: none;
  }

  @media (min-width: 1700px) {
    height: 90vh;

    > video {
      width: 100%;
    }
  }

  @media (max-width: 769px) {
    background-position: 20%;
  }

  @media (max-width: 400px) {
    margin-top: -30px;
    > a {
      font-weight: 600;
      display: flex;
      position: absolute;
      padding: 20px 0;
      bottom: 0;
      width: 100%;
      z-index: 20;
    }

    > video {
      margin-left: -80%;
    }
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;

  width: 100%;
  height: 55vh;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 30;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  > div {
    > h1 {
      font-family: FuturaPTLight;
      font-size: 5rem;
      margin-bottom: 1rem;
    }

    > h3 {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
    }

    > button {
      font-weight: 600;
    }
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5125rem;
  }

  @media (max-width: 1200px) {
    padding: 0 20px;
  }

  @media (max-width: 400px) {
    > a {
      display: none;
    }

    > div button {
      display: none;
    }
  }
`
export const StyledLink = styled.a`
  background: ${({ theme }) => theme.colors.white100};
  border: none;
  color: ${({ theme }) => theme.colors.gray900};
  min-width: 200px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: -6px;

  text-decoration: none;
`
