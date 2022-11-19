import React, { useReducer } from 'react';
import { HeadBar } from './HeadBar';
import { toggleCategory, categoryInit } from '../store/CategoryReducer';

export default function Home() {
  document.title = '홈 | 종아인의 포트폴리오';
  const [state, dispatch] = useReducer(toggleCategory, categoryInit);
  return (
    <div>
      <HeadBar state={state} dispatch={dispatch} />
      {state.render}
    </div>
  );
}
