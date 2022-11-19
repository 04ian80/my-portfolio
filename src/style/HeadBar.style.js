import styled from 'styled-components';
import * as palette from './Variables';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { viewsize } from './Variables';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${palette.bgColor};
  border-bottom: 1px solid #eee;
  padding: 0 70px;
  z-index: 9999;

  @media ${viewsize.xSmall} {
    padding: 0;
  }
`;

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)``;
