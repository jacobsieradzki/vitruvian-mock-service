import { createGlobalStyle } from 'styled-components'
import { Colors, DarkModeColors, Fonts } from './Constants'

const GlobalStyle = createGlobalStyle`
  :root {
    ${Colors}
    ${Fonts}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${DarkModeColors}
    }
  }

  body {
    margin: 0;
    background-color: var(--background-color);
  }

  h1, h2, h3 {
    font-family: var(--title-font);
  }

  p {
    font-family: var(--primary-font);
  }

  .vmobile { display: none; }
  .vdesktop { display: inherit; }

  @media (max-width: 1024px) {
    .vmobile { display: block; }
    .vdesktop { display: none; }
  }
`;

export default GlobalStyle;