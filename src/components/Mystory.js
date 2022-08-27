import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { HeadBar } from './HeadBar';

export function Mystory() {
  return (
    <StoryContainer>
      <HeadBar />
      <MainStory>
        <StoryHeader>
          <Title>
            <h2>스토리</h2>
          </Title>
        </StoryHeader>
        <StoryBox>
          <StoryList>
            <li>개발을 시작하게 된 이유</li>
            <li>내가 생각하는 나의 장점 vs 남이 생각하는 나의 장점</li>
            <li></li>
            <li></li>
          </StoryList>
        </StoryBox>
      </MainStory>
    </StoryContainer>
  );
}

const StoryContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`;

const MainStory = styled.section`
  padding: 100px 64px;
`;

const StoryHeader = styled.div`
  display: flex;
`;

const Title = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid ${palette.pointColor};
  color: ${palette.subFontColor};

  & > * {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
  }
`;

const StoryBox = styled.div`
  margin-top: 32px;
`;

const StoryList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  & > * {
    margin-bottom: 30px;
    padding-left: 10px;
    border-left: 5px solid #eee;
    font-size: 1.2rem;
  }
`;
