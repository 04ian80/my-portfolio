import React from 'react';
import * as H from '../style/Home.style';
import { Introduce } from './Introduce';
import { HeadBar } from './HeadBar';
import { TopButton } from './TopButton';
import { Skills } from './Skills';

function Home() {
  return (
    <H.HomeContainer>
      <HeadBar />
      <Introduce />
      <TopButton />
      <Skills />
    </H.HomeContainer>
  );
}

export default Home;
