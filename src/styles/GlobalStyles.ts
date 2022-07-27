import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@font-face {
  font-family: 'FuturaPTBook';
  src: local('FuturaPTBook'),
  url('/fonts/FuturaPTBook.otf') format('opentype')
}

@font-face {
  font-family: 'FuturaPTBold';
  src: local('FuturaPTBold'),
  url('/fonts/FuturaPTBold.otf') format('opentype')
}

@font-face {
  font-family: 'FuturaPTLight';
  src: local('FuturaLight'),
  url('/fonts/FuturaPTLight.otf') format('opentype')
}

@font-face {
  font-family: 'FuturaPTMedium';
  src: local('FuturaPTMedium'),
  url('/fonts/FuturaPTMedium.otf') format('opentype')
}

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }

  @media(max-width: 720px) {
    font-size: 87.5%;
  }

  @media(max-width: 430px) {
    font-size: 81.25%
  }
}

body {
  font-family: FuturaPTBook, sans-serif;
  background: ${({ theme }) => theme.colors.gray900};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

}

body, input, textarea, button {
  color: ${({ theme }) => theme.colors.white100};
  font-size: 1rem;
}


button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed
}
`
