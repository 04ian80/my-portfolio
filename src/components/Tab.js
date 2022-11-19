import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { viewsize } from '../style/Variables';

export const Tab = ({ title, onClick, reducerStyle }) => {
  return (
    <TabButton onClick={onClick} style={reducerStyle}>
      {title}
    </TabButton>
  );
};

const TabButton = styled(motion.button)`
  padding: 10px;
  border: none;
  font-weight: 600;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  :hover {
    color: red;
  }
  @media ${viewsize.xSmall} {
    font-size: 15px;
  }
`;
