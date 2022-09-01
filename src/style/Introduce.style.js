import styled from 'styled-components';
import * as palette from './Variables';
import { viewsize } from './Variables';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const MainHeader = styled.div`
  @import 'https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400';

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  font-weight: 300;
  flex-shrink: 0;
`;

export const ProfileImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ImgBox = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin-top: 7rem;
`;

export const SeeMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  transform: translateY(1px);
`;

export const ToMystory = styled(motion(Link))`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  color: ${palette.subFontColor};
  background-color: white;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  & > span {
    transform: translateY(-2px);
  }
`;

export const BackOfToMystory = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${palette.bgColor};
`;

export const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainTitle = styled.div`
  align-items: center;
  min-width: 5rem;
  display: block;
  padding: 1rem;
  color: ${palette.fontColor};
  font-size: 3rem;

  @media ${viewsize.xSmall} {
    font-size: 2rem;
  }

  @media ${viewsize.large} {
    font-size: 5rem;
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
  padding: 0.5rem 1rem;
  border-bottom: 2px solid ${palette.pointColor};
  white-space: normal;
  height: 40px;
  font-weight: 400;

  @media ${viewsize.xSmall} {
    font-size: 1rem;
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
