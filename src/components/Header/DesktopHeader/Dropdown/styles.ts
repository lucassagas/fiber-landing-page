import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  position: relative;
  z-index: 20;
`

export const AnimatedDropdown = styled(motion.nav)`
  ${({ theme }) => css`
    position: absolute;

    top: 110%;

    min-width: 8rem;

    background: ${theme.colors.gray900};
    box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.12);
  `}
`

export const NavButton = styled.a`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.6rem 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gray900};
    border-bottom: 1px solid ${theme.colors.gray800};
    border-left: 1px solid ${theme.colors.white100};
    border-right: 1px solid ${theme.colors.white100};
    text-decoration: none;
    color: ${theme.colors.white100};

    :hover {
      background: ${theme.colors.gray800};
    }



    &:first-child {
      border-top: 1px solid ${theme.colors.white100};
    }
    &:last-child {
      border-bottom: 1px solid ${theme.colors.white100};
  `}
`
