import Nav from 'components/Nav';
import { Home, Profile } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: calc(80vw);
  margin-left: 20vw;
`;

export default function Routing() {
  return (
    <BrowserRouter>
      <Nav />

      <StyledContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Profile />} />
        </Routes>
      </StyledContainer>
    </BrowserRouter>
  );
}
