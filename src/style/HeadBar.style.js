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
  margin: 5px;
  border: 2px solid ${palette.pointColor};
  border-radius: 30px;
  padding: 0 5px;
  z-index: 9999;
`;

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const LogoContainer = styled(Link)``;

export const NavList = styled.ul`
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  flex-shrink: 0;

  & > * {
    margin: 0 10px;
  }

  & > *:not(:last-child)::after {
    content: '/';
    color: ${palette.pointColor};
    margin-left: 30px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${palette.subFontColor};
`;

export const ContactBox = styled.div`
  position: absolute;
  right: 1rem;
  top: 6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;

  & > * {
    background-color: ${palette.bgColor};
    border-radius: 10px;
    padding: 2px;
  }

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Menubar = styled.div`
  position: fixed;
`;

export const MenubarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 24px;
  z-index: 1000;
  background-color: #fff;
`;

export const Disscrollable = styled.div`
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
