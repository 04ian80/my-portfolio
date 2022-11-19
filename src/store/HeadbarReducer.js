import * as palette from '../style/Variables';

// iconColor
export const initIconColor = {
  githubColor: palette.subFontColor,
  velogColor: palette.subFontColor,
  gmailColor: palette.subFontColor,
  telColor: palette.subFontColor,
};

export const iconColorReducer = (state, action) => {
  switch (action.type) {
    case 'GITHUB':
      return {
        ...state,
        githubColor: palette.githubColor,
      };
    case 'VELOG':
      return {
        ...state,
        velogColor: palette.velogColor,
      };
    case 'GMAIL':
      return {
        ...state,
        gmailColor: palette.gmailColor,
      };
    case 'TEL':
      return {
        ...state,
        telColor: palette.telColor,
      };
    case 'DEFAULT':
      return {
        ...initIconColor,
      };
    default:
      break;
  }
};
