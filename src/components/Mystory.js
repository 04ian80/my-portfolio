import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import * as palette from '../style/Variables';
import { HeadBar } from './HeadBar';
import { UserContext } from '../store/HeadBarContext';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import { StoryData as data } from '../data/StoryData';
import { motion } from 'framer-motion';

export function Mystory() {
  const value = useContext(UserContext);
  const { menubar } = value;
  const [toggle, setToggle] = useState({
    id: data.id,
    open: false,
  });
  console.log(toggle.id);
  const { id, open } = toggle;

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
              <StoryEachList key={d.id}>
                <StoryToggle
                  onClick={() => {
                    setToggle({ id: d.id, open: !open });
                  }}
                >
                  {d.list}
                  <ToggleIcon color='rgba(0,0,0,0.6)' size='12' />
                </StoryToggle>
                <StoryBodyWrapper
                  id={d.id}
                  style={{
                    height: id === d.id && open === false ? 'auto' : 0,
                  }}
                  animate={{
                    height: id === d.id && open === false ? 'auto' : 0,
                  }}
                >
                  <StoryBody>{d.story}</StoryBody>
                </StoryBodyWrapper>
              </StoryEachList>
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
`;

const StoryEachList = styled.li`
  display: inline-block;
  margin-bottom: 50px;
`;

const ToggleIcon = styled(CaretDownFill)`
  margin-left: 5px;
`;

const StoryToggle = styled.div`
  display: inline-block;
  /* align-items: center; */
  width: auto;
  margin-bottom: 30px;
  padding-left: 10px;
  border-left: 5px solid #eee;
  font-size: 1.2rem;
`;

const StoryBodyWrapper = styled(motion.div)`
  height: 0;
  width: 100%;
  overflow: hidden;
`;

const StoryBody = styled.div`
  padding-left: 16px;
`;
