import React from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';

export function Project() {
  return (
    <ProjectContainer id='project'>
      {/* <div> */}
      <EachProject>
        <ProjectImg></ProjectImg>
        <ProjectDesc></ProjectDesc>
      </EachProject>
      <EachProject></EachProject>
      {/* </div> */}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  /* padding: 4rem; */
`;

const EachProject = styled.div`
  width: 200px;
  height: 300px;
  margin: 2rem;
  border: 2px solid ${palette.brownColor};
  border-radius: ${palette.defaultRadius};
  flex-shrink: 0;
  flex-wrap: wrap;
  overflow: hidden;
`;

const ProjectImg = styled.div`
  background-color: ${palette.salmonColor};
  height: 70%;
`;

const ProjectDesc = styled.div`
  background-color: ${palette.greenColor};
  height: 30%;
`;
