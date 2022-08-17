import React from 'react';
import * as H from '../style/Home.style';
import { Introduce } from './Introduce';
import { HeadBar } from './HeadBar';
import { TopButton } from './TopButton';
import { Skill } from './Skill';

function Home() {
  return (
    <H.HomeContainer>
      <HeadBar />
      <Introduce />
      <TopButton />
      <Skill />
    </H.HomeContainer>
  );
}

export default Home;
