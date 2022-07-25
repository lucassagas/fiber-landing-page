import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100px;

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
`
