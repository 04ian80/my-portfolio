import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { CaretUp } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

export const TopButton = () => {
  const [topBtn, setTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 500) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    });
  });

  return (
    <div>
      {topBtn && (
        <TopBtn
          to='/#introduce'
          smooth={true}
          animate={{
            y: ['0px', '-40px', '-30px', '-34px', '-30px'],
          }}
          role='button'
          aria-label='스크린 최상단으로 이동'
        >
          <CaretUp style={{ transform: 'translateY(-2px)' }} />
        </TopBtn>
      )}
    </div>
  );
};

const TopBtn = styled(motion(Link))`
  position: fixed;
  bottom: 0px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  color: ${palette.subFontColor};
  background-color: ${palette.deeperWhite};
  box-shadow: ${palette.defaultShadow};
  cursor: pointer;
  z-index: 9998;
`;
