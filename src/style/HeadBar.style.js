import styled from 'styled-components';
import * as palette from './Variables';
import { HashLink as Link } from 'react-router-hash-link';

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`;

export const Nav = styled.nav`
  // background-color: #fff;
  margin: 1em;
`;

export const NavList = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 14px;

  & > *:not(:last-child) {
    padding-right: 1em;
  }

  & > *:not(:last-child)::after {
    content: '/';
    color: ${palette.bgColor};
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
  margin: 1em;
  // background-color: #bbb;

  & > *:not(:last-child) {
    padding-right: 15px;
  }
`;
