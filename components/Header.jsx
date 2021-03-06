import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 20px;
  border-bottom: 1px var(--separator-color) solid;
  z-index: 1000;

  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: var(--background-blur-color);

  @media (max-width: 1024px) {
    width: calc(100% - 40px);
  }
`;

export const Spacer = styled.div`
  flex-grow: 2;
`;

export const Logo = styled.a`
  display: block;
  height: 100%;
  width: calc(50% - 40px);
  background: url("images/${props => props.image}") left center no-repeat;
  background-size: auto 100%;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  margin: auto;
  padding: 25px;
  border-radius: 6px;
  font-family: var(--secondary-font);
  color: var(--v-dark-purple);
  text-decoration: none;
  text-align: center;

  transition: background-color 0.2s, color 0.2s;
  -webkit-transition: background-color 0.2s, color: 0.2s;

  &:hover {
    background-color: var(--secondary-background-color);
    color: var(--v-purple);
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo href="/" image={"home-logo-2.png"} />
      <Spacer />
      <div className="vdesktop">
        <Link href="/system">System</Link>
        <Link href="/how-it-works">How it Works</Link>
        <Link href="/evaluation">Evaluation</Link>
        <Link href="/budget">Budget</Link>
        <Link href="/team">Team</Link>
      </div>
      <div className="vmobile">
        
      </div>
    </Wrapper>
  );
}
