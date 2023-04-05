import { UserContext } from 'context';
import { useContext } from 'react';
import { MESSAGE_LOG_IN_SUCCESS, USER_LOCALSTORAGE } from 'constant';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const StyledLogIn = styled.div`
  width: 50vw;
  height: 70vh;
  margin: auto;
  background-color: ${(props) => props.theme.bg_color_2};
`;

export default function LogIn() {
  const { setUser } = useContext(UserContext);

  const handleLogIn = () => {
    const user = { username: 'duc_vien' };
    setUser(user);
    localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(user));
    toast.success(MESSAGE_LOG_IN_SUCCESS);
  };

  return (
    <button type="button" onClick={handleLogIn}>
      Click to log in
    </button>
  );
}
