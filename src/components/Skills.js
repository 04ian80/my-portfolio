import React from 'react';
import styled from 'styled-components';
import { SVG } from '../icon/SVG';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import * as palette from '../style/Variables';
import { skillData as data } from '../data/SkillData';

export function Skills() {
  return (
    <SkillIconContainer id='skill'>
      <CategoryTitle>기술스택</CategoryTitle>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <RowSkillIcon>
          {data.map(
            (d) =>
              d.id < 3 && (
                <SkillEach key={d.id} whileHover={{ scale: 1.1 }}>
                  <SkillIcon>
                    <SVG
                      name={d.svg.name}
                      color={d.svg.color}
                      size='60px'
                    ></SVG>
                    <span>{d.skillName}</span>
                  </SkillIcon>
                  <SkillDescContainer animate={{ y: ['10px', '0px'] }}>
                    {d.description}
                  </SkillDescContainer>
                </SkillEach>
              )
          )}
        </RowSkillIcon>

        <RowSkillIcon>
          {data.map(
            (d) =>
              d.id >= 3 &&
              d.id < 5 && (
                <SkillEach key={d.id} whileHover={{ scale: 1.1 }}>
                  <SkillIcon>
                    <SVG
                      name={d.svg.name}
                      color={d.svg.color}
                      size='60px'
                    ></SVG>
                    <span>{d.skillName}</span>
                  </SkillIcon>
                  <SkillDescContainer animate={{ y: ['10px', '0px'] }}>
                    {d.description}
                  </SkillDescContainer>
                </SkillEach>
              )
          )}
        </RowSkillIcon>
      </div>

      <RowSkillIcon>
        {data.map(
          (d) =>
            d.id >= 5 && (
              <SkillEach key={d.id} whileHover={{ scale: 1.1 }}>
                <SkillIcon>
                  <SVG name={d.svg.name} color={d.svg.color} size='60px'></SVG>
                  <span>{d.skillName}</span>
                </SkillIcon>
                <SkillDescContainer animate={{ y: ['10px', '0px'] }}>
                  {d.description}
                </SkillDescContainer>
              </SkillEach>
            )
        )}
      </RowSkillIcon>
    </SkillIconContainer>
  );
}

const SkillIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0;
  min-height: 100vh;
  background-color: #fafafa;
`;

const CategoryTitle = styled.span`
  position: absolute;
  top: 7rem;
  left: 4rem;
  padding: 0 20px;
  border-bottom: 1px solid ${palette.pointColor};
  font-size: 2rem;
  font-weight: 500;
  color: ${palette.subFontColor};
`;

const SkillEach = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding-bottom: 1rem;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
    padding: 3px 10px;
    border-radius: 20px;
    background-color: ${palette.lightGray};
    font-weight: 500;
  }
`;

const RowSkillIcon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const SkillDescContainer = styled(motion.div)`
  padding-right: 1rem;
  width: 230px;
  height: 10rem;
  border: 2px solid ${palette.pointColor};
  border-radius: ${palette.defaultRadius};
  color: ${palette.fontColor};
  background-color: #fff;
  box-shadow: ${palette.defaultShadow};
`;
