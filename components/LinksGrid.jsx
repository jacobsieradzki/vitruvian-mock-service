import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'

const Title = styled.h2`
  margin-top: 100px;
`;

const Grid = styled.div`
  margin: 0 -10px 50px;
  display: flex;
  flex-flow: row wrap;
`;

const Item = styled.a`
  background-color: ${props => props.color1};
  margin: 10px;
  padding: 10px;
  width: calc(25% - 40px);
  height: 100%;
  color: white;
  text-decoration: none;

  h3 {
    font-family: var(--secondary-font);
    margin: 10px -10px -10px;
    padding: 40px;
    background-color: ${props => props.color2};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${props => props.color1};
    }
  }

  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default function LinksGrid({ i }) {
  return (
    <>
      <Title>Related</Title>
      <Grid>
        {i !== 0 &&
          <Item href="/system" color1="#2a9d8f" color2="#186158">
            <img src="/images/system.png" alt="System Image" />
            <h3>System&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></h3>
          </Item>
        }
        {i !== 1 &&
          <Item href="/how-it-works" color1="#e9c46a" color2="#ba9e58">
            <img src="/images/how-it-works.png" alt="How it Works Image" />
            <h3>How it Works&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></h3>
          </Item>
        }
        {i !== 2 &&
          <Item href="/evaluation" color1="#f4a261" color2="#b97a49">
            <img src="/images/evaluation.png" alt="Evaluation Image" />
            <h3>Evaluation&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></h3>
          </Item>
        }
        {i !== 3 &&
          <Item href="budget" color1="#264653" color2="#15262d">
            <img src="/images/budget.png" alt="Budget Image" />
            <h3>Budget&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></h3>
          </Item>
        }
        {i !== 4 &&
          <Item href="team" color1="#e76f51" color2="#9d4b36">
            <img src="/images/team.png" alt="Team Image" />
            <h3>Team&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></h3>
          </Item>
        }
      </Grid>
    </>
  );
}