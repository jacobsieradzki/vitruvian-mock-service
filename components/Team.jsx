import styled from 'styled-components';

export const Person = styled.div`
  display: flex;
  
  h3 {
    font-size: 24px;
    margin: 5px 0;
  }

  span {
    font-size: 16px;
    font-family: var(--secondary-font);
    color: var(--secondary-label-color);
  }

  p {
    font-size: 14px;
  }

  .pp {
    height: 100px;
    width: 100px;
    margin: 20px;
  }

  svg {
    padding: 5px;
  }

  @media (max-width: 1024px) {
    flex-flow: column;
  }
`;

export const PersonContent = styled.div`
  flex-grow: 2;
  padding: 20px;
`;