import { UserContext } from 'context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogOut from './LogOut';

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  width: 20vw;
  height: 100vh;
  border-right: 1px solid ${(props) => props.theme.line_color_1};
`;

export default function Nav() {
  const { user } = useContext(UserContext);
  return (
    <StyledNav>
      <NavLink to="/">Home</NavLink>

      <NavLink to={`/${user.username}`}>Profile</NavLink>

      <LogOut />
    </StyledNav>
  );
}
