import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Box from './Box';
import Header from './Header';
import { themeMap } from '../constants/theme';
import { VariantContext, Variant } from '../constants/interfaces';
import '../styles/App.scss';

const AppWrapper = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.variant.appBackground};
`;

export const AppContext = React.createContext<VariantContext>({ variant: Variant.DEFAULT });

const App = () => {
  const [variant, setVariant] = useState(Variant.DEFAULT);
  const theme = themeMap[variant];

  return (
    <AppContext.Provider value={{ variant, setVariant }} >
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
