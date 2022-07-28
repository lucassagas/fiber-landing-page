import styled from 'styled-components'

export const Container = styled.div`
  max-width: 360px;
  > h2 {
    max-width: 260px;
    font-size: 1.75rem;
    margin-left: -0.9375rem;
    margin-bottom: 2.625rem;
  }

  @media (max-width: 1000px) {
    padding: 1rem;
  }

  @media (max-width: 720px) {
    width: 100%;
    max-width: 800px;
    > h2 {
      max-width: 800px;
      text-align: center;
    }
  }
`

export const Wrapper = styled.ul`
  > li {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    :last-child {
      margin-bottom: 2rem;
    }
  }
`

type LinkProps = {
  color: string
}

export const Link = styled.a<LinkProps>`
  text-decoration: none;
  max-width: 140px;

  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.white100};
  margin-top: 1rem;
  font-size: 1.25rem;

  border-bottom: solid 1px ${({ color }) => color};
`
