import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Box from './Box';
import Header from './Header';
import {macTheme, windowsTheme} from '../constants/theme';
import {Context, Variant} from '../constants/interfaces';
import '../styles/App.scss';

export const VariantContext = React.createContext<Context>({ variant: Variant.WINDOWS });

const App = () => {
  const [variant, setVariant] = useState(Variant.WINDOWS);

  const variantToggle = () => {
    setVariant(variant === Variant.WINDOWS ? Variant.MAC : Variant.WINDOWS);
  };

  return (
    <VariantContext.Provider value={{ variant, variantToggle }} >
      <ThemeProvider theme={ variant === Variant.MAC ? macTheme : windowsTheme}>
        <div className="App">
          <Header />
          <div className="maxl">
            <Box />
          </div>
        </div>
      </ThemeProvider>
    </VariantContext.Provider>
  );
}

export default App;
