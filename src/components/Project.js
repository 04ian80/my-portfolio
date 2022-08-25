import React, { useReducer } from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { projectData as data } from '../data/ProjectData';
import { categoryReducer, initCategory } from '../store/ProjectReducer';
import { motion } from 'framer-motion';
import { device } from '../style/Variables';

export function Project() {
  const [state, dispatch] = useReducer(categoryReducer, initCategory);

  return (
    <ProjectContainer id='project'>
      <ProjectHeader>
        <CategoryTitle>
          <span>프로젝트</span>
        </CategoryTitle>

        <ProjectCategoryAll>
          <span
            style={{
              backgroundColor: state.btnColor.all,
              color: state.fontColor.all,
              fontWeight: state.fontBold.all,
            }}
            onClick={() => {
              dispatch({ type: 'ALL' });
            }}
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
          >
            미니 프로젝트
          </span>
        </ProjectCategoryAll>
      </ProjectHeader>

      <EachProjectContainer>
        {data.map(
          (d) =>
            state.category.includes(d.category) && (
              <EachProject
                key={d.id}
                style={{ opacity: d.name === '준비중...' && 0.6 }}
                whileHover={{ scale: d.name !== '준비중...' ? 1.1 : 1 }}
                animate={{ y: ['20px', '10px'] }}
              >
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
            )
        )}
      </EachProjectContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  flex-wrap: wrap;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8rem 4rem 0;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin: 0 20px 20px 0;
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
  height: 100vh;
`;

const EachProject = styled(motion.div)`
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
  letter-spacing: -0.3px;
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
