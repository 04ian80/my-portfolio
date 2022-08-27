import React, { Fragment, useState, useReducer, useContext } from 'react';
import { UserContext } from '../store/HeadBarContext';
import Media from 'react-media';
import * as C from '../style/HeadBar.style';
import { LOGO, SVG } from '../icon/SVG';
import { iconColorReducer, initIconColor } from '../store/HeadbarReducer';
import { List } from 'react-bootstrap-icons';
import * as palette from '../style/Variables';

export const HeadBar = () => {
  const value = useContext(UserContext);
  const { menubar, open } = value;
  const [iconColor, setIconColor] = useReducer(iconColorReducer, initIconColor);

  return (
    <C.Container>
      <C.Nav animate={{ opacity: ['0', '1'] }}>
        <C.LogoContainer
          to='/mystory'
          role='button'
          aria-label='포트폴리오 로고'
        >
          <LOGO />
        </C.LogoContainer>

        <List
          style={{ color: palette.subFontColor, fontSize: '2rem' }}
          onClick={(e) => {
            open(true);
            document.body.style.overflow = 'hidden';
          }}
        />
        {menubar ? (
          <>
            <C.Disscrollable
              onClick={() => {
                open(false);
                document.body.style.overflow = null;
              }}
            ></C.Disscrollable>
            <C.Menubar>
              <C.MenubarWrapper>
                <C.ContactBox>
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
                    aria-label='나의 깃허브'
                  >
                    <SVG name='github' color={iconColor.githubColor} />
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
                    aria-label='나의 벨로그'
                  >
                    <SVG name='velog' color={iconColor.velogColor} />
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
                    aria-label='나의 지메일'
                  >
                    <SVG name='gmail' color={iconColor.gmailColor} />
                  </a>
                </C.ContactBox>
                <span>About Me</span>
              </C.MenubarWrapper>
            </C.Menubar>
          </>
        ) : null}
      </C.Nav>
    </C.Container>
  );
};
