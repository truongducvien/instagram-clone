import PropTypes from 'prop-types';
import { THEME_LOCALSTORAGE } from 'constant';
import { useState } from 'react';
import { LIGHT_THEME } from 'styles/theme';
import { ThemeContext } from './Context';

export default function ThemeProvider({ children }) {
  const themeLocalSt = JSON.parse(localStorage.getItem(THEME_LOCALSTORAGE));

  const [theme, setTheme] = useState(themeLocalSt ? themeLocalSt : LIGHT_THEME);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.element,
};

ThemeProvider.defaultProps = {
  children: null,
};
