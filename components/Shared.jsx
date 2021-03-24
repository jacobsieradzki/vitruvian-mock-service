import styled from 'styled-components'

export const Page = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
`;


export const Button = styled.div`
  margin-top: 20px;
  padding: 20px 25px;
  background-color: var(--v-dark-purple);
  display: inline-block;
  font-family: var(--secondary-font);
  color: white;
  font-size: 20px;
  border-radius: 33px;
`;

const FooterWrapper = styled.div`
  display: flex;
  background-color: var(--v-dark-purple);
  padding: 50px 100px;

  div {
    width: calc(25%);
  }
`;

const FooterColumn = styled.div`

  .logo {
    height: 50px;
    width: auto;
  }

  h3 {
    font-family: var(--secondary-font);
    font-size: 24px;
    color: white;
  }

  & > div {
    width: 100%;
    margin: 20px 0;

    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      font-family: var(--primary-font);
      background: linear-gradient(
        to bottom, white 0%,
        white 100%
      );
      background-position: 0 100%;
      background-repeat: repeat-x;
      background-size: 0.1px 0.1px;
      transition: background-size .5s, color .5s;
    }
    
    a:hover {
      background-size: 4px 50px;
      color: var(--v-purple);
    }
  }
`;

export const Footer = {
  Wrapper: FooterWrapper,
  Column: FooterColumn,
}