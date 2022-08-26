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
      break;
    case 2:
      return {
        current: WIDTH * 1,
      };
      break;
    case 3:
      return {
        current: WIDTH * 2,
      };
      break;
    case 4:
      return {
        current: WIDTH * 3,
      };
      break;
    case 5:
      return {
        current: WIDTH * 4,
      };
      break;
    case 6:
      return {
        current: WIDTH * 5,
      };
      break;
    case 'PREV':
      return {
        current: state.current >= -0 ? -1500 : state.current + Math.abs(WIDTH),
      };
      break;
    case 'NEXT':
      return {
        current: state.current <= -1499 ? 1 : state.current - Math.abs(WIDTH),
      };
      break;
    default:
      return;
      break;
  }
};
