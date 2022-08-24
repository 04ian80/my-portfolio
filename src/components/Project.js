import React from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import musicApp from './image/musicapp.png';

export function Project() {
  return (
    <ProjectContainer id='project'>
      {/* <div> */}
      <CategoryTitle>프로젝트</CategoryTitle>

      <EachProject>
        <ProjectImgBox>
          {/* <ProjectImg
            src={musicApp}
            alt='음악앱 ui 구현 미니 프로젝트'
            width='260'
            height='400'
          /> */}
        </ProjectImgBox>

        <ProjectDesc>
          <ProjectCategory>
            <span>미니 프로젝트</span>
          </ProjectCategory>
          <ProjectName>
            <span>D-day 계산 앱</span>
          </ProjectName>
        </ProjectDesc>
      </EachProject>

      <EachProject>
        <ProjectImgBox>
          <ProjectImg
            src={musicApp}
            alt='음악앱 ui 구현 미니 프로젝트'
            width='260'
            height='400'
          />
        </ProjectImgBox>

        <ProjectDesc>
          <ProjectCategory>
            <span>미니 프로젝트</span>
          </ProjectCategory>
          <ProjectName>
            <span>음악 앱&#40;ui&#41;</span>
          </ProjectName>
        </ProjectDesc>
      </EachProject>
      {/* </div> */}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  /* padding: 4rem; */
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

const EachProject = styled.div`
  width: 260px;
  height: 400px;
  margin: 2rem;
  border: 2px solid ${palette.brownColor};
  border-radius: ${palette.defaultRadius};
  box-shadow: ${palette.defaultShadow};
  flex-shrink: 0;
  flex-wrap: wrap;
  overflow: hidden;
`;

const ProjectImgBox = styled.div`
  /* background-color: ${palette.salmonColor}; */
  height: 70%;
`;

const ProjectImg = styled.img`
  box-sizing: border-box;
  object-fit: cover;
`;

const ProjectDesc = styled.div`
  position: relative;
  height: 30%;
  color: ${palette.fontColor};
  background-color: ${palette.salmonColor};
  font-size: 1.5rem;
`;

const ProjectCategory = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 3px 5px;
  margin: 8px 5px;
  color: ${palette.fontColor};
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
`;

const ProjectName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
