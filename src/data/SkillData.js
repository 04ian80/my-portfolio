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
      <ul>
        <li>웹 접근성을 고려한 WAI-ARIA 사용</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
      <ul>
        <li>Grid를 이용한 화면 레이아웃</li>
        <li></li>
        <li></li>
        <li>
          <SassLink to='/#sass' smooth={true}>
            <span>Sass</span>로 더욱 다이나믹한 스타일링
          </SassLink>
        </li>
      </ul>
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
      <ul>
        <li>이벤트 핸들링</li>
        <li>날짜 관련 메소드 활용</li>
        <li style={{ listStyle: 'none' }}>&#40;getDay, getFullYear...&#41;</li>
        <li></li>
        <li></li>
      </ul>
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
      <ul>
        <li>라우터를 사용하여 SPA 구현</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
      <ul>
        <li>props를 활용한 상태값 스타일링</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
      <ul>
        <li>Scss 문법 지향</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    ),
  },
];
