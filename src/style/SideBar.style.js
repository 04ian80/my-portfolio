import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
`;

export const Nav = styled.nav`
  background-color: #fff;
  margin: 1em;
`;

export const NavList = styled.ul`
  // display: flex;
  // flex-direction: column;
  padding: 0;
  margin: 0;

  & > *:not(:last-child) {
    padding-right: 1em;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ContactBox = styled.div`
  position: fixed;
  right: 1em;
  display: flex;
  justify-content: center;
  margin: 1em;
  background-color: #eee;

  & > *:not(:last-child) {
    padding-right: 15px;
  }
`;
