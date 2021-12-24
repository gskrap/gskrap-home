import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from './App';
import {themeMap} from '../constants/theme';
import {ThemeVariant} from '../constants/interfaces';
import {themeEmojiOptionMap} from '../constants/themeEmojis';

const HeaderEl = styled.header`
  font-family: Honda_Regular;
  font-size: 40px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => `
    color: ${theme.variant.headerColor};
    background: ${theme.variant.headerBackground};
  `};
`;

const Select = styled.select`
  width: 60px;
  height: 40px;
  font-size: 34px;
  text-align: center;
  ${({ theme }) => `
    background: ${theme.variant.selectBackground};
  `};
`;

const Header = () => {
  const { variant, selectVariant } = useContext(AppContext);

  return (
    <>
      <HeaderEl className="fac phxl">
        george skrapits
        {selectVariant && (
          <Select value={variant} onChange={(e) => selectVariant(e.target.value as ThemeVariant)}>
            {Object.keys(themeMap).map((key) => themeEmojiOptionMap[key as ThemeVariant])}
          </Select>
        )}
      </HeaderEl>
    </>
  )
};

export default Header;
