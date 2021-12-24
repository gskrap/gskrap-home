import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from './App';
import {themeMap} from '../constants/theme';
import {ThemeVariant} from '../constants/interfaces';

const HeaderEl= styled.header`
  font-family: Honda_Regular;
  font-size: 40px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => `
    color: ${theme.variant.headerColor};
    background: ${theme.variant.headerBackground};
  `};
`;

const Header = () => {
  const { variant, setVariant } = useContext(AppContext);

  return (
    <>
      <HeaderEl className="phxl">
        george skrapits
        {setVariant && (
          <div>
            <select value={variant} onChange={(e) => setVariant(e.target.value as ThemeVariant)}>
              {Object.keys(themeMap).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>
        )}
      </HeaderEl>
    </>
  )
};

export default Header;
