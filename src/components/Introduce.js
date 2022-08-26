import React, { useState } from 'react';
import TypeIt from 'typeit-react';
import * as I from '../style/Introduce.style';
import profileImg from './image/profile.jpg';

export function Introduce() {
  const [isHover, setIsHover] = useState(false);

  const intro = [
    '새로운 것에 관심이 많아 배우는 것을 좋아하는',
    '사용자 경험을 1순위로 하여 개발하는',
    '새로운 도전에 있어서 적극적으로 즐기는',
  ];

  return (
    <I.MainHeader id='introduce'>
      <I.ImgBox>
        <I.ProfileImg
          src={profileImg}
          width='300'
          height='400'
          alt='프로필 이미지'
        />

        {isHover ? (
          <I.BackOfToMystory
            animate={{ scale: [1.1, 1.2], opacity: [0.7, 0] }}
            transition={{ repeat: Infinity }}
            style={{ width: '100px' }}
          ></I.BackOfToMystory>
        ) : (
          <I.BackOfToMystory
            animate={{ scale: [1.1, 1.4], opacity: [0.9, 0] }}
            transition={{ repeat: Infinity }}
          ></I.BackOfToMystory>
        )}

        <I.ToMystory
          to='/mystory'
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          whileHover={{ width: '100px' }}
          role='button'
          aria-label='나의 대한 소개 자세히보기'
        >
          {!isHover ? <span>+</span> : null}

          {isHover ? (
            <I.SeeMore>
              <span>자세히</span>
            </I.SeeMore>
          ) : null}
        </I.ToMystory>
      </I.ImgBox>

      <I.MainTitle>
        <span>저는</span>
        <I.screenReadersOnly>
          새로운 것에 관심이 많아 배우는 것을 좋아하는, 사용자 경험을
          1순위로하여 개발하는, 새로운 도전에 있어서 적극적으로 즐기는
        </I.screenReadersOnly>
        <I.TypeItBox>
          <TypeIt
            aria-hidden='true'
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
        </I.TypeItBox>
        <span>종아인</span>
        입니다
      </I.MainTitle>
    </I.MainHeader>
  );
}
