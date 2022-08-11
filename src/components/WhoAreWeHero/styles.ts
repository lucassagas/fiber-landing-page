import styled from 'styled-components'
import whoAreWeImg from '../../assets/whoarewe.png'

export const Container = styled.div`
  width: 100%;
  height: 88vh;

  background-image: url(${whoAreWeImg});
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: FuturaPTLight;

  > h1 {
    font-size: 80px;
  }

  @media (min-width: 1700px) {
    height: 90vh;
  }

  @media (max-width: 769px) {
    background-position: 20%;
  }

  @media (max-width: 400px) {
    margin-top: -30px;
    background-position: 20%;
  }
`
