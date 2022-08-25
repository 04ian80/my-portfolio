import React from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import musicApp from './image/musicapp.png';
import comingsoon from './image/comingsoon.png';
import dday from './image/dday.png';

export function Project() {
  return (
    <ProjectContainer id='project'>
      <ProjectHeader>
        <CategoryTitle>
          <span>프로젝트</span>
        </CategoryTitle>

        <ProjectCategoryAll>
          <span>전체보기</span>
          <span>사이드 프로젝트</span>
          <span>미니 프로젝트</span>
        </ProjectCategoryAll>
      </ProjectHeader>

      <EachProjectContainer>
        <EachProject>
          <ProjectImgBox>
            <ProjectImg
              src={dday}
              alt='D-day 계산 앱'
              width='260'
              height='300'
            />
          </ProjectImgBox>

          <ProjectDesc>
            <ProjectCategory>
              <span>미니 프로젝트</span>
            </ProjectCategory>
            <ProjectName>
              <span>D-day 계산 앱</span>
            </ProjectName>
            <Projectintro>
              <span>특별한 날의 D-day를 계산하고, 등록하는 앱</span>
            </Projectintro>
          </ProjectDesc>
        </EachProject>

        <EachProject>
          <ProjectImgBox>
            <ProjectImg
              src={musicApp}
              alt='음악앱 ui 구현 미니 프로젝트'
              width='240'
              height='370'
            />
          </ProjectImgBox>

          <ProjectDesc>
            <ProjectCategory>
              <span>미니 프로젝트</span>
            </ProjectCategory>
            <ProjectName>
              <span>
                음악 스트리밍 앱<span>&#40;UI only&#41;</span>
              </span>
            </ProjectName>
            <Projectintro>
              <span>SPA로 구현해본 음악 스트리밍 앱</span>
            </Projectintro>
          </ProjectDesc>
        </EachProject>

        <EachProject>
          <ProjectImgBox>
            <ProjectImg
              src={comingsoon}
              alt='사이드 프로젝트 준비중'
              width='240'
              height='370'
            />
          </ProjectImgBox>

          <ProjectDesc>
            <ProjectCategory>
              <span>사이드 프로젝트</span>
            </ProjectCategory>
            <ProjectName>
              <span>준비중...</span>
            </ProjectName>
            <Projectintro>
              <span>아이디어가 샘솟는 중...</span>
            </Projectintro>
          </ProjectDesc>
        </EachProject>
        <EachProject></EachProject>
      </EachProjectContainer>
      {/* </div> */}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
  min-height: 100vh;
  flex-wrap: wrap;
  padding: 4rem 0;
`;

const ProjectHeader = styled.div`
  display: flex;
  padding: 4rem;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const CategoryTitle = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid ${palette.pointColor};
  font-size: 2rem;
  font-weight: 500;
  color: ${palette.subFontColor};
  flex-shrink: 0;
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
  }

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const EachProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const EachProject = styled.div`
  width: 250px;
  height: 370px;
  margin: 2rem;
  border: 2px solid ${palette.brownColor};
  border-radius: ${palette.defaultRadius};
  box-shadow: ${palette.defaultShadow};
  flex-shrink: 0;
  flex-wrap: wrap;
  overflow: hidden;
`;

const ProjectImgBox = styled.div`
  display: flex;
  justify-content: center;
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
  border-top: 2px solid ${palette.brownColor};
  background-color: #fff;
  font-size: 1.5rem;
  padding: 3px 15px;

  & > * {
    margin-bottom: 5px;
  }
`;

const ProjectCategory = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 5px 8px;
  color: rgba(0, 0, 0, 0.8);
  background-color: ${palette.lightGray};
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  word-break: keep-all;
  font-size: 1.2rem;
  font-weight: 500;

  span > span {
    color: ${palette.subFontColor};
    font-size: 12px;
    font-weight: 400;
  }
`;

const Projectintro = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8rem;
  color: ${palette.subFontColor};
`;
