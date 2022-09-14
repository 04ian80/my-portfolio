import musicApp from '../components/image/musicapp.png';
import comingsoon from '../components/image/comingsoon.png';
import sosang from '../components/image/sosang.png';
// import dday from '../components/image/dday.png';

export const projectData = [
  {
    id: 1,
    category: '사이드 프로젝트',
    name: '소상공간',
    type: '준비중',
    skill: 'Next.js | TypeScript | Tailwind CSS | Notion | Git',
    description:
      '사람들이 소상공인 가게를 더 많이 이용할 수 있도록 사용자들끼리 추천하고, 음악 플레이리스트처럼 맛집을 공유하는 앱 웹.',
    main: '',
    img: sosang,
    imgSize: {
      width: 240,
      height: 370,
    },
    link: {
      velog: null,
      github: 'https://github.com/04ian80/sosang',
      deploy: null,
    },
  },
  {
    id: 2,
    category: '미니 프로젝트',
    name: '음악 스트리밍 앱',
    ready: '완료',
    type: <span>&#40;UI only&#41;</span>,
    skill: 'React | JavaScript | styled-components',
    description: 'SPA로 구현해본 음악 스트리밍 앱',
    main: (
      <>
        <li>
          <strong>Context API</strong>를 이용한 헤더바를 구현하여{' '}
          <strong>재사용성</strong>을 높임
        </li>
        <li>
          <strong>useReducer</strong>로 곡, 앨범별 카테고리를 만들어{' '}
          <strong>상태관리 개선</strong>
        </li>
        <li>
          useParams와 useLocation으로 동적라우팅하여 상세페이지들을 하나의
          컴포넌트로 병합함으로써 <strong>유지보수성</strong>을 높임
        </li>
        <li>
          JavaScript로 곡과 아티스트를 <strong>검색하는 기능</strong> 구현
        </li>
        <li>
          <strong>useReducer</strong>로 취소 버튼 클릭시 검색 결과 초기화 기능을
          구현함으로써 <strong>사용자 경험 향상</strong>
        </li>
      </>
    ),
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
