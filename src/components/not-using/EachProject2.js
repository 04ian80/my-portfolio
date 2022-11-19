import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import * as palette from '../../style/Variables';
import { motion } from 'framer-motion';
import { SVG } from '../../icon/SVG';
import { Link45deg } from 'react-bootstrap-icons';
import Media from 'react-media';
import { EachProjectMobile } from '../EachProjectMobile';

export function EachProject({ d }) {
  const [hoverProject, setHoverProject] = useState(false);
  const { name, img, imgSize, category, type, description, link } = d;
  const COMINGSOON = type === '준비중';

  return (
    <>
      <div>
        <Media
          queries={{
            small: '(max-width: 599px)',
            medium: '(min-width: 600px)',
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && <EachProjectMobile d={d} />}
              {matches.medium && (
                <EachProjectContainer
                  style={{ opacity: COMINGSOON && 0.6 }}
                  whileHover={{ scale: !COMINGSOON ? 1.1 : 1 }}
                  onMouseEnter={() => {
                    !COMINGSOON && setHoverProject(true);
                  }}
                  onMouseLeave={() => {
                    !COMINGSOON && setHoverProject(false);
                  }}
                  onClick={() => {
                    !COMINGSOON && setHoverProject(true);
                  }}
                >
                  {hoverProject && !COMINGSOON ? (
                    <Back>
                      <EachProjectLinkContainer>
                        <EachProjectLink
                          href={link.velog}
                          rel='noopener noreferrer'
                          target='_blank'
                          aria-label='나의 벨로그'
                        >
                          <SVG
                            animate={false}
                            name='velog'
                            color={palette.velogColor}
                          />
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
                            color={palette.githubColorColor}
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
                    </Back>
                  ) : null}
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
                </EachProjectContainer>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    </>
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

const Back = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: #ffffff90;
`;

const EachProjectLinkContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 150px;
  left: 20px;
  margin: 0 auto;
  text-decoration: none;

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
  height: 65%;
`;

const ProjectImg = styled.img`
  box-sizing: border-box;
  object-fit: cover;
`;

const ProjectDesc = styled.div`
  position: relative;
  height: 35%;
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
    margin-left: 5px;
  }
`;

const Projectintro = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8rem;
  color: ${palette.subFontColor};
`;
