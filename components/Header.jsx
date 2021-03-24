import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  padding: 20px;
  background-color: var(--background-color);
  border-bottom: 1px var(--separator-color) solid;
`;

export const Spacer = styled.div`
  flex-grow: 2;
`;

export const Logo = styled.div`
  height: 100%;
  width: calc(50% - 40px);
  background: url("images/${props => props.image}") left center no-repeat;
  background-size: auto 100%;
  object-fit: contain;
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
    <Wrapper className="tween">
      <Logo image={"home-logo-2.png"} />
      <Spacer />
      <Link href="/system">System</Link>
      <Link href="/how-it-works">How it Works</Link>
      <Link href="/evaluation">Evaluation</Link>
      <Link href="/budget">Budget</Link>
      <Link href="/team">Team</Link>
    </Wrapper>
  );
}
