import React, { useReducer, useState, useEffect } from 'react';
import * as C from '../style/HeadBar.style';
import { LOGO, SVG } from '../icon/SVG';
import { iconColorReducer, initIconColor } from '../store/HeadbarReducer';
import Media from 'react-media';
import { device } from '../style/Variables';

export const HeadBar = () => {
  const [iconColor, setIconColor] = useReducer(iconColorReducer, initIconColor);
  const [iconLocation, setIconLocation] = useState(
    window.innerWidth < 580 ? true : false
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 580) {
        setIconLocation(true);
      } else {
        setIconLocation(false);
      }
    });
  });

  return (
    <C.Container>
      <C.Nav animate={{ opacity: ['0', '1'] }}>
        {/* <Media queries={{ small: ${device.small} }}> */}

        <C.LogoContainer to='/mystory'>
          <LOGO />
        </C.LogoContainer>

        {/* </Media> */}
        <C.NavList>
          <C.NavLink to='/#introduce' smooth={true}>
            자기소개
          </C.NavLink>
          <C.NavLink to='/#skill' smooth={true}>
            기술스택
          </C.NavLink>
          <C.NavLink to='/#portfolio' smooth={true}>
            프로젝트
          </C.NavLink>
        </C.NavList>

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
      </C.Nav>
    </C.Container>
  );
};
