import React, { useReducer } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SVG } from '../../icon/SVG';
import * as palette from '../../style/Variables';
import { skillData as data } from '../../data/SkillData';
import { SkillInit, SkillReducer } from '../../store/SkillReducer';
import { CaretLeft, CaretRight } from 'react-bootstrap-icons';

export function Skills() {
  const [state, dispatch] = useReducer(SkillReducer, SkillInit);

  return (
    <>
      <SkillContainer id='skill'>
        <SkillHeader>
          <Title>
            <h2>기술스택</h2>
          </Title>
        </SkillHeader>

        <SkillCard>
          <SkillList>
            {data.map((d) => (
              <motion.div
                key={d.id}
                onClick={() => {
                  dispatch({ type: d.id });
                  console.log(state.current);
                }}
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.1 }}
              >
                <SVG
                  animate={true}
                  name={d.svg.name}
                  color={d.svg.color}
                  size='35px'
                ></SVG>
              </motion.div>
            ))}
          </SkillList>

          <SkillWrapper>
            <SkillDesc>
              {data.map((d) => (
                <EachCard
                  key={d.id}
                  style={{
                    transform: `translateX(${state.current}px)`,
                    transition: '300ms',
                  }}
                >
                  <SkillIcon>
                    <SVG
                      animate={true}
                      name={d.svg.name}
                      color={d.svg.color}
                      size='35px'
                    ></SVG>
                    <span>{d.skillName}</span>
                  </SkillIcon>
                  <div>{d.description}</div>
                </EachCard>
              ))}
            </SkillDesc>

            <ControlBtn>
              <PrevSlideBtn
                onClick={() => {
                  dispatch({ type: 'PREV' });
                  console.log(state.current);
                }}
              />
              <NextSlideBtn
                onClick={() => {
                  dispatch({ type: 'NEXT' });
                  console.log(state.current);
                }}
              />
            </ControlBtn>
          </SkillWrapper>
        </SkillCard>
      </SkillContainer>
    </>
  );
}

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #fafafa;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 8rem 4rem 2rem;
`;

const Title = styled.div`
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

const SkillCard = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin-bottom: 15px;
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
  overflow: hidden;
  margin-left: 15px;
  border: 2px solid ${palette.brownColor};
  border-radius: ${palette.defaultRadius};
`;

const SkillDesc = styled.div`
  display: flex;
`;

const EachCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  /* transform: translateX(-300px); */
`;

const SkillIcon = styled.div`
  margin: 10px 0 0 10px;
`;

const ControlBtn = styled.div`
  position: absolute;
  bottom: 0px;
  width: 300px;
  height: 50px;
  padding: 30px 0;
  border-top: 2px solid ${palette.brownColor};
  /* background-color: pink; */

  & > * {
    position: absolute;
    color: ${palette.brownColor};
    font-size: 50px;
    /* background-color: teal; */
  }
`;

const PrevSlideBtn = styled(CaretLeft)`
  left: 80px;
`;

const NextSlideBtn = styled(CaretRight)`
  right: 80px;
`;
