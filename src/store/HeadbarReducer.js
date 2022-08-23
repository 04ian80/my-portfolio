import * as palette from '../style/Variables';

// iconColor
export const initIconColor = {
  githubColor: palette.subFontColor,
  velogColor: palette.subFontColor,
  gmailColor: palette.subFontColor,
};

export const iconColorReducer = (state, action) => {
  switch (action.type) {
    case 'GITHUB':
      return {
        ...state,
        githubColor: palette.githubColor,
      };
      break;
    case 'VELOG':
      return {
        ...state,
        velogColor: palette.velogColor,
      };
      break;
    case 'GMAIL':
      return {
        ...state,
        gmailColor: palette.gmailColor,
      };
      break;
    case 'DEFAULT':
      return {
        githubColor: palette.subFontColor,
        velogColor: palette.subFontColor,
        gmailColor: palette.subFontColor,
      };
      break;
    default:
      break;
  }
};
