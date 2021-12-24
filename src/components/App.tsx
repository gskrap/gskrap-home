import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import Box from './Box';
import About from './About';
import {GSKRAP_THEME, themeMap} from '../constants/theme';
import { ThemeContext, ThemeVariant } from '../constants/interfaces';
import '../styles/App.scss';

const AppWrapper = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.variant.appBackground};
`;

const BoxContainer = styled.div`
  padding: 16px;
  position: relative;
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
          <BoxContainer>
            <Box name="About" >
              <About />
            </Box>
          </BoxContainer>
        </AppWrapper>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
