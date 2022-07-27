import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
`

export const KnowTheModules = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  margin-bottom: 3.75rem;

  > h1 {
    font-family: FuturaPTLight;
  }
`

export const Content = styled.div`
  display: flex;

  > nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

type NavItemProps = {
  color: string
}

export const NavItem = styled.li<NavItemProps>`
  > button {
    background: none;
    border: none;

    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      display: block;
      width: calc(100% + 5px);
      height: 2px;

      position: absolute;
      bottom: 0;

      background: ${({ color }) => color};
      transition: all 0.2s;

      transform: translateX(-100%);
    }

    &:hover:before {
      transform: translateX(0);
    }
  }
`
