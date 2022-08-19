import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import { SVG } from '../icon/SVG';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <SkillIconContainer id='skill'>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <RowSkillIcon>
          <SkillEach>
            <SkillIcon>
              <SVG name='HTML5' color='#E34F26' size='60px'></SVG>
              <span>HTML</span>
            </SkillIcon>
            <SkillDescContainer>
              <SkillDescList>
                <li>웹 접근성을 고려한 WAI-ARIA 사용</li>
                <li></li>
                <li></li>
                <li></li>
              </SkillDescList>
            </SkillDescContainer>
          </SkillEach>

          <SkillEach>
            <SkillIcon>
              <SVG name='CSS3' color='#1572B6' size='60px'></SVG>
              <span>CSS</span>
            </SkillIcon>
            <SkillDescContainer>
              <SkillDescList>
                <li>웹 접근성 향상</li>
                <li></li>
                <li></li>
                <li></li>
              </SkillDescList>
            </SkillDescContainer>
          </SkillEach>
        </RowSkillIcon>

        <RowSkillIcon>
          <SkillEach>
            <SkillIcon>
              <SVG name='JavaScript' color='#F7DF1E' size='60px'></SVG>
              <span>JavaScript</span>
            </SkillIcon>
            <SkillDescContainer animate={{}}>
              <SkillDescList>
                <li>웹 접근성 향상</li>
                <li></li>
                <li></li>
                <li></li>
              </SkillDescList>
            </SkillDescContainer>
          </SkillEach>

          <SkillEach>
            <SkillIcon>
              <SVG name='React' color='#61DAFB' size='60px'></SVG>
              <span>React</span>
            </SkillIcon>
            <SkillDescContainer>
              <SkillDescList>
                <li>웹 접근성 향상</li>
                <li></li>
                <li></li>
                <li></li>
              </SkillDescList>
            </SkillDescContainer>
          </SkillEach>
        </RowSkillIcon>
      </div>

      <RowSkillIcon>
        <SkillEach>
          <SkillIcon>
            <SVG name='styledComponents' color='#DB7093' size='60px'></SVG>
            <span>styled-components</span>
          </SkillIcon>
        </SkillEach>

        <SkillEach>
          <SkillIcon>
            <SVG name='Sass' color='#CC6699' size='60px'></SVG>
            <span>Sass</span>
          </SkillIcon>
          <SkillDescContainer>
            <SkillDescList>
              <li>웹 접근성 향상</li>
              <li></li>
              <li></li>
              <li></li>
            </SkillDescList>
          </SkillDescContainer>
        </SkillEach>
      </RowSkillIcon>
    </SkillIconContainer>
  );
}

const SkillIconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
`;

const SkillEach = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
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
    background-color: rgba(0, 0, 0, 0.1);
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
  padding: 1rem;
  /* margin-top: 1rem; */
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 13rem;
  height: 10rem; ;
`;

const SkillDescList = styled.ul``;
