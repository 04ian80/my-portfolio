import { skillData as data } from '../data/SkillData';

export const SkillInit = {
  current: data[0].id,
};

export const SkillReducer = (state, action) => {
  const WIDTH = -300;
  switch (action.type) {
    case 1:
      return {
        current: WIDTH * 0,
      };
    case 2:
      return {
        current: WIDTH * 1,
      };
    case 3:
      return {
        current: WIDTH * 2,
      };
    case 4:
      return {
        current: WIDTH * 3,
      };
    case 5:
      return {
        current: WIDTH * 4,
      };
    case 6:
      return {
        current: WIDTH * 5,
      };
    case 'PREV':
      return {
        current: state.current === 0 ? -1500 : state.current + Math.abs(WIDTH),
      };
    case 'NEXT':
      return {
        current: state.current === -1500 ? 0 : state.current - Math.abs(WIDTH),
      };
    default:
      break;
  }
};
