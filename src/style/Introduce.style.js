import styled from 'styled-components';
import * as palette from './Variables';
import { viewsize } from './Variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const MainHeader = styled.div`
  @import 'https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400';

  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  align-content: flex-start;
  /* min-height: 100vh; */
  flex-wrap: wrap;
  font-weight: 300;
  flex-shrink: 0;
  margin: ${palette.defaultHeader} 10% 10px;
  border-radius: 10px;
  padding: 10px;
`;

export const ProfileImg = styled.img`
  border-radius: 20px;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ImgBox = styled.div`
  position: relative;
  width: 160px;
  height: 180px;
  margin: 10px 100px;
`;

export const Introduce = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainTitle = styled.div`
  align-items: center;
  min-width: 5rem;
  display: block;
  color: ${palette.fontColor};
  font-size: 3rem;

  @media ${viewsize.xSmall} {
    font-size: 2rem;
  }

  @media ${viewsize.large} {
    /* font-size: 5rem; */
  }

  & > span:nth-child(4) {
    opacity: 0.7;
    background: linear-gradient(to right, #5ac8df, #dd7990);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    cursor: default;

    &:hover {
      opacity: 1;
      transition: all 0.3s ease-in-out;
      -webkit-mask-image: linear-gradient(
        -75deg,
        rgba(0, 0, 0, 0.6) 30%,
        #000 50%,
        rgba(0, 0, 0, 0.6) 70%
      );

      -webkit-mask-size: 200%;
      animation: shine 2s infinite;
    }

    @keyframes shine {
      from {
        -webkit-mask-position: 150%;
      }

      to {
        -webkit-mask-position: -50%;
      }
    }
  }
`;

export const TypeItBox = styled.div`
  padding: 0 10px;
  border-bottom: 2px solid ${palette.pointColor};
  white-space: normal;
  height: 40px;
  font-weight: 400;

  @media ${viewsize.xSmall} {
    font-size: 1rem;
    height: 20px;
    width: 19rem;
  }

  @media ${viewsize.small} {
    font-size: 1.4rem;
    width: 25rem;
  }
  @media ${viewsize.medium} {
    font-size: 1.8rem;
    width: 32rem;
  }
  @media ${viewsize.large} {
    font-size: 2rem;
    width: 36rem;
  }
`;

export const screenReadersOnly = styled.div`
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  border: 0;
`;

export const AboutMe = styled.div`
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  padding: 10px;
`;

export const AboutMeList = styled.ul`
  font-size: 20px;
  font-weight: 600;
  list-style: none;
  /* padding: 5%; */

  @media ${viewsize.xSmall} {
    font-size: 18px;
  }

  & > * {
    border-left: 3px solid ${palette.greenColor};
    margin: 0 10px 15px;
    padding-left: 8px;
  }
`;
