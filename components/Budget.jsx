import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  color: var(--primary-label-color);
  border-collapse: collapse;

  tr {
    margin: 0;
  }

  td {
    padding: 20px;
    margin: 0;
    border-bottom: 1px var(--border-color) solid;
    font-family: var(--primary-font);
    font-size: 20px;
  }

  th, .total {
    margin: 0;
    padding: 20px;
    text-align: left;
    border-bottom: 1px var(--border-color) solid;
    font-family: var(--secondary-font);
    font-size: 20px;
  }
`;