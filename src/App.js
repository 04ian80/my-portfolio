import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import styled from 'styled-components';
import * as palette from './style/Variables';
import { HeadBarContext } from './store/HeadBarContext';

export default function App() {
  return (
    <>
      <HeadBarContext>
        <HomeContainer>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path={'/'} element={<Home />} />
            </Routes>
          </BrowserRouter>
        </HomeContainer>
      </HeadBarContext>
    </>
  );
}

const HomeContainer = styled.div`
  background-color: ${palette.bgColor};
`;
