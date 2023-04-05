import PropTypes from 'prop-types';
import { USER_LOCALSTORAGE } from 'constant';
import { useState } from 'react';
import { UserContext } from './Context';

export default function UserProvider({ children }) {
  const userLocalSt = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE));

  const [user, setUser] = useState(userLocalSt ? userLocalSt : null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element,
};

UserProvider.defaultProps = {
  children: null,
};
