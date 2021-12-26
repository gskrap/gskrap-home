import React, { useContext } from 'react';
import styled from 'styled-components';
import Earth from './art/Earth';
import Heart from './art/Heart';
import Moon from './art/Moon';
import { AppContext } from '../App';
import {ThemeVariant} from '../../constants/interfaces';

export const AsciiEl = styled.p`
  margin: 26px auto;
  width: fit-content;
  font-size: 10px;
  white-space: pre;
  color: ${({ theme }) => theme.variant.asciiColor};
  @media (max-width: 700px) {
    font-size: 6px;
  };
`;

const themeAsciiMap: Record<ThemeVariant, JSX.Element> = {
  [ThemeVariant.DARK]: <Moon />,
  [ThemeVariant.DEFAULT]: <Earth />,
  [ThemeVariant.NEPTUNE]: <Earth />,
  [ThemeVariant.VALENTINE]: <Heart />,
}

const Ascii = () => {
  const { variant } = useContext(AppContext);
  return themeAsciiMap[variant];
}

export default Ascii;
