export interface IStyleOptions {
  [key: string]: string
}

export const color: IStyleOptions = {
  red: '#ff0000',
  fuchsia: '#ff009f',
  deeppink: '#ff1493',
  orchid: '#da70d6',
  black: '#000000',
  darkBlack: 'rgb(41,44,50)',
  lightBlack: 'rgb(60, 71, 86)',
  white: '#ffffff',
  darkslategray: '#2f4f4f',
  lightslategray: '#778899 ',
  slategray: '#708090',
  gray: '#656a77',
  darkgray: '#a9a9a9',
  darkWhite: 'rgb(237,241,242)',
  lightgrey: '#d3d3d3',
  gainsboro: '#dcdcdc',
  green: 'rgb(14, 128, 64)',
  dodgerblue: '#1e90ff',
  lightBlue: 'rgb(82, 166, 228)',
  lightskyblue: '#87cefa',
  orange: 'rgb(255,90,0)',
};

export const fontSize: IStyleOptions = {
  xxs: '10px',
  xs: '12px',
  sm: '14px',
  regular: '15px',
  md: '17px',
  lg: '18px',
  xg: '20px',
  xxg: '30px',
  h3: '38px',
  h2: '45px',
  h1: '52px',
};

export const fontWeight: IStyleOptions = {
  thin: '100',
  light: '300',
  medium: '400',
  normal: '500',
  bold: '700',
  bolder: '900',
};
