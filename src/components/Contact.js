import React, { useReducer } from 'react';
import { iconColorReducer, initIconColor } from '../store/HeadbarReducer';
import { SVG } from '../icon/SVG';
import { Telephone } from 'react-bootstrap-icons';
import * as palette from '../style/Variables';
import styled from 'styled-components';

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
        <SVG animate={false} name='github' color={iconColor.githubColor} />
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
        <SVG animate={false} name='velog' color={iconColor.velogColor} />
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
        <SVG animate={false} name='gmail' color={iconColor.gmailColor} />
      </a>
      <a
        href='tel:010-9677-6912'
        rel='noopener noreferrer'
        target='_blank'
        onMouseEnter={() => {
          setIconColor({ type: 'TEL' });
        }}
        onMouseLeave={() => {
          setIconColor({ type: 'DEFAULT' });
        }}
        aria-label='나의 지메일'
      >
        <Telephone width='34px' height='34px' color={iconColor.telColor} />
      </a>
    </ContactBox>
  );
}

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  & > *:not(:last-child) {
    padding-right: 15px;
  }

  & > * {
    text-decoration: none;
    color: ${palette.subFontColor};
  }
`;
