import React from 'react';
import { SVG } from '../icon/SVG';
import styled from 'styled-components';

export function Skill() {
  return (
    <SkillIconContainer>
      <SkillIcon>
        <SVG name='HTML5' color='#E34F26' size='60px'></SVG>
      </SkillIcon>
      <SkillIcon>
        <SVG name='CSS3' color='#1572B6' size='60px'></SVG>
      </SkillIcon>
      <SkillIcon>
        <SVG name='JavaScript' color='#F7DF1E' size='60px'></SVG>
      </SkillIcon>
      <SkillIcon>
        <SVG
          name='styledComponents'
          color='#DB7093'
          width='60px'
          height='60px'
        ></SVG>
      </SkillIcon>
      <SkillIcon>
        <SVG name='React' color='#61DAFB' size='60px'></SVG>
      </SkillIcon>
    </SkillIconContainer>
  );
}

const SkillIconContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50rem;
  align-items: center;
`;

const SkillIcon = styled.div`
  margin-right: 2rem;
`;
