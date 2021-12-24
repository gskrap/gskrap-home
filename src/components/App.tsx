import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Box from './Box';
import Header from './Header';
import { themeMap } from '../constants/theme';
import { VariantContext, Variant } from '../constants/interfaces';
import '../styles/App.scss';

export const AppContext = React.createContext<VariantContext>({ variant: Variant.WINDOWS });

const App = () => {
  const [variant, setVariant] = useState(Variant.WINDOWS);
  const variantToggle = () => setVariant(variant === Variant.WINDOWS ? Variant.MAC : Variant.WINDOWS);
  const theme = themeMap[variant];

  return (
    <AppContext.Provider value={{ variant, variantToggle }} >
      <ThemeProvider theme={theme}>
        <Header />
        <div className="maxl">
          <Box />
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
