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

  const moveToTop = () => (document.documentElement.scrollTop = 0);

  return (
    <div>
      {topBtn && (
        <TopBtn onClick={moveToTop}>
          <CaretUp style={{ transform: 'translateY(-2px)' }} />
        </TopBtn>
      )}
    </div>
  );
};

const TopBtn = styled.div`
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
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 9998;
`;
