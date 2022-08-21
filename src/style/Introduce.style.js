import styled from 'styled-components';
import * as palette from './Variables';
import { device } from './Variables';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const MainHeader = styled.div`
  @import 'https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400';

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  flex-shrink: 0;
  flex-wrap: wrap;
  font-weight: 300;
`;

export const ProfileImg = styled.img`
  /* padding-top: 8rem; */
  width: 300px;
  height: 400px;
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
  /* padding: 10px; */
  border-radius: 20px;
  color: ${palette.subFontColor};
  background-color: ${palette.brownColor};
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  & > span {
    transform: translateY(-2px);
  }
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

  @media ${device.xSmall} {
    font-size: 1.8rem;
  }
  @media ${device.small} {
    font-size: 3rem;
  }
  @media ${device.medium} {
    font-size: 4rem;
  }
  @media ${device.large} {
    font-size: 5rem;
  }

  & > div:nth-child(2) {
    padding: 0.5rem 1rem;
    border-bottom: 2px solid ${palette.pointColor};
    /* background-color: #fff; */
    white-space: normal;
    height: auto;
    font-weight: 400;

    @media ${device.xSmall} {
      font-size: 1rem;
      width: 19rem;
    }

    @media ${device.small} {
      font-size: 1.4rem;
      width: 25rem;
    }
    @media ${device.medium} {
      font-size: 1.8rem;
      width: 32rem;
    }
    @media ${device.large} {
      font-size: 2rem;
      width: 33rem;
    }
  }

  & > span:nth-child(3) {
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
