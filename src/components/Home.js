import React, { useContext } from 'react';
import { Introduce } from './Introduce';
import { HeadBar } from './HeadBar';
import { TopButton } from './TopButton';
import { Skills } from './Skills';
import { Project } from './Project';
import { UserContext } from '../store/HeadBarContext';

function Home() {
  const value = useContext(UserContext);
  const { menubar, open } = value;

  return (
    <div style={{ marginRight: menubar ? '15px' : null }}>
      <TopButton />
      <HeadBar />
      <Introduce />
      <Skills />
      <Project />
    </div>
  );
}

export default Home;
