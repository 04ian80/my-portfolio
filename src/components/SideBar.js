import React from 'react';
import { Link } from 'react-router-dom';
import * as C from '../style/SideBar.style';

function SideBar() {
  return (
    <C.Container>
      <C.Nav>
        <C.NavList>
          <C.NavLink to='#about'>about</C.NavLink>
          <C.NavLink to='#portfolio'>portfolio</C.NavLink>
          <C.NavLink to='#skill'>skill</C.NavLink>
        </C.NavList>
      </C.Nav>
      <C.ContactBox>
        <span>Github</span>
        <span>velog</span>
        <span>email</span>
      </C.ContactBox>
    </C.Container>
  );
}

export default SideBar;
