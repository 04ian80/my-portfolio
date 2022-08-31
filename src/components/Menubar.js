import React, { useReducer, useContext } from 'react';
import { iconColorReducer, initIconColor } from '../store/HeadbarReducer';
import { SVG } from '../icon/SVG';
import { motion } from 'framer-motion';
import * as palette from '../style/Variables';
import { UserContext } from '../store/HeadBarContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Contact } from './Contact';

export function Menubar() {
  const [iconColor, setIconColor] = useReducer(iconColorReducer, initIconColor);
  const value = useContext(UserContext);
  const { menubar, open } = value;

  const variants = {
    open: { x: [150, 0, 0] },
    close: { x: 250 },
  };

  const removeUnscroll = () => {
    open(false);
    document.body.style.overflow = null;
  };

  return (
    <MenubarContainer>
      <MenubarWrapper animate={menubar ? 'open' : 'close'} variants={variants}>
        <Contact />
        <Menu
          to='/'
          onClick={() => {
            removeUnscroll();
          }}
          whileHover={{ color: palette.fontColor }}
        >
          홈
        </Menu>
        <Menu
          to='/mystory'
          onClick={() => {
            removeUnscroll();
          }}
          whileHover={{ color: palette.fontColor }}
        >
          스토리
        </Menu>
      </MenubarWrapper>
    </MenubarContainer>
  );
}

const MenubarContainer = styled.div`
  display: block;
  position: fixed;
`;

const MenubarWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 24px;
  background-color: ${palette.bgColor};
`;

const Menu = styled(motion(Link))`
  text-decoration: none;
  color: ${palette.subFontColor};
  font-size: 1.5rem;
`;

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  & > *:not(:last-child) {
    padding-right: 15px;
  }
`;
