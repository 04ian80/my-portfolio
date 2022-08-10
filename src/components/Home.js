import React from 'react';
import * as H from '../style/Home.style';
import { Introduce } from './Introduce';
import { HeadBar } from './HeadBar';
import { TopButton } from './TopButton';

function Home() {
  return (
    <H.HomeContainer style={{ position: 'relative' }}>
      <HeadBar />
      <Introduce />
      <TopButton />
    </H.HomeContainer>
  );
}

export default Home;
