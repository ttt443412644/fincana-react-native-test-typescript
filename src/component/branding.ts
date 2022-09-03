//https://stackoverflow.com/questions/15490560/create-an-enum-with-string-values
export class Enum<T> {
  public constructor(public readonly value: T) {}
  public toString() {
    return (this.value as any).toString();
  }
}

//https://github.com/blablacar/ui-library/blob/master/src/_utils/branding.ts
interface Color {
  [propName: string]: string;
}

const palette: Color = {
  white: "#FFF",
  gray: "#DDD",
  //  lightGray: "#EDEDED",
  midnightGreen: "#054752",
  lightMidnightGreen: "#708C91",
  blue: "#00AFF5",
  darkBlue: "#008FC1",
  green: "#5DD167",
  orange: "#F78B00",
  yellow: "#FFCA0C",
  red: "#F53F5B",
  lightRed: "#FDD8DE",

  lightBlue: "#A1EEFF",
  lime: "#33CC00",
  black: "#262B32",
  lightGray: "#F1F1F1",
};

type Font = {
  [key: string]: {
    size: number;
    lineHeight: number;
  };
};

export const font: Font = {
  s: {
    size: 10,
    lineHeight: 16,
  },
  base: {
    size: 12,
    lineHeight: 20,
  },
  m: {
    size: 18,
    lineHeight: 20,
  },
  l: {
    size: 21,
    lineHeight: 24,
  },
  xl: {
    size: 30,
    lineHeight: 30, //Math.floor((32 / 30) * 100) / 100
  },
  xxl: {
    size: 40,
    lineHeight: 40,
  },
};

type defaultFontWeight = {
  [key: string]:
    | "400"
    | "500"
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "600"
    | "700"
    | "800"
    | "900";
};

export const fontWeight: defaultFontWeight = {
  regular: "400",
  medium: "500",
  bold: "bold",
};

type defaultNumberBranding = {
  [key: string]: number;
};

export const space: defaultNumberBranding = {
  none: 0,
  s: 4,
  m: 8,
  l: 16,
  xl: 24,
  xxl: 48,
};

export const radius: defaultNumberBranding = {
  none: 0,
  s: 4,
  m: 8,
  l: 16,
  xl: 24,
};

export const delay = {
  timeout: {
    base: "400ms",
  },
  interval: {
    base: "100ms",
  },
};

export const componentSizes = {
  timeWidth: 48,
  buttonIconSize: 56,
  bulletSize: 10,
  bulletSizeSmall: 8,
  bulletSizeMap: 18,
  roadWidth: 4,
  smallSectionWidth: 662,
  largeSectionWidth: 1016,
};

export const modalSize = {
  s: 400,
  m: 662,
  l: 928,
};

export const shadow = {
  //default: '0 2px 4px rgba(0, 0, 0, .3)'
  default: {
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 1,
  },

  //card: '0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08)'
  card: {
    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },

    elevation: 1,
  },
  icon: "0 0 2px rgba(0, 0, 0, .3)",
};

export const inputBorderSize = {
  default: 1,
  focus: 1, //3
};

export const color: Color = {
  primary: palette.lime,
  accent: palette.blue,
  // primaryText: palette.midnightGreen,
  primaryText: palette.lightGray,
  secondaryText: palette.lightBlue, //.lightMidnightGreen,
  fadedText: palette.gray,
  textWithBackground: palette.white,

  //  lightBlueText: "red", // palette.lightBlue,

  border: palette.gray,
  disabled: palette.lightGray,
  divider: palette.lightGray,

  blackText: palette.black,

  icon: palette.lightMidnightGreen,
  iconHighlight: palette.midnightGreen,
  facebookBrand: "#4267B2",
  vkBrand: "#4680C2",

  link: palette.blue,
  defaultBackground: palette.white,
  lightBackground: palette.lightGray,
  inputBackground: palette.lightGray,
  pushBackground: palette.midnightGreen,
  warningBackground: palette.midnightGreen,
  successBackground: palette.green,
  inputBorder: palette.lightGray,
  inputBorderFocus: palette.blue,
  inputError: palette.lightRed,
  inputPlaceholder: palette.lightMidnightGreen,
  inputCaret: palette.blue,
  hover: palette.lightGray,

  success: palette.green,
  info: palette.blue,
  danger: palette.red,
  white: palette.white,

  proximityClose: palette.green,
  proximityMiddle: palette.yellow,
  proximityFar: palette.orange,
  proximityDisabled: palette.lightGray,

  priceLow: palette.green,
  priceMedium: palette.orange,
  priceHigh: palette.red,

  primaryActive: palette.darkBlue,
  secondaryActive: palette.gray,

  polylinePrimary: "#3D5C62",
  polylineStrokePrimary: palette.midnightGreen,
  polylineSecondary: palette.gray,
  polylineStrokeSecondary: palette.lightMidnightGreen,

  tapHighlight: "rgba(221, 221, 221, .4)", // gray, 40%
};

export default {
  color,
  font,
  fontWeight,
  space,
  radius,
  shadow,
};
