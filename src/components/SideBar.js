import React from 'react';
import * as C from '../style/SideBar.style';
import { SVG } from '../icon/SVG';

function SideBar() {
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
        <SVG name='github' width='25px' height='25px' color='#6E6E6E'></SVG>
        <SVG name='velog' width='25px' height='25px' color='#6E6E6E'></SVG>
        <SVG name='gmail' width='25px' height='25px' color='#6E6E6E'></SVG>
      </C.ContactBox>
    </C.Container>
  );
}

export default SideBar;
