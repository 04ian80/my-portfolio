import React, { Fragment, useReducer } from 'react';
import Media from 'react-media';
import * as C from '../style/HeadBar.style';
import { LOGO, SVG } from '../icon/SVG';
import { iconColorReducer, initIconColor } from '../store/HeadbarReducer';
import { List } from 'react-bootstrap-icons';
import * as palette from '../style/Variables';

export const HeadBar = () => {
  const [iconColor, setIconColor] = useReducer(iconColorReducer, initIconColor);

  return (
    <C.Container>
      <C.Nav animate={{ opacity: ['0', '1'] }}>
        <C.LogoContainer
          to='/mystory'
          role='button'
          aria-label='포트폴리오 로고'
        >
          <LOGO />
        </C.LogoContainer>

        <Media
          queries={{
            medium: '(max-width: 599px)',
            large: '(min-width: 600px)',
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.medium && (
                <>
                  <List
                    style={{ color: palette.subFontColor, fontSize: '2rem' }}
                  />
                </>
              )}
              {matches.large && (
                <>
                  <C.NavList role='tablist'>
                    <C.NavLink
                      to='/#introduce'
                      smooth={true}
                      role='tab'
                      aria-label='자기소개 목록으로 이동 tab'
                    >
                      자기소개
                    </C.NavLink>
                    <C.NavLink
                      to='/#skill'
                      smooth={true}
                      role='tab'
                      aria-label='기술스택 목록으로 이동'
                    >
                      기술스택
                    </C.NavLink>
                    <C.NavLink
                      to='/#project'
                      smooth={true}
                      role='tab'
                      aria-label='프로젝트 목록으로 이동'
                    >
                      프로젝트
                    </C.NavLink>
                  </C.NavList>

                  <C.ContactBox>
                    <a
                      href='https://github.com/04ian80'
                      rel='noopener noreferrer'
                      target='_blank'
                      onMouseEnter={() => {
                        setIconColor({ type: 'GITHUB' });
                      }}
                      onMouseLeave={() => {
                        setIconColor({ type: 'DEFAULT' });
                      }}
                      aria-label='나의 깃허브'
                    >
                      <SVG name='github' color={iconColor.githubColor} />
                    </a>
                    <a
                      href='https://velog.io/@a_in'
                      rel='noopener noreferrer'
                      target='_blank'
                      onMouseEnter={() => {
                        setIconColor({ type: 'VELOG' });
                      }}
                      onMouseLeave={() => {
                        setIconColor({ type: 'DEFAULT' });
                      }}
                      aria-label='나의 벨로그'
                    >
                      <SVG name='velog' color={iconColor.velogColor} />
                    </a>
                    <a
                      href='mailto:artnouveau0804@gmail.com'
                      rel='noopener noreferrer'
                      target='_blank'
                      onMouseEnter={() => {
                        setIconColor({ type: 'GMAIL' });
                      }}
                      onMouseLeave={() => {
                        setIconColor({ type: 'DEFAULT' });
                      }}
                      aria-label='나의 지메일'
                    >
                      <SVG name='gmail' color={iconColor.gmailColor} />
                    </a>
                  </C.ContactBox>
                </>
              )}
            </Fragment>
          )}
        </Media>
      </C.Nav>
    </C.Container>
  );
};
