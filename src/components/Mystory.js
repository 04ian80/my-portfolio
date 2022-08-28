import React, { useReducer, useContext } from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { HeadBar } from './HeadBar';
import { UserContext } from '../store/HeadBarContext';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import { StoryData as data } from '../data/StoryData';

export function Mystory() {
  const value = useContext(UserContext);
  const { menubar } = value;
  const [state, dispatch] = useReducer(reducer, initArg);

  return (
    <StoryContainer style={{ marginRight: menubar ? '23.5px' : null }}>
      <HeadBar />
      <MainStory>
        <StoryHeader>
          <Title>
            <h2>스토리</h2>
          </Title>
        </StoryHeader>
        <StoryBox>
          <StoryList>
            {data.map((d) => (
              <>
                <li
                  key={d.id}
                  onClick={() => {
                    dispatch({ type: d.id });
                  }}
                >
                  {d.list}
                  <ToggleIcon color='rgba(0,0,0,0.6)' size='12' />
                </li>
              </>
            ))}
          </StoryList>
        </StoryBox>
      </MainStory>
    </StoryContainer>
  );
}

const StoryContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`;

const MainStory = styled.section`
  padding: 100px 64px;
`;

const StoryHeader = styled.div`
  display: flex;
`;

const Title = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid ${palette.pointColor};
  color: ${palette.subFontColor};

  & > * {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
  }
`;

const StoryBox = styled.div`
  margin-top: 32px;
`;

const StoryList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  & > * {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding-left: 10px;
    border-left: 5px solid #eee;
    font-size: 1.2rem;
  }
`;

const ToggleIcon = styled(CaretDownFill)`
  margin-left: 5px;
`;
