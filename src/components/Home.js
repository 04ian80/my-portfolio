import React, { useContext } from 'react';
import { Introduce } from './Introduce';
import { HeadBar } from './HeadBar';
import { TopButton } from './TopButton';
import { Skills } from './Skills';
import { Project } from './Project';
import { Footer } from './Footer';
import { UserContext } from '../store/HeadBarContext';

export default function Home() {
  const value = useContext(UserContext);
  const { menubar } = value;

  return (
    <div style={{ marginRight: menubar ? '15px' : null }}>
      <TopButton />
      <HeadBar />
      <Introduce />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}
