import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import { SVG } from '../icon/SVG';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import * as palette from '../style/Variables';

export function Skills() {
  return (
    <SkillIconContainer id='skill'>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <RowSkillIcon>
          <SkillEach whileHover={{ scale: 1.1 }}>
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

          <SkillEach whileHover={{ scale: 1.1 }}>
            <SkillIcon>
              <SVG name='CSS3' color='#1572B6' size='60px'></SVG>
              <span>CSS</span>
            </SkillIcon>
            <SkillDescContainer>
              <SkillDescList>
                <li>Grid를 이용한 화면 레이아웃</li>
                <li></li>
                <li></li>
                <li>
                  <SassLink to='/#sass'>
                    <span>Sass</span>로 더욱 다이나믹한 스타일링
                  </SassLink>
                </li>
              </SkillDescList>
            </SkillDescContainer>
          </SkillEach>
        </RowSkillIcon>

        <RowSkillIcon>
          <SkillEach whileHover={{ scale: 1.1 }}>
            <SkillIcon>
              <SVG name='JavaScript' color='#F7DF1E' size='60px'></SVG>
              <span>JavaScript</span>
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

          <SkillEach whileHover={{ scale: 1.1 }}>
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
        <SkillEach whileHover={{ scale: 1.1 }}>
          <SkillIcon>
            <SVG name='styledComponents' color='#DB7093' size='60px'></SVG>
            <span>styled-components</span>
          </SkillIcon>
          <SkillDescContainer>
            <SkillDescList>
              <li>Scss 문법 지향</li>
              <li></li>
              <li></li>
              <li></li>
            </SkillDescList>
          </SkillDescContainer>
        </SkillEach>

        <SkillEach whileHover={{ scale: 1.1 }}>
          <SkillIcon>
            <SVG name='Sass' color='#CC6699' size='60px'></SVG>
            <span id='sass'>Sass</span>
          </SkillIcon>
          <SkillDescContainer>
            <SkillDescList>
              <li>Scss 문법 지향</li>
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
  color: ${palette.fontColor};
  box-shadow: ${palette.defaultShadow};
  border: 2px solid ${palette.pointColor};
  border-radius: 10px;
  width: 230px;
  height: 10rem; ;
`;

const SkillDescList = styled.ul``;

const SassLink = styled(HashLink)`
  color: inherit;
  text-decoration: none;

  & > span {
    text-decoration: underline;
    color: #cc6699;
  }
`;
