import React from 'react';
import * as H from '../style/Home.style';
import { Introduce } from './Introduce';
import SideBar from './SideBar';
import { TopButton } from './TopButton';

function Home() {
  return (
    <H.HomeContainer style={{ position: 'relative' }}>
      <Introduce />
      <SideBar />
      <TopButton />
    </H.HomeContainer>
  );
}

export default Home;
