import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
`

export const KnowTheModules = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  margin-bottom: 3.75rem;

  > h1 {
    font-family: FuturaPTLight;
  }

  > svg {
    margin-top: 12px;
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;

    > h1 {
      text-align: center;
    }
  }
`

export const Content = styled.div`
  display: flex;

  > nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-right: 4.375rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    > nav ul {
      flex-direction: row;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 720px) {
    > nav {
      display: flex;
      justify-content: center;

      > ul {
        margin-right: 0;
      }
    }
  }
`

type NavItemProps = {
  color: string
  isActive: boolean
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

    ${({ isActive }) =>
      isActive &&
      css`
        :before {
          transform: translateX(0);
        }
      `}
  }
`

export const AnimateContainer = styled(motion.div)`
  display: flex;
  .mobile {
    display: none;
  }

  > img {
    margin-top: -90px;
    margin-left: 100px;
  }

  @media (max-width: 1000px) {
    > img {
      width: 350px;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;

    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }

    > img {
      margin: 60px auto 60px;
    }
  }

  @media (max-width: 400px) {
    > img {
      width: 300px;
    }
  }
`
