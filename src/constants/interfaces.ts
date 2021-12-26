export enum ThemeVariant {
  DARK = 'DARK',
  DEFAULT = 'DEFAULT',
  OCEAN = 'OCEAN',
  VALENTINE = 'VALENTINE',
}

export interface ThemeContext {
  variant: ThemeVariant;
  selectVariant: (variant: ThemeVariant) => void;
}

export interface CommonThemeVariables {
  blueDark: string;
  blueLight: string;
  grayDark: string;
  grayLight: string;
  black: string;
  white: string;
}

export interface VariantThemeVariables {
  appBackground: string;
  asciiColor: string;
  boxBackground: string;
  boxContentBackground: string;
  boxContentColor: string;
  boxTopBarBackground: string;
  buttonColor: string;
  color: string;
  colorHighlight: string;
  headerBackground: string;
  headerColor: string;
  selectBackground: string;
}

export interface Theme {
  common: CommonThemeVariables,
  variant: VariantThemeVariables,
}
