import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 256px;
  height: 328px;
  padding: 1.875rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => css`
    background: ${theme.colors.gray100};
    color: ${theme.colors.gray900};

    > div h1 {
      font-size: 1.25rem;
      margin: 1.5rem 0 1rem;
    }

    > a {
      max-width: 130px;
      text-decoration: none;
      font-size: 1.25rem;
      padding: 0 0 8px;
      gap: 10px;

      color: ${theme.colors.gray900};
      border-bottom: 1px solid ${theme.colors.gray900};

      display: flex;
      align-items: center;
    }
  `};
`

export const ContainerWithMap = styled(Container)`
  flex-direction: row;
  flex: 1;
  min-width: 830px;

  > img {
    margin-left: 1rem;
    object-fit: cover;
    max-width: 550px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    width: 200px;
  }

  > a {
    max-width: 130px;
    text-decoration: none;
    font-size: 1.25rem;
    padding: 0 0 8px;
    gap: 10px;
    ${({ theme }) => css`
      color: ${theme.colors.gray900};
      border-bottom: 1px solid ${theme.colors.gray900};
    `}

    display: flex;
    align-items: center;
  }
`
