import React, { useReducer } from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import musicApp from './image/musicapp.png';
import comingsoon from './image/comingsoon.png';
import dday from './image/dday.png';
import { projectData as data } from '../data/ProjectData';

export function Project() {
  // const [state, dispatch] = useReducer(reducer, initArg);
  console.log(data);
  data.map((d, i) => console.log(d.name));

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
        {data.map((d) => (
          <EachProject key={d.id}>
            <ProjectImgBox>
              <ProjectImg
                src={d.img}
                alt='D-day 계산 앱'
                width={d.imgSize.width}
                height={d.imgSize.height}
              />
            </ProjectImgBox>

            <ProjectDesc>
              <ProjectCategory>
                <span>{d.category}</span>
              </ProjectCategory>
              <ProjectName>
                <span>
                  {d.name}
                  <span>{d.type}</span>
                </span>
              </ProjectName>
              <Projectintro>
                <span>{d.description}</span>
              </Projectintro>
            </ProjectDesc>
          </EachProject>
        ))}
      </EachProjectContainer>
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
