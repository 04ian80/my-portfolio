import React, { useReducer } from 'react';
import { iconColorReducer, initIconColor } from '../store/HeadbarReducer';
import * as palette from '../style/Variables';
import styled from 'styled-components';
import { Github } from './svg/Github';
import { Velog } from './svg/Velog';
import { Gmail } from './svg/Gmail';

export function Contact() {
  const [iconColor, setIconColor] = useReducer(iconColorReducer, initIconColor);

  return (
    <ContactBox>
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
        <Github size='24' animate={true} color={iconColor.githubColor} />
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
        <Velog size='24' animate={true} color={iconColor.velogColor} />
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
        <Gmail
          size='24'
          animate={true}
          name='gmail'
          color={iconColor.gmailColor}
        />
      </a>
    </ContactBox>
  );
}

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  & > *:not(:last-child) {
    padding-right: 15px;
  }

  & > * {
    text-decoration: none;
    color: ${palette.subFontColor};
  }
`;
