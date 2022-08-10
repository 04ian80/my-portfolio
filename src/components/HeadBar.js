import React, { useReducer, useState, useEffect } from 'react';
import * as C from '../style/HeadBar.style';
import { SVG } from '../icon/SVG';
import { iconColorReducer, initIconColor } from '../store/HeadbarReducer';
// import styled, { ThemeProvider } from 'styled-components';

export const HeadBar = () => {
  const [iconColor, setIconColor] = useReducer(iconColorReducer, initIconColor);
  const [iconLocation, setIconLocation] = useState(true);
  // const [iconLocation, setIconLocation] = useReducer(iconLocationReducer, initIconLocation);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 330) {
        setIconLocation(true);
      } else {
        setIconLocation(false);
      }
    });
  });

  // const theme = {
  //   iconLocate,
  // };

  return (
    <C.Container iconLocation={iconLocation}>
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

      {/* <ThemeProvider theme={theme}> */}
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
          <SVG
            name='github'
            width='20px'
            height='20px'
            color={iconColor.githubColor}
          ></SVG>
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
          <SVG
            name='velog'
            width='20px'
            height='20px'
            color={iconColor.velogColor}
          ></SVG>
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
          <SVG
            name='gmail'
            width='20px'
            height='20px'
            color={iconColor.gmailColor}
          ></SVG>
        </a>
      </C.ContactBox>
      {/* </ThemeProvider> */}
    </C.Container>
  );
};
