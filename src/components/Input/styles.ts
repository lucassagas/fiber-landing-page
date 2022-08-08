import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 50px;

  overflow: hidden;

  > div {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 3;
    cursor: pointer;
  }

  &:before {
    content: '';
    display: block;

    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0px;

    transition: all 0.3s ease;
    z-index: 3;
    transform: translateX(-101%);

    background: ${({ theme }) => theme.colors.blue700};

    ${({ isFocused }) =>
      isFocused &&
      css`
        transform: translateX(0%);
      `}

    ${({ isFilled }) =>
      isFilled &&
      css`
        transform: translateX(0%);
      `}
  }

  > input {
    background: none;
    border: 0;
    z-index: 2;
    padding-top: 20px;
    width: 100%;

    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }

    border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  }
`

interface LabelProps {
  isFocused: boolean
  isFilled: boolean
}

export const Label = styled.span<LabelProps>`
  position: absolute;
  left: 0;

  transition: all 0.3s ease;

  ${({ isFocused }) =>
    isFocused &&
    css`
      transform: translateY(-150%);
      transition: all 0.3s ease;
      font-size: 0.9rem;
      opacity: 0.7;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      transform: translateY(-150%);
      transition: all 0.3s ease;
      font-size: 0.9rem;
      opacity: 0.7;
    `}
`
