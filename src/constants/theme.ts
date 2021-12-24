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

export const macTheme: Theme = {
  common,
  variant: {
    boxBackground: 'red',
    boxTopBarBackground: 'red',
    background: blueLight,
    color: blueDark,
    contentBackground: 'red',
    contentColor: black,
  }
}

export const windowsTheme: Theme = {
  common,
  variant: {
    boxBackground: grayLight,
    boxTopBarBackground: `-webkit-linear-gradient(left, ${blueDark} 18%, ${blueLight} 100%)`,
    background: grayDark,
    color: white,
    contentBackground: black,
    contentColor: white,
  }
}

export const themeMap: Record<Variant, Theme> = {
  [Variant.MAC]: macTheme,
  [Variant.WINDOWS]: windowsTheme,
}
