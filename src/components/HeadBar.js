import React, { useReducer, useState, useEffect } from 'react';
import * as C from '../style/HeadBar.style';
import { SVG } from '../icon/SVG';
import { iconColorReducer, initIconColor } from '../store/HeadbarReducer';

export const HeadBar = () => {
  const [iconColor, setIconColor] = useReducer(iconColorReducer, initIconColor);
  const [iconLocation, setIconLocation] = useState(
    window.innerWidth < 490 ? true : false
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 490) {
        setIconLocation(true);
      } else {
        setIconLocation(false);
      }
    });
  });

  return (
    <C.Container iconLocation={iconLocation}>
      <C.Nav animate={{ opacity: ['0', '1'] }}>
        <C.NavList>
          <C.NavLink to='/#about' smooth={true}>
            about
          </C.NavLink>
          <C.NavLink to='/#skill' smooth={true}>
            skill
          </C.NavLink>
          <C.NavLink to='/#portfolio' smooth={true}>
            portfolio
          </C.NavLink>
        </C.NavList>
      </C.Nav>

      <C.ContactBox iconLocation={iconLocation}>
        <a
          href='https://github.com/04ian80'
          rel='noopener noreferrer'
          target='_blank'
          onMouseEnter={() => {
            setIconColor({ type: 'GITHUB' });
          }}
          onMouseLeave={() => {
            setIconColor({ type: 'DEFAULT' });
          }}
        >
          <SVG name='github' color={iconColor.githubColor}></SVG>
        </a>
        <a
          href='https://velog.io/@a_in'
          rel='noopener noreferrer'
          target='_blank'
          onMouseEnter={() => {
            setIconColor({ type: 'VELOG' });
          }}
          onMouseLeave={() => {
            setIconColor({ type: 'DEFAULT' });
          }}
        >
          <SVG name='velog' color={iconColor.velogColor}></SVG>
        </a>
        <a
          href='mailto:artnouveau0804@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
          onMouseEnter={() => {
            setIconColor({ type: 'GMAIL' });
          }}
          onMouseLeave={() => {
            setIconColor({ type: 'DEFAULT' });
          }}
        >
          <SVG name='gmail' color={iconColor.gmailColor}></SVG>
        </a>
      </C.ContactBox>
    </C.Container>
  );
};
