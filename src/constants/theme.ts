import { CommonThemeVariables, Theme, Variant } from './interfaces';

const blueDark = '#1b007d';
const blueLight = '#0081d1';
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
    appBackground: grayDark,
    boxBackground: grayLight,
    boxTopBarBackground: `-webkit-linear-gradient(left, ${black} 18%, ${grayDark} 100%)`,
    headerBackground: black,
    headerColor: white,
    boxContentBackground: black,
    boxContentColor: white,
  }
}

export const defaultTheme: Theme = {
  common,
  variant: {
    appBackground: white,
    boxBackground: grayLight,
    boxTopBarBackground: `-webkit-linear-gradient(left, ${blueDark} 18%, ${blueLight} 100%)`,
    headerBackground: grayDark,
    headerColor: white,
    boxContentBackground: black,
    boxContentColor: white,
  }
}

export const valentineTheme: Theme = {
  common,
  variant: {
    appBackground: white,
    boxBackground: 'red',
    boxTopBarBackground: 'red',
    headerBackground: 'red',
    headerColor: white,
    boxContentBackground: 'pink',
    boxContentColor: black,
  }
}

export const themeMap: Record<Variant, Theme> = {
  [Variant.DARK]: darkTheme,
  [Variant.DEFAULT]: defaultTheme,
  [Variant.VALENTINE]: valentineTheme,
}
