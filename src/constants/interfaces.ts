export enum ThemeVariant {
  DEFAULT = 'DEFAULT',
  DARK = 'DARK',
  VALENTINE = 'VALENTINE',
}

export interface ThemeContext {
  variant: ThemeVariant;
  selectVariant?: (variant: ThemeVariant) => void;
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
  boxBackground: string;
  boxTopBarBackground: string;
  headerBackground: string;
  headerColor: string;
  boxContentBackground: string;
  boxContentColor: string;
}

export interface Theme {
  common: CommonThemeVariables,
  variant: VariantThemeVariables,
}
