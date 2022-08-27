import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { HeadBar } from './HeadBar';

export function Mystory() {
  return (
    <EdContainer>
      <HeadBar />
      <EdBox>
        <h2>My Story</h2>
        <ul>
          <li>개발을 시작하게 된 이유</li>
          <li>내가 나의 생각하는 장점 vs 남이 생각하는 나의 장점</li>
          <li></li>
          <li></li>
        </ul>
      </EdBox>
    </EdContainer>
  );
}

const EdContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const EdBox = styled.div`
  width: 100%;
  padding: 20px;
  margin: 5rem;
  border: 2px solid ${palette.salmonColor};
  border-radius: 30px;
`;
