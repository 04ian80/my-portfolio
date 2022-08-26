import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { skillData as data } from '../data/SkillData';
import { SVG } from '../icon/SVG';
import * as palette from '../style/Variables';

export function Skills() {
  return (
    <>
      <SkillContainer id='skill'>
        <SkillHeader>
          <Title>
            <span>기술스택</span>
          </Title>
        </SkillHeader>

        <SkillCard>
          <SkillList>
            {data.map((d) => (
              <HashLink to={'/#skill/' + d.skillName}>
                <SVG name={d.svg.name} color={d.svg.color} size='35px'></SVG>
              </HashLink>
            ))}
          </SkillList>

          <SkillDesc>
            {data.map((d) => (
              <EachCard>
                <SVG name={d.svg.name} color={d.svg.color} size='35px'></SVG>
              </EachCard>
            ))}
          </SkillDesc>

          <ControlBtn></ControlBtn>
        </SkillCard>
      </SkillContainer>
    </>
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
  padding: 8rem 4rem 2rem;
`;

const Title = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid ${palette.pointColor};
  font-size: 2rem;
  font-weight: 500;
  color: ${palette.subFontColor};
  flex-shrink: 0;
`;

const SkillCard = styled.div`
  display: flex;
  margin: 0 auto;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin-bottom: 15px;
  }
`;

const SkillDesc = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
  margin-left: 15px;
  background-color: red;
  overflow: hidden;
`;

const EachCard = styled.div`
  width: 300px;
`;

const ControlBtn = styled.div``;
