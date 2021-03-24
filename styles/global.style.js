import { createGlobalStyle } from 'styled-components'
import { Colors, Fonts } from './Constants'

const GlobalStyle = createGlobalStyle`
  :root {
    ${Colors}
    ${Fonts}
  }

  body {
    margin: 0;
  }

  h1 {
    font-family: var(--title-font);
  }

  p {
    font-family: var(--primary-font);
  }
`;

export default GlobalStyle;