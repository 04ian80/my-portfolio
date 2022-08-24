import React from 'react';
import { Introduce } from './Introduce';
import { HeadBar } from './HeadBar';
import { TopButton } from './TopButton';
import { Skills } from './Skills';
import { Project } from './Project';

function Home() {
  return (
    <div>
      <TopButton />
      <HeadBar />
      <Introduce />
      <Skills />
      <Project />
    </div>
  );
}

export default Home;
