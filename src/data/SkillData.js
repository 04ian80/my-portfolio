import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const SassLink = styled(HashLink)`
  color: inherit;
  text-decoration: none;

  & > span {
    text-decoration: underline;
    color: #cc6699;
  }
`;

export const skillData = [
  {
    id: 1,
    svg: {
      name: 'HTML5',
      color: '#E34F26',
    },
    skillName: 'HTML',
    description: (
      <>
        <li>웹 접근성을 고려한 WAI-ARIA 사용</li>
        <li>시멘틱 태그 사용</li>
      </>
    ),
  },
  {
    id: 2,
    svg: {
      name: 'CSS3',
      color: '#1572B6',
    },
    skillName: 'CSS',
    description: (
      <>
        <li>Grid를 이용한 화면 레이아웃</li>
        <li>flexbox를 이용한 요소의 유연한 정렬</li>
        <li>Pseudo Selector를 이용한 애니메이션</li>
        <li>ellipsis, 스크롤 방지 등 CSS 속성 적극 활용</li>
        <li>Sass로 더욱 다이나믹한 스타일링</li>
      </>
    ),
  },
  {
    id: 3,
    svg: {
      name: 'JavaScript',
      color: '#F7DF1E',
    },
    skillName: 'JavaScript',
    description: (
      <>
        <li>동적으로 DOM 조작</li>
        <li>이벤트 핸들링</li>
        <li>날짜 관련 메서드 활용&#40;getDay, getFullYear...&#41;</li>
        <li>Class의 메서드, 생성자와 인스턴트 생성</li>
      </>
    ),
  },
  {
    id: 4,
    svg: {
      name: 'React',
      color: '#61DAFB',
    },
    skillName: 'React',
    description: (
      <>
        <li>라우터를 사용하여 SPA 구현</li>
        <li>함수형 컴포넌트 지향</li>
        <li>useReducer 훅으로 복잡한 상태 관리</li>
        <li>Context API로 전역 상태 관리</li>
      </>
    ),
  },
  {
    id: 5,
    svg: {
      name: 'styledComponents',
      color: '#DB7093',
    },
    skillName: 'styled-components',
    description: (
      <>
        <li>props를 활용한 상황에 따른 상태 값 스타일링</li>
      </>
    ),
  },
  {
    id: 6,
    svg: {
      name: 'Sass',
      color: '#CC6699',
    },
    skillName: 'Sass',
    description: (
      <>
        <li>Scss 문법 지향</li>
        <li>mixin & includes 사용 경험</li>
      </>
    ),
  },
];
