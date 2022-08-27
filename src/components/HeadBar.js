import React, { useReducer, useContext } from 'react';
import { UserContext } from '../store/HeadBarContext';
import * as C from '../style/HeadBar.style';
import { LOGO, SVG } from '../icon/SVG';
import { iconColorReducer, initIconColor } from '../store/HeadbarReducer';
import { List } from 'react-bootstrap-icons';
import * as palette from '../style/Variables';

export const HeadBar = () => {
  const value = useContext(UserContext);
  const { menubar, open } = value;
  const [iconColor, setIconColor] = useReducer(iconColorReducer, initIconColor);
  const removeUnscroll = () => {
    open(false);
    document.body.style.overflow = null;
  };

  const variants = {
    open: { x: [150, 0, 0] },
    close: { x: 250 },
  };

  return (
    <C.Container>
      <C.Nav animate={{ opacity: ['0', '1'] }}>
        <C.LogoContainer to='/' role='button' aria-label='포트폴리오 로고'>
          <LOGO />
        </C.LogoContainer>

        <List
          style={{ color: palette.subFontColor, fontSize: '2rem' }}
          onClick={() => {
            open(true);
            document.body.style.overflow = 'hidden';
          }}
        />
        {menubar ? (
          <>
            <C.Unscroll
              onClick={() => {
                removeUnscroll();
              }}
            ></C.Unscroll>
          </>
        ) : null}
        <C.Menubar>
          <C.MenubarWrapper
            animate={menubar ? 'open' : 'close'}
            variants={variants}
          >
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
            <C.Menu
              to='/'
              onClick={() => {
                removeUnscroll();
              }}
              whileHover={{ color: palette.fontColor }}
            >
              홈
            </C.Menu>
            <C.Menu
              to='/mystory'
              onClick={() => {
                removeUnscroll();
              }}
              whileHover={{ color: palette.fontColor }}
            >
              스토리
            </C.Menu>
          </C.MenubarWrapper>
        </C.Menubar>
      </C.Nav>
    </C.Container>
  );
};
