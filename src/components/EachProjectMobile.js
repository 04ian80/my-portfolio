import React from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { motion } from 'framer-motion';
import { SVG } from '../icon/SVG';
import { Link45deg } from 'react-bootstrap-icons';
import { viewsize } from '../style/Variables';

const COMINGSOON = '준비중...';

export function EachProjectMobile({ d }) {
  const { name, img, imgSize, category, type, description, link } = d;

  return (
    <>
      <EachProjectContainer style={{ opacity: name === COMINGSOON && 0.6 }}>
        <ProjectImgBox>
          <ProjectImg
            src={img}
            alt='D-day 계산 앱'
            width={imgSize.width}
            height={imgSize.height}
          />
        </ProjectImgBox>
        <ProjectDesc>
          <ProjectCategory>
            <span>{category}</span>
          </ProjectCategory>
          <ProjectName>
            <span>
              {name}
              <span>{type}</span>
            </span>
          </ProjectName>
          <Projectintro>
            <span>{description}</span>
          </Projectintro>
        </ProjectDesc>
        {name !== COMINGSOON && (
          <div>
            <EachProjectLinkContainer>
              <EachProjectLink
                href={link.velog}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='나의 벨로그'
              >
                <SVG animate={false} name='velog' color={palette.velogColor} />
                <span>velog</span>
              </EachProjectLink>
              <EachProjectLink
                href={link.github}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='나의 벨로그'
              >
                <SVG
                  animate={false}
                  name='github'
                  color={palette.githubColor}
                />
                <span>GitHub</span>
              </EachProjectLink>
              <EachProjectLink
                href={link.deploy}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='프로젝트 보기'
              >
                <Link45deg width='34px' height='34px' />
                <span>Link</span>
              </EachProjectLink>
            </EachProjectLinkContainer>
          </div>
        )}
      </EachProjectContainer>
    </>
  );
}

const EachProjectContainer = styled(motion.div)`
  position: relative;
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

const EachProjectLinkContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 108px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-decoration: none;
  background-color: #fff;

  & > *:not(:last-child) {
    margin-right: 40px;
  }
`;

const EachProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;

  span {
    border-radius: ${palette.defaultRadius};
    background-color: ${palette.bgColor};
    margin-top: 3px;
    padding: 0px 3px 2px;
    font-size: 0.9rem;
  }

  :hover {
    color: lightblue;
  }
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
