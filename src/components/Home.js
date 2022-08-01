import React from 'react';
import SideBar from './SideBar';
import * as H from '../style/Home.style';
import { Introduce } from './Introduce';

function Home() {
  return (
    <H.HomeContainer>
      <Introduce />
      <SideBar />
    </H.HomeContainer>
  );
}

export default Home;
