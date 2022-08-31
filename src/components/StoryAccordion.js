import React from 'react';
import styled from 'styled-components';
import { CaretDownFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import * as palette from '../style/Variables';

export const StoryAccordion = ({ d, onToggle, active }) => {
  const { list, story } = d;

  return (
    <StoryEachList>
      <StoryToggle
        onClick={onToggle}
        whileHover={{
          fontWeight: 600,
          borderLeft: '5px solid rgba(0,0,0,0.5)',
        }}
      >
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
  color: ${palette.fontColor};
  margin: 10px 0;
  letter-spacing: -0.3px;
`;

const StoryToggle = styled(motion.div)`
  display: inline-block;
  width: auto;
  padding-left: 10px;
  border-left: 5px solid #eee;
  font-size: 1.5rem;
`;

const ToggleIcon = styled(motion(CaretDownFill))`
  margin-left: 5px;
`;

const StoryBodyWrapper = styled(motion.div)`
  height: 0;
  overflow: hidden;
`;

const StoryBody = styled.div`
  padding-left: 16px;
  margin: 10px 0;
  word-break: keep-all;
  white-space: pre-wrap;
`;
