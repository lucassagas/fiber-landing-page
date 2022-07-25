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
    right: 0;
    min-width: 13rem;

    background: ${theme.colors.gray900};
    box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.12);
  `}
`

export const NavButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.6rem 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gray900};
    border: 0;
    border-bottom: 1px solid ${theme.colors.gray800};
    border-left: 1px solid ${theme.colors.white100};
    border-right: 1px solid ${theme.colors.white100};

    :hover {
      background: ${theme.colors.gray800};
    }



    font-size: 1.1rem;

    &:first-child {
      border-top: 1px solid ${theme.colors.white100};
    }
    &:last-child {
      border-bottom: 1px solid ${theme.colors.white100};
  `}
`

export const StyledButton = styled.button`
  border: 0;
  background: 0;
  margin-left: 0.8rem;
  width: 1.8rem;
  height: 1.8rem;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    transform: rotate(90deg);
    margin-right: -2rem;
  }
`
