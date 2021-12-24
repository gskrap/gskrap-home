export enum Variant {
  WINDOWS = 'WINDOWS',
  MAC = 'MAC',
}

export interface VariantContext {
  variant: Variant;
  variantToggle?: () => void;
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
  boxBackground: string;
  boxTopBarBackground: string;
  background: string;
  color: string;
  contentBackground: string;
  contentColor: string;
}

export interface Theme {
  common: CommonThemeVariables,
  variant: VariantThemeVariables,
}
