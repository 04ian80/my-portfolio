import styled from 'styled-components';
import * as palette from './Variables';
import { device } from './Variables';

export const MainHeader = styled.div`
  @import 'https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400';

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 4em;
  flex-shrink: 0;
  flex-wrap: wrap;
  font-weight: 300;
`;

export const ProfileImg = styled.img`
  padding: 1em;
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
    width: 20rem;
    height: auto;

    @media ${device.small} {
      font-size: 1.3rem;
    }
    @media ${device.medium} {
      font-size: 1.8rem;
    }
    @media ${device.large} {
      font-size: 2rem;
    }
  }

  & > span:nth-child(3) {
    opacity: 0.7;
    background: linear-gradient(to right, #5ac8df, #dd7990);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    cursor: default;

    &: hover {
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
