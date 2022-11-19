import React, { Fragment } from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { Link45deg } from 'react-bootstrap-icons';
import Media from 'react-media';
import { viewsize } from '../style/Variables';
import { Velog } from './svg/Velog';
import { Github } from './svg/Github';

export function EachProject({ d }) {
  const { skill, name, img, imgSize, category, type, description, link, main } =
    d;

  return (
    <Container>
      <Media
        queries={{
          medium: '(min-width: 600px)',
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.medium && (
              <ImgContainer>
                <Img
                  src={img}
                  alt='프로젝트 이미지'
                  width={imgSize.width}
                  height={imgSize.height}
                />
              </ImgContainer>
            )}
          </Fragment>
        )}
      </Media>

      <DescContainer>
        <Category>
          <span>{category}</span>
        </Category>
        <Name>
          <Title>
            <span>{name}</span>
            <span>{type}</span>
          </Title>
          <LinkContainer>
            {link.velog !== null && (
              <Link
                href={link.velog}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='나의 벨로그'
              >
                <Velog size='24' animate={true} color={palette.velogColor} />
                <span>velog</span>
              </Link>
            )}
            <Link
              href={link.github}
              rel='noopener noreferrer'
              target='_blank'
              aria-label='나의 깃허브'
            >
              <Github size='24' animate={true} color={palette.githubColor} />
              <span>GitHub</span>
            </Link>
            {link.deploy !== null && (
              <Link
                href={link.deploy}
                rel='noopener noreferrer'
                target='_blank'
                aria-label='프로젝트 보기'
              >
                <Link45deg width='20px' height='20px' />
                <span>Link</span>
              </Link>
            )}
          </LinkContainer>
        </Name>
        <Description>
          <span>{description}</span>
        </Description>

        <Main>
          <ul style={{ fontSize: '12px' }}>{main}</ul>
        </Main>

        <Skill>
          <strong>사용스택 및 툴: </strong>
          <span>{skill}</span>
        </Skill>
      </DescContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  border: 2px solid ${palette.lightGray};
  flex-shrink: 0;
  overflow: hidden;
  margin-left: 5%;
`;

const Img = styled.img`
  box-sizing: border-box;
  object-fit: cover;
`;

const DescContainer = styled.div`
  margin: 10px 50px 0;

  & > * {
    margin-bottom: 10px;
  }
`;

const Category = styled.div`
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

const Name = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  color: ${palette.fontColor};

  & > * {
    flex-shrink: 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    & > :nth-child(2) {
      padding-left: 0;
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  & > :nth-child(2) {
    font-size: 15px;
    font-weight: 400;
    color: ${palette.subFontColor};
    padding-left: 5px;
  }
`;

const Description = styled.div`
  color: ${palette.subFontColor}90;
`;

const LinkContainer = styled.div`
  display: flex;
  margin-left: 20px;

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);

  &:not(:first-child) {
    margin-left: 5px;
  }

  span {
    border-radius: ${palette.defaultRadius};
    background-color: ${palette.bgColor};
    padding: 0px 3px 2px;
    font-size: 15px;
  }
`;

const Main = styled.div`
  & > * {
    padding: 0 22px;
  }
  & > * > * {
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
    @media ${viewsize.xSmall} {
      font-size: 14px;
    }
  }
`;

const Skill = styled.div``;
