import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Box from './Box';
import Header from './Header';
import {GSKRAP_THEME, themeMap} from '../constants/theme';
import { ThemeContext, ThemeVariant } from '../constants/interfaces';
import '../styles/App.scss';

const AppWrapper = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.variant.appBackground};
`;

export const AppContext = React.createContext<ThemeContext>({ variant: ThemeVariant.DEFAULT });

const App = () => {
  const initialVariant = localStorage.getItem(GSKRAP_THEME) as ThemeVariant || ThemeVariant.DEFAULT;
  const [variant, setVariant] = useState(initialVariant);
  const theme = themeMap[variant];

  const selectVariant = (newVariant: ThemeVariant) => {
    localStorage.setItem(GSKRAP_THEME, newVariant);
    setVariant(newVariant);
  }

  return (
    <AppContext.Provider value={{ variant, selectVariant }} >
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header />
          <div className="maxl">
            <Box />
          </div>
        </AppWrapper>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
