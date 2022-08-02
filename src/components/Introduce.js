import React from 'react';
import { useState, useRef } from 'react';
import * as I from '../style/Introduce.style';

export function Introduce() {
  const [introduce, setIntroduce] = useState('________');

  const Button = ({ text }) => {
    const ref = useRef(null);
    const clickIntro = () => {
      setIntroduce(ref.current.innerText);
    };
    return (
      <span>
        +
        <span onClick={clickIntro} ref={ref}>
          {text}
        </span>
      </span>
    );
  };

  return (
    <I.MainHeader>
      <I.ProfileImg src='https://via.placeholder.com/200x300' />
      <I.MainTitle>
        <span>
          저는
          <span style={{ fontSize: '12px' }}>{introduce}</span>
        </span>
        <span>종아인</span>
        <span>입니다</span>
        <I.Introduce>
          <Button text='새로운 것에 관심이 많아 배우는 것을 좋아하는' />
          <Button text='사용자 경험을 1순위로 하여 개발하는' />
        </I.Introduce>
      </I.MainTitle>
    </I.MainHeader>
  );
}
