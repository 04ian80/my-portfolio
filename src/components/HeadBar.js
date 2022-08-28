import React, { useContext } from 'react';
import { UserContext } from '../store/HeadBarContext';
import * as C from '../style/HeadBar.style';
import { LOGO } from '../icon/SVG';
import { List } from 'react-bootstrap-icons';
import * as palette from '../style/Variables';
import { Menubar } from './Menubar';

export const HeadBar = () => {
  const value = useContext(UserContext);
  const { menubar, open } = value;

  const setUnscroll = () => {
    open(true);
    document.body.style.overflow = 'hidden';
  };
  const removeUnscroll = () => {
    open(false);
    document.body.style.overflow = null;
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
            setUnscroll();
          }}
        />
        {menubar ? (
          <>
            <C.Unscroll
              onClick={() => {
                removeUnscroll();
              }}
            />
          </>
        ) : null}

        <Menubar />
      </C.Nav>
    </C.Container>
  );
};
