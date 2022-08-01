import ScrollContainer from 'react-indiana-drag-scroll'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;

  margin: 7rem auto 0;

  > h6 {
    font-size: 1.125rem;
    font-family: FuturaPTBold;
  }

  > h1 {
    font-size: 2.1875rem;
    margin: 1rem 0 2rem;
    font-family: FuturaPTLight;
  }

  @media (max-width: 600px) {
    > h1 {
      font-size: 1.5rem;
    }
  }
`

export const Wrapper = styled(ScrollContainer)`
  display: grid;
  grid-template-columns: repeat(4, 256px);
  grid-gap: 2rem;

  overflow-y: auto;
`
