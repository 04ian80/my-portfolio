import React, { useState } from 'react';
import styled from 'styled-components';
import * as palette from '../../style/Variables';
import { HeadBar } from '../HeadBar';
import { StoryData as data } from '../../data/StoryData';
import { StoryAccordion } from '../StoryAccordion';
import { Footer } from './Footer';

export function Mystory() {
  document.title = '스토리 | 종아인의 포트폴리오';
  const [toggle, setToggle] = useState(0);

  const handleToggle = (idx) => {
    if (toggle === idx) {
      return setToggle('0');
    }
    setToggle(idx);
  };

  return (
    <Container>
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
              {data.map((d, idx) => (
                <StoryAccordion
                  key={idx}
                  d={d}
                  onToggle={() => handleToggle(idx)}
                  active={toggle === idx}
                />
              ))}
            </StoryList>
          </StoryBox>
        </MainStory>
      </StoryContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const StoryContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  min-height: 100vh;
`;

const MainStory = styled.section`
  padding: 100px 64px;
  margin: 0 auto;
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
`;
