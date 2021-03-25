import styled from 'styled-components'

export const Page = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 0 0 50px 0;

  & > h1 {
    font-size: 50px;
    color: var(--v-dark-purple);
    margin: 50px 0 20px;
  }

  & > span {
    font-size: 16px;
    font-family: var(--secondary-font);
    color: var(--secondary-label-color);
    margin: 20px 0;
  }

  & > span {
    display: block;
  }
`;

export const Button = styled.a`
  margin-top: 20px;
  padding: 20px 25px;
  background-color: var(--v-dark-purple);
  display: inline-block;
  font-family: var(--secondary-font);
  color: white;
  font-size: 20px;
  border-radius: 33px;
  text-decoration: none;
`;

export const Poster = styled.div`
  height: 40vh;
  background: url("images/${props => props.image}") center center no-repeat;
  background-color: ${props => props.color || 'purple'};
  background-size: auto 75%;
  object-fit: contain;
`;