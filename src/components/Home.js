import React from 'react';
import * as H from '../style/Home.style';
import { Introduce } from './Introduce';
import { HeadBar } from './HeadBar';
import { TopButton } from './TopButton';
import { Skills } from './Skills';
import { Mystory } from './Mystory';

function Home() {
  return (
    <div>
      <TopButton />
      <HeadBar />
      <Introduce />
      <Skills />
    </div>
  );
}

export default Home;
