import styled from 'styled-components'

export const PosterWindow = styled.div`
  display: flex;
  min-height: 100vh;
  margin-top: -120px;
`;

export const Poster = styled.div`
  width: 50%;
  background-color: var(--v-dark-purple);
  padding: 40px;

  .logo {
    height: 100px;
  }
`;

const Window = styled.div`
  display: flex;
  min-height: calc(100vh - 150px);
  flex-flow: column;
  justify-content: space-between;
  width: calc(50% - 100px);
  padding: 75px 150px;

  h1 { 
    font-size: 70px;
    color: var(--v-dark-purple);
  }

  p { 
    font-size: 24px;
    color: var(--tertiary-label-color);
  }
`;

const ContentTop = styled.div`
  margin: 0;
`;

const ContentSpacer = styled.div`
  flex-grow: 2;
  width: 100%;
  background-color: clear;
`;

const ContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p, svg {
    color: var(--secondary-label-color);
  }

  img {
    height: 80px;
  }
`;

export const Content = {
  Window,
  Top: ContentTop,
  Spacer: ContentSpacer,
  Bottom: ContentBottom,
}

const App = `

  .app-image {
    position: sticky;
    top: 200px;
    margin: 0;
    height: 100%;
  }

  .scrollmagic-pin-spacer {
    background-color: purple;
    height: 100%;
  }

  img {
    height: 80px;
  }

`;

export const HalfHalf = styled.div`
  display: flex;
  margin: 100px 0;

  h2 { 
    font-size: 40px;
    color: var(--v-dark-purple);
  }
  p { font-size: 20px; }

  &.app { 
    ${App} 
  }
`;

export const HalfImage = styled.div`
  width: 50%;
  background: url("images/${props => props.image}") center center no-repeat;
  background-size: 75% auto;
  object-fit: contain;
`;

export const HalfText = styled.div`
  width: calc(50% - 100px);
  padding: 50px;

  &::first-child {
    text-align: right;
  }
`;