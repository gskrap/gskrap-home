import { CommonThemeVariables, Theme, ThemeVariant } from './interfaces';

export const GSKRAP_THEME = 'GSKRAP_THEME';

const blueDark = '#1b007d';
const blueLight = '#0081d1';
const offWhite = '#EAE8E8';
const grayDark = '#322F36';
const grayLight = '#BFBFBF';
const black = '#000000';
const white = '#FFFFFF';

const common: CommonThemeVariables = {
  blueDark,
  blueLight,
  grayDark,
  grayLight,
  black,
  white,
}

export const darkTheme: Theme = {
  common,
  variant: {
    asciiColor: white,
    color: white,
    colorHighlight: '#f2d055',
    appBackground: grayDark,
    boxBackground: grayLight,
    headerBackground: black,
    headerColor: white,
    boxTopBarBackground: `-webkit-linear-gradient(left, ${black} 18%, ${grayDark} 100%)`,
    boxContentBackground: black,
    boxContentColor: white,
    selectBackground: grayLight,
  }
}

export const defaultTheme: Theme = {
  common,
  variant: {
    asciiColor: white,
    color: white,
    colorHighlight: blueLight,
    appBackground: offWhite,
    boxBackground: grayLight,
    headerBackground: grayDark,
    headerColor: white,
    boxTopBarBackground: `-webkit-linear-gradient(left, ${blueDark} 18%, ${blueLight} 100%)`,
    boxContentBackground: black,
    boxContentColor: white,
    selectBackground: offWhite,
  }
}

export const oceanTheme: Theme = {
  common,
  variant: {
    asciiColor: white,
    color: white,
    colorHighlight: '#f2d055',
    appBackground: '#1C2541',
    boxBackground: '#3A506B',
    headerBackground: '#0B132B',
    headerColor: '#3A506B',
    boxTopBarBackground: `-webkit-linear-gradient(left, #1C2541 18%, #3A506B 100%)`,
    boxContentBackground: black,
    boxContentColor: white,
    selectBackground: '#3A506B',
  }
}

export const valentineTheme: Theme = {
  common,
  variant: {
    asciiColor: '#C00000',
    color: black,
    colorHighlight: '#C00000',
    appBackground: offWhite,
    boxBackground: '#FFBBC1',
    headerBackground: '#C00000',
    headerColor: white,
    boxTopBarBackground: `-webkit-linear-gradient(left, #C00000 18%, #FFBBC1 100%)`,
    boxContentBackground: '#FFDEE3',
    boxContentColor: black,
    selectBackground: '#FFDEE3',
  }
}

export const themeMap: Record<ThemeVariant, Theme> = {
  [ThemeVariant.DARK]: darkTheme,
  [ThemeVariant.DEFAULT]: defaultTheme,
  [ThemeVariant.OCEAN]: oceanTheme,
  [ThemeVariant.VALENTINE]: valentineTheme,
}
