import React from 'react';
import * as I from '../style/Introduce.style';

export function Introduce() {
  return (
    <I.MainHeader>
      <I.ProfileImg src='https://via.placeholder.com/200x300' />
      <I.MainTitle>
        <span>이유있는 코드를 짜는</span>
        <span>종아인</span>
        <span>입니다</span>
        <I.Introduce>
          새로운 것에 관심이 많아 배우는 것을 좋아합니다.
        </I.Introduce>
      </I.MainTitle>
    </I.MainHeader>
  );
}
