import { MESSAGE_LOG_OUT_SUCCESS, USER_LOCALSTORAGE } from 'constant';
import { UserContext } from 'context';
import { useContext } from 'react';
import { toast } from 'react-toastify';

export default function LogOut() {
  const { setUser } = useContext(UserContext);

  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem(USER_LOCALSTORAGE);
    toast.success(MESSAGE_LOG_OUT_SUCCESS);
  };

  return (
    <button type="button" onClick={handleLogOut}>
      Click to log out
    </button>
  );
}
