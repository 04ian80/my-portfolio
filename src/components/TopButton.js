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
  background-color: #fff;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
  /* opacity: 0; */
  cursor: pointer;
  z-index: 9998;
`;
