import musicApp from '../components/image/musicapp.png';
import comingsoon from '../components/image/comingsoon.png';
// import dday from '../components/image/dday.png';

export const projectData = [
  {
    id: 1,
    category: '사이드 프로젝트',
    name: '소상공간',
    type: '준비중',
    description:
      '소상공인 가게에 사람들이 더 많이 갈 수 있도록 소상공인 가게를 추천, 음악 플레이리스트처럼 맛집을 공유하는 앱 웹.',
    img: comingsoon,
    imgSize: {
      width: 240,
      height: 370,
    },
    link: {
      velog: null,
      github: null,
    },
  },
  {
    id: 2,
    category: '미니 프로젝트',
    name: '음악 스트리밍 앱',
    ready: '완료',
    type: <span>&#40;UI only&#41;</span>,
    description: 'SPA로 구현해본 음악 스트리밍 앱',
    img: musicApp,
    imgSize: {
      width: 240,
      height: 370,
    },
    link: {
      velog: 'https://velog.io/@a_in/React-router-Music-App',
      github: 'https://github.com/04ian80/react-study-projects',
      deploy: 'https://04ian80.github.io/music-app-deploy/',
    },
  },

  // {
  //   id: 3,
  //   category: '미니 프로젝트',
  //   name: 'D-day 계산 앱',
  //   description: '특별한 날의 D-day를 계산하고, 등록하는 앱',
  //   img: dday,
  //   imgSize: {
  //     width: 260,
  //     height: 300,
  //   },
  //   link: {
  //     velog: 'https://velog.io/@a_in/React-D-day-Calculator',
  //     github: 'https://github.com/04ian80/d-day-app',
  //     deploy: 'https://04ian80.github.io/d-day',
  //   },
  // },
];
