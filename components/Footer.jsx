import styled from 'styled-components'
import { Logo } from 'components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSketch, faTrello } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faHome, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';

const FooterWrapper = styled.div`
  display: flex;
  background-color: var(--v-dark-purple);
  padding: 50px 100px;

  div { width: calc(25%); }

  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    padding: 50px 25px;
    div { width: 100%; }
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
    color: white;
    font-family: var(--primary-font);

    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
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

export default function element() { return (
  <Footer.Wrapper>
    <Footer.Column>
      <h3>Vitruvian</h3>
      <div><a href="/system">System</a></div>
      <div><a href="/how-it-works">How it Works</a></div>
      <div><a href="/evaluation">Evaluation</a></div>
      <div><a href="/budget">Budget</a></div>
      <div><a href="/team">Team</a></div>
    </Footer.Column>

    <Footer.Column>
      <h3>More</h3>
      <div>
        <FontAwesomeIcon icon={faFileAlt} />
        &nbsp;&nbsp;
        <a href="/submissions">SDP Submissions</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faSketch} />
        &nbsp;&nbsp;
        <a href="https://sketch.com/s/785945b0-72bc-47c6-8ca9-95a40fc94b4b">Design Document</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faTrello} />
        &nbsp;&nbsp;
        <a href="https://trello.com/b/p6Z1ew26/vitruvian">Trello Board</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faTools} />
        &nbsp;&nbsp;
        <a href="/api-docs">API</a>
      </div>
    </Footer.Column>

    <Footer.Column>
      <h3>
        <FontAwesomeIcon icon={faGithub} />
        &nbsp;
        Repositories
      </h3>
      <div><a href="https://github.com/jacobsieradzki/vitruvian-mock-service">Website &amp; Server</a></div>
      <div><a href="https://github.com/jacobsieradzki/vitruvian-hardware">Hardware</a></div>
      <div><a href="https://github.com/ionescuanelise/Vitruvian">Android App</a></div>
    </Footer.Column>

    <Footer.Column>
      <h3>Acknowledgements</h3>
      <div>Icons from <a href="https://icons8.com">Icons8</a></div>
      <div>Icons from <a href="https://fontawesome.com">Font Awesome</a></div>
      <div>Animation from <a href="https://rotato.xyz">Rotato</a></div>
      <div>Sounds from <a href="https://www.zapsplat.com">ZapSplat</a></div>
    </Footer.Column>

  </Footer.Wrapper>
)}