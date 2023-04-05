import Auth from 'components/Auth';
import { UserContext } from 'context';
import { useContext } from 'react';
import Routing from './Routing';
import './App.css';
import { ThemeContext } from 'context/Context';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <StyledProvider theme={theme}>
      <ToastContainer autoClose={2000} closeButton={false} hideProgressBar />
      {user ? <Routing /> : <Auth />}
    </StyledProvider>
  );
}

export default App;
