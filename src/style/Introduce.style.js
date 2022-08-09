import styled from 'styled-components';
import * as palette from './Variables';

export const MainHeader = styled.div`
  @import 'https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400';

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
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
  // align-items: flex-end;
  font-size: 14px;
`;

export const MainTitle = styled.div`
  // display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 5em;
  display: block;

  padding: 1em;
  color: ${palette.fontColor};
  font-size: 3em;

  & > div:nth-child(2) {
    width: 300px;
    font-size: 16px;
  }

  & > div:nth-child(3) {
    & > span:first-child {
      opacity: 0.7;
      background: linear-gradient(to right, #5ac8df, #dd7990);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 600;

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
  }
`;
