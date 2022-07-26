import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  width: 100%;
  height: 90px;

  > header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    > button {
      background: none;
      border: none;
    }
  }

  @media (max-width: 700px) {
    display: block;
  }
`

type MenuProps = {
  openMenu: boolean
}

export const Menu = styled.div<MenuProps>`
  width: 100%;

  position: absolute;
  left: ${({ openMenu }) => (openMenu ? 0 : '-100%')};

  transition: all 0.3s;

  > ul {
    list-style: none;

    > li a {
      width: 100%;
      padding: 15px 0 15px 15px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray800};
    }
  }
`
