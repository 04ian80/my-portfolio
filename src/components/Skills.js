import React from 'react';
import styled from 'styled-components';
import { SVG } from '../icon/SVG';
import { motion } from 'framer-motion';
import { viewsize } from '../style/Variables';
import { skillData as data } from '../data/SkillData';
import { Title } from './Title';

export function Skills() {
  return (
    <SkillContainer id='skill' role='feed' aria-label='기술스택 페이지'>
      <SkillHeader>
        <Title title={'기술스택'}></Title>
      </SkillHeader>
      <SkillBox>
        {data.map((d) => (
          <SkillEach key={d.id} role='tab' aria-label={d.skillName}>
            <SkillIcon>
              <SVG
                animate={true}
                name={d.svg.name}
                color={d.svg.color}
                size='40px'
              ></SVG>
              <span>{d.skillName}</span>
            </SkillIcon>
            <SkillDescContainer animate={{ y: ['10px', '0px'] }} role='tab'>
              <SkillList>{d.description}</SkillList>
            </SkillDescContainer>
          </SkillEach>
        ))}
      </SkillBox>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #fafafa;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 100px 180px 32px;

  @media ${viewsize.xSmall} {
    padding: 100px 50px 32px;
  }
`;

const SkillBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 1fr 1fr 1fr; */
  gap: 16px;
  margin: 30px auto;
  padding-left: 140px;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; */
    gap: 16px;
  }

  @media ${viewsize.xSmall} {
    padding-left: 50px;
  }
`;

const SkillEach = styled(motion.article)`
  flex-direction: column;
  margin-right: 100px;
`;

const SkillIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1rem;

  span {
    margin-left: 6px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const SkillDescContainer = styled(motion.div)``;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;

  & > * {
    margin-bottom: 12px;
    margin-left: 20px;
    padding-left: 10px;
    border-left: 4px solid #eee;
    font-size: 1.1rem;
  }
`;
