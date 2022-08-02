import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  left: 0;
`;

export const ContactBox = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  margin: 1em;
  background-color: #d3dee2;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);

  & > span {
    padding-right: 5px;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  margin: 1em;
  background-color: #eee;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  & > *:not(:last-child) {
    margin-bottom: 2em;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
