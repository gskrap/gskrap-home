export enum Variant {
  WINDOWS = 'WINDOWS',
  MAC = 'MAC',
}

export interface Context {
  variant: Variant;
  variantToggle?: () => void;
}

export interface CommonVariables {
  blueDark: string;
  blueLight: string;
  grayDark: string;
  grayLight: string;
  black: string;
  white: string;
}

export interface VariantVariables {
  boxBackground: string;
  boxTopBarBackground: string;
  background: string;
  color: string;
  contentBackground: string;
  contentColor: string;
}

export interface Theme {
  common: CommonVariables,
  variant: VariantVariables,
}
