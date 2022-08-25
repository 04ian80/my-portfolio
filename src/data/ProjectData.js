import musicApp from '../components/image/musicapp.png';
import comingsoon from '../components/image/comingsoon.png';
import dday from '../components/image/dday.png';

export const projectData = [
  {
    id: 1,
    category: '미니 프로젝트',
    name: 'D-day 계산 앱',
    description: '특별한 날의 D-day를 계산하고, 등록하는 앱',
    img: dday,
    imgSize: {
      width: 260,
      height: 300,
    },
  },
  {
    id: 2,
    category: '미니 프로젝트',
    name: '음악 스트리밍 앱',
    type: <span>&#40;UI only&#41;</span>,
    description: 'SPA로 구현해본 음악 스트리밍 앱',
    img: musicApp,
    imgSize: {
      width: 240,
      height: 370,
    },
  },
  {
    id: 3,
    category: '사이드 프로젝트',
    name: '준비중...',
    description: '아이디어가 샘솟는 중...',
    img: comingsoon,
    imgSize: {
      width: 240,
      height: 370,
    },
  },
];
