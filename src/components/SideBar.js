import React from 'react';
import * as C from '../style/SideBar.style';
import * as palette from '../style/Variables';
import { SVG } from '../icon/SVG';

function SideBar() {
  const iconColor = palette.subFontColor;

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
        >
          <SVG name='github' width='20px' height='20px' color={iconColor}></SVG>
        </a>
        <a
          href='https://velog.io/@a_in'
          rel='noopener noreferrer'
          target='_blank'
        >
          <SVG name='velog' width='20px' height='20px' color={iconColor}></SVG>
        </a>
        <a
          href='mailto:artnouveau0804@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <SVG name='gmail' width='20px' height='20px' color={iconColor}></SVG>
        </a>
      </C.ContactBox>
    </C.Container>
  );
}

export default SideBar;
