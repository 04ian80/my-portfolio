import styled from 'styled-components';
import * as palette from './Variables';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${palette.bgColor};
  border-bottom: 1px solid #eee;
  padding: 0 112px;
  z-index: 9999;
`;

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const LogoContainer = styled(Link)``;

export const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  & > *:not(:last-child) {
    padding-right: 15px;
  }
`;

export const Menubar = styled.div`
  display: block;
  position: fixed;
`;

export const MenubarWrapper = styled(motion.div)`
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

export const Menu = styled(motion(Link))`
  text-decoration: none;
  color: ${palette.subFontColor};
  font-size: 1.5rem;
`;

export const Unscroll = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
`;
