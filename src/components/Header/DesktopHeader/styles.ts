import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > nav {
    max-width: 900px;
    width: 100%;
    display: flex;

    > ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      list-style: none;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export const StyledLink = styled.a`
  min-width: 200px;
  padding: 10px;
  background: none;
  border: solid 1px ${({ theme }) => theme.colors.white100};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.white100};
`
