import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  padding: 5px;
  margin: 10px;
  background-color: #d3dee2;
  box-shadow: 3px 0px 12px rgba(0, 0, 0, 0.1);

  & > span {
    padding-right: 5px;
  }
`;

export const ContactBox = styled.div`
  position: fixed;
  top: 60%;
  left: 0;
`;
