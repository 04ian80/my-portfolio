import React from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { motion } from 'framer-motion';
import { SVG } from '../icon/SVG';

export function EachProject({ d }) {
  // const [hoverProject, setHoverProject] = useState(false);

  return (
    <EachProjectContainer
      style={{ opacity: d.name === '준비중...' && 0.6 }}
      whileHover={{ scale: d.name !== '준비중...' ? 1.1 : 1 }}
      onMouseEnter={() => {
        // setHoverProject(false);
      }}
    >
      <a
        href='https://velog.io/@a_in'
        rel='noopener noreferrer'
        target='_blank'
        aria-label='나의 벨로그'
      >
        <SVG name='velog' color='#20C997' />
      </a>
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
    </EachProjectContainer>
  );
}

const EachProjectContainer = styled(motion.div)`
  width: 250px;
  height: 370px;
  margin: 30px;
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
