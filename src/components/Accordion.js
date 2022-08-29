import React from 'react';
import styled from 'styled-components';
import { CaretDownFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import * as palette from '../style/Variables';

export const Accordion = ({ d, idx, onToggle, active }) => {
  const { list, story } = d;

  return (
    <StoryEachList>
      <StoryToggle onClick={onToggle} whileHover={{ color: '#000' }}>
        {list}
        <ToggleIcon
          color='rgba(0,0,0,0.6)'
          size='12'
          animate={{ transform: active ? 'rotateZ(180deg)' : 'rotateZ(0deg)' }}
        />
      </StoryToggle>
      <StoryBodyWrapper
        style={{ height: active ? 'auto' : null }}
        animate={{ height: active ? 'auto' : null }}
      >
        <StoryBody>{story}</StoryBody>
      </StoryBodyWrapper>
    </StoryEachList>
  );
};

const StoryEachList = styled.li`
  display: inline-block;
  margin-bottom: 50px;
  color: ${palette.fontColor};
  /* color: #000; */
`;

const ToggleIcon = styled(motion(CaretDownFill))`
  margin-left: 5px;
`;

const StoryToggle = styled(motion.div)`
  display: inline-block;
  /* align-items: center; */
  width: auto;
  margin-bottom: 30px;
  padding-left: 10px;
  border-left: 5px solid #eee;
  font-size: 1.2rem;
`;

const StoryBodyWrapper = styled(motion.div)`
  height: 0;
  overflow: hidden;
`;

const StoryBody = styled.div`
  padding-left: 16px;
`;
