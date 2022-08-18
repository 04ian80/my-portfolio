import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import { SVG } from '../icon/SVG';

export function Skill() {
  return (
    <SkillIconContainer>
      <RowSkillIcon>
        <SkillIcon>
          <SVG name='HTML5' color='#E34F26' size='60px'></SVG>
          <span>HTML</span>
          <SkillDescContainer>
            <SkillDescList>
              <li>웹 접근성 향상</li>
              <li></li>
              <li></li>
              <li></li>
            </SkillDescList>
          </SkillDescContainer>
        </SkillIcon>

        <SkillIcon>
          <SVG name='CSS3' color='#1572B6' size='60px'></SVG>
          <span>CSS</span>
          <SkillDescContainer>
            <SkillDescList>
              <li>웹 접근성 향상</li>
              <li></li>
              <li></li>
              <li></li>
            </SkillDescList>
          </SkillDescContainer>
        </SkillIcon>

        <SkillIcon>
          <SVG name='JavaScript' color='#F7DF1E' size='60px'></SVG>
          <span>JavaScript</span>
        </SkillIcon>
        <SkillIcon>
          <SVG name='React' color='#61DAFB' size='60px'></SVG>
          <span>React</span>
        </SkillIcon>
      </RowSkillIcon>

      <RowSkillIcon>
        <SkillIcon>
          <SVG name='styledComponents' color='#DB7093' size='60px'></SVG>
          <span>styled-components</span>
        </SkillIcon>

        <SkillIcon>
          <SVG name='Sass' color='#CC6699' size='60px'></SVG>
          <span>Sass</span>
          <SkillDescContainer>
            <SkillDescList>
              <li>웹 접근성 향상</li>
              <li></li>
              <li></li>
              <li></li>
            </SkillDescList>
          </SkillDescContainer>
        </SkillIcon>
      </RowSkillIcon>
    </SkillIconContainer>
  );
}

const SkillIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 1rem;
`;

const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

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

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const SkillDescContainer = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 13rem;
  height: 13rem;
`;

const SkillDescList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
