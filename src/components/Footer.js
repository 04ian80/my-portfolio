import React from 'react';
import styled from 'styled-components';
import { Contact } from './Contact';

export function Footer() {
  return (
    <Container>
      <Contact />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
  border-radius: 50% 50% 0 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
