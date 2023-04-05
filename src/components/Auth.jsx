import styled from 'styled-components';
import LogIn from './LogIn';

const StyledAuth = styled.div`
  width: 50%;
  height: 50%';
  background-color: ${(props) => props.theme.bg_color_2};
`;

export default function Auth() {
  return (
    <StyledAuth>
      <div>
        <LogIn />
      </div>
    </StyledAuth>
  );
}
