import styled from 'styled-components';
import * as palette from './Variables';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const iconLocate = {
  iconRow: `
  top: 0em;
  margin: 1em;

  & > *:not(:last-child) {
    padding-right: 1.3rem;
  }
  `,
  iconColumn: `
  top: 4em;
  margin: 0;
  flex-direction: column;

  & > *:not(:last-child) {
    padding-bottom: 15px;
  }
  `,
  navCenter: `
  justify-content: center;
  `,
};

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${palette.bgColor};
  z-index: 9999;
  ${(props) => (props.iconLocation ? iconLocate.navCenter : '')};
`;

export const Nav = styled(motion.nav)`
  margin: 1em;
`;

export const NavList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 1.4rem;

  & > *:not(:last-child) {
    padding-right: 1em;
  }

  & > *:not(:last-child):not(:first-child)::after {
    content: '/';
    color: ${palette.pointColor};
    padding-left: 1em;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${palette.subFontColor};
`;

export const ContactBox = styled.div`
  position: fixed;
  right: 1em;
  display: flex;
  justify-content: center;

  ${(props) =>
    props.iconLocation ? iconLocate.iconColumn : iconLocate.iconRow};
`;
