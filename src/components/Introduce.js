import React from 'react';
import TypeIt from 'typeit-react';
import * as I from '../style/Introduce.style';

export function Introduce() {
  const intro = [
    '새로운 것에 관심이 많아 배우는 것을 좋아하는',
    '사용자 경험을 1순위로 하여 개발하는',
    '새로운 도전에 있어서 적극적으로 즐기는',
  ];

  return (
    <I.MainHeader id='introduce'>
      <I.ProfileImg src='https://via.placeholder.com/300x400' />

      <I.MainTitle>
        <span>저는</span>
        <div>
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance
                .type(intro[0])
                .pause(2000)
                .delete('*')
                .pause(500)
                .type(intro[1])
                .pause(2000)
                .delete('*')
                .pause(500)
                .type(intro[2])
                .pause(2000);

              return instance;
            }}
          ></TypeIt>
        </div>
        <span>종아인</span>
        입니다
      </I.MainTitle>
    </I.MainHeader>
  );
}
