import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Mystory } from './components/Mystory';
import styled from 'styled-components';
import * as palette from './style/Variables';

export default function App() {
  return (
    <HomeContainer>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />}>
            <Route path={'/mystory'} element={<Mystory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${palette.bgColor};
`;
