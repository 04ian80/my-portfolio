import React, { useReducer } from 'react';
import * as C from '../style/SideBar.style';
import * as palette from '../style/Variables';
import { SVG } from '../icon/SVG';

const initArg = {
  githubColor: palette.subFontColor,
  velogColor: palette.subFontColor,
  gmailColor: palette.subFontColor,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GITHUB':
      return {
        ...state,
        githubColor: palette.githubColor,
      };
      break;
    case 'VELOG':
      return {
        ...state,
        velogColor: palette.velogColor,
      };
      break;
    case 'GMAIL':
      return {
        ...state,
        gmailColor: palette.gmailColor,
      };
      break;
    case 'DEFAULT':
      return {
        ...state,
        githubColor: palette.subFontColor,
        velogColor: palette.subFontColor,
        gmailColor: palette.subFontColor,
      };
      break;
    default:
      break;
  }
};

function SideBar() {
  const [state, dispatch] = useReducer(reducer, initArg);

  return (
    <C.Container>
      <C.Nav>
        <C.NavList>
          <C.NavLink to='/#about' smooth={true}>
            about
          </C.NavLink>
          <C.NavLink to='/#portfolio' smooth={true}>
            portfolio
          </C.NavLink>
          <C.NavLink to='/#skill' smooth={true}>
            skill
          </C.NavLink>
        </C.NavList>
      </C.Nav>
      <C.ContactBox>
        <a
          href='https://github.com/04ian80'
          rel='noopener noreferrer'
          target='_blank'
          onMouseEnter={() => {
            dispatch({ type: 'GITHUB' });
          }}
          onMouseLeave={() => {
            dispatch({ type: 'DEFAULT' });
          }}
        >
          <SVG
            name='github'
            width='20px'
            height='20px'
            color={state.githubColor}
          ></SVG>
        </a>
        <a
          href='https://velog.io/@a_in'
          rel='noopener noreferrer'
          target='_blank'
          onMouseEnter={() => {
            dispatch({ type: 'VELOG' });
          }}
          onMouseLeave={() => {
            dispatch({ type: 'DEFAULT' });
          }}
        >
          <SVG
            name='velog'
            width='20px'
            height='20px'
            color={state.velogColor}
          ></SVG>
        </a>
        <a
          href='mailto:artnouveau0804@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
          onMouseEnter={() => {
            dispatch({ type: 'GMAIL' });
          }}
          onMouseLeave={() => {
            dispatch({ type: 'DEFAULT' });
          }}
        >
          <SVG
            name='gmail'
            width='20px'
            height='20px'
            color={state.gmailColor}
          ></SVG>
        </a>
      </C.ContactBox>
    </C.Container>
  );
}

export default SideBar;
