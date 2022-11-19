import React from 'react';
import TypeIt from 'typeit-react';
import * as I from '../style/Introduce.style';
import profileImg from './image/profile.jpg';

export function Introduce() {
  const intro = [
    '새로운 것에 관심이 많아 배우는 것을 좋아하는',
    '사용자 경험을 1순위로 하여 개발하는',
    '새로운 도전에 있어서 적극적으로 즐기는',
  ];

  return (
    <I.Container>
      <I.MainHeader id='introduce' aria-label='자기소개 페이지'>
        <I.ImgBox>
          <I.ProfileImg
            src={profileImg}
            width='160'
            height='180'
            alt='프로필 이미지'
          />
        </I.ImgBox>

        <div>
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
        </div>
      </I.MainHeader>
      <I.AboutMe>
        <I.AboutMeList>
          <li>
            사용자의 입장으로서 시뮬레이션을 그리며, 더 나은 UI/UX에 대하여
            지속적으로 고민합니다.
          </li>
          <li>
            나만의 코드가 아닌, <strong>제 3자의 관점</strong>에서 코드를
            만듭니다.
          </li>
          <li>끊임없는 시행착오를 통해 성장하는 것을 즐깁니다.</li>
          <li></li>
          <li></li>
        </I.AboutMeList>
      </I.AboutMe>
    </I.Container>
  );
}
