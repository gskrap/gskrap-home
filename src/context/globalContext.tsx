import React, { useState, ReactNode} from "react";

export enum Theme {
  WINDOWS = 'WINDOWS',
  MAC = 'MAC',
}

interface ThemeContext {
  theme: Theme;
  themeToggle?: () => void;
}

const defaultState = {
  theme: Theme.WINDOWS,
};

export const GlobalContext = React.createContext<ThemeContext>(defaultState);

interface OwnProps {
  children: ReactNode
}

const GlobalContextProvider = ({ children }: OwnProps) => {
  const [theme, setTheme] = useState(Theme.WINDOWS);

  const themeToggle = () => {
    setTheme(theme === Theme.WINDOWS ? Theme.MAC : Theme.WINDOWS);
  };

  return (
    <GlobalContext.Provider value={{ theme, themeToggle }} >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
