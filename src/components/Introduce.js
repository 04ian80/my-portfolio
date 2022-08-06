import React from 'react';
// import { useState, useRef } from 'react';
import * as I from '../style/Introduce.style';

export function Introduce() {
  return (
    <I.MainHeader id='about'>
      <I.ProfileImg src='https://via.placeholder.com/200x300' />
      <I.MainTitle>
        <span>저는_______</span>
        <span>종아인</span>
        <span>입니다</span>
        <I.Introduce>
          <span>새로운 것에 관심이 많아 배우는 것을 좋아하는</span>
          <span>사용자 경험을 1순위로 하여 개발하는</span>
        </I.Introduce>
      </I.MainTitle>
    </I.MainHeader>
  );
}
