import React from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { viewsize } from '../style/Variables';
import { Tab } from './Tab';
import { motion } from 'framer-motion';
import { Contact } from './Contact';

export const HeadBar = ({ state, dispatch }) => {
  return (
    <Container>
      <HeaderContainer animate={{ opacity: ['0', '1'] }}>
        <Header aria-label='포트폴리오 로고'>종아인의 포트폴리오</Header>
        <Contact />
      </HeaderContainer>
      <Nav animate={{ opacity: ['0', '1'] }}>
        <Tab
          title='소개'
          reducerType='INTRODUCE'
          onClick={() => {
            dispatch({ type: 'INTRODUCE' });
          }}
          reducerStyle={state.introduceStyle}
        />
        <Tab
          title='기술스택'
          onClick={() => {
            dispatch({ type: 'SKILLS' });
          }}
          reducerStyle={state.skillsStyle}
        />
        <Tab
          title='프로젝트'
          onClick={() => {
            dispatch({ type: 'PROJECT' });
          }}
          reducerStyle={state.projectStyle}
        />
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${palette.bgColor};
  border-bottom: 1px solid #eee;
  z-index: 9999;

  @media ${viewsize.xSmall} {
    padding: 0;
  }
`;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  margin: 10px;
`;

const Header = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: ${palette.brownBlack};
  flex-shrink: 0;
  @media ${viewsize.xSmall} {
    font-size: 18px;
  }
`;
