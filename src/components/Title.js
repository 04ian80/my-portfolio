import React from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';

export function Title(props) {
  return (
    <TitleMain>
      <span>{props.title}</span>
    </TitleMain>
  );
}

const TitleMain = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid ${palette.pointColor};
  color: ${palette.subFontColor};
  flex-shrink: 0;

  & > * {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
  }
`;
