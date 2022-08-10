import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { CaretUp } from 'react-bootstrap-icons';

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
        <TopBtn to='#'>
          <CaretUp style={{ transform: 'translateY(-2px)' }} />
        </TopBtn>
      )}
    </div>
  );
};

const TopBtn = styled(Link)`
  position: fixed;
  bottom: 30px;
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
  cursor: pointer;
  z-index: 9998;
`;
