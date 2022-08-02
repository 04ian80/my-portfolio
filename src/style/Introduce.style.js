import styled from 'styled-components';

export const MainHeader = styled.div`
  @import 'https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400';
  display: flex;
  justify-content: space-between;
`;

export const ProfileImg = styled.img`
  padding: 1em 0 1em 7em;
`;

export const Introduce = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: flex-end;
  font-size: 14px;
  font-weight: 300;
`;

export const MainTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  min-width: 5em;

  padding: 1em;
  color: #1a1a1a;
  font-size: 3em;
  font-weight: 300;
  flex-shrink: 0;

  & > span:nth-child(2) {
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
`;
