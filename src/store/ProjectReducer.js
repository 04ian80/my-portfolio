import * as palette from '../style/Variables';

export const initCategory = {
  btnColor: {
    all: palette.greenColor,
    side: palette.deeperWhite,
    mini: palette.deeperWhite,
  },
  fontColor: {
    all: palette.bgColor,
    side: palette.fontColor,
    mini: palette.fontColor,
  },
  fontBold: {
    all: '700',
    side: null,
    mini: null,
  },
  category: ['사이드 프로젝트', '미니 프로젝트'],
};

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'SIDE':
      return {
        btnColor: {
          all: palette.deeperWhite,
          side: palette.greenColor,
          mini: initCategory.btnColor.mini,
        },
        fontColor: {
          all: palette.fontColor,
          side: palette.bgColor,
          mini: initCategory.fontColor.mini,
        },
        fontBold: {
          all: null,
          side: '700',
          mini: null,
        },
        category: '사이드 프로젝트',
      };
    case 'MINI':
      return {
        btnColor: {
          all: palette.deeperWhite,
          side: initCategory.btnColor.side,
          mini: palette.greenColor,
        },
        fontColor: {
          all: palette.fontColor,
          side: initCategory.fontColor.side,
          mini: palette.bgColor,
        },
        fontBold: {
          all: null,
          side: null,
          mini: '700',
        },
        category: '미니 프로젝트',
      };
    case 'ALL':
      return {
        ...initCategory,
      };
    default:
      return;
  }
};
