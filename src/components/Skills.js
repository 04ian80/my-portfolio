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
              <SVG name={d.svg.name} color={d.svg.color} size='35px'></SVG>
            ))}
          </SkillList>

          <SkillWrapper>
            <SkillDesc>
              {data.map((d) => (
                <EachCard key={d.id}>
                  <SVG name={d.svg.name} color={d.svg.color} size='35px'></SVG>
                  <span>{d.skillName}</span>
                  <div>{d.description}</div>
                </EachCard>
              ))}
            </SkillDesc>
          </SkillWrapper>

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

const SkillWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
  overflow: hidden;
  margin-left: 15px;
  box-sizing: border-boxs;
  background-color: pink;
`;

const SkillDesc = styled.div`
  display: flex;
`;

const EachCard = styled.div`
  width: 300px;
  height: 400px;
  padding: 10px;
`;

const ControlBtn = styled.div``;
