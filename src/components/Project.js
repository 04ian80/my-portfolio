import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { projectData as data } from '../data/ProjectData';
import { categoryReducer, initCategory } from '../store/ProjectReducer';
import { motion } from 'framer-motion';
import { Title } from './Title';
import { SVG } from '../icon/SVG';
import { EachProject } from './EachProject';

export function Project() {
  const [state, dispatch] = useReducer(categoryReducer, initCategory);

  return (
    <ProjectContainer id='project' aria-label='프로젝트 페이지'>
      <ProjectHeader>
        <Title title={'프로젝트'}></Title>

        <ProjectCategoryAll role='tablist' aria-label='프로젝트 카테고리'>
          <span
            style={{
              backgroundColor: state.btnColor.all,
              color: state.fontColor.all,
              fontWeight: state.fontBold.all,
            }}
            onClick={() => {
              dispatch({ type: 'ALL' });
            }}
            role='tab'
            tabIndex='0'
          >
            전체보기
          </span>
          <span
            style={{
              backgroundColor: state.btnColor.side,
              color: state.fontColor.side,
              fontWeight: state.fontBold.side,
            }}
            onClick={() => {
              dispatch({ type: 'SIDE' });
            }}
            role='tab'
            tabIndex='1'
          >
            사이드 프로젝트
          </span>
          <span
            style={{
              backgroundColor: state.btnColor.mini,
              color: state.fontColor.mini,
              fontWeight: state.fontBold.mini,
            }}
            onClick={() => {
              dispatch({ type: 'MINI' });
            }}
            role='tab'
            tabIndex='2'
          >
            미니 프로젝트
          </span>
        </ProjectCategoryAll>
      </ProjectHeader>

      <EachProjectContainer>
        {data.map(
          (d) =>
            state.category.includes(d.category) && (
              <EachProject key={d.id} d={d} />
            )
        )}
      </EachProjectContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  flex-wrap: wrap;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 100px 180px 32px;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin: 0 20px 20px 0;
  }
`;
const ProjectCategoryAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    padding: 10px;
    background-color: ${palette.deeperWhite};
    border-radius: 20px;
    flex-shrink: 0;
    color: ${palette.fontColor};
    letter-spacing: -0.3px;
    cursor: pointer;
  }

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const EachProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
