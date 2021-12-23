import React, { useState, ReactNode} from "react";

export enum Theme {
  NOT_WINDOWS = 'NOT_WINDOWS',
  NOT_MAC = 'NOT_MAC',
}

interface ThemeContext {
  theme: Theme;
  themeToggle?: () => void;
}

const defaultState = {
  theme: Theme.NOT_WINDOWS,
};

export const GlobalContext = React.createContext<ThemeContext>(defaultState);

interface OwnProps {
  children: ReactNode
}

const GlobalContextProvider = ({ children }: OwnProps) => {
  const [theme, setTheme] = useState(Theme.NOT_WINDOWS);

  const themeToggle = () => {
    setTheme(theme === Theme.NOT_WINDOWS ? Theme.NOT_MAC : Theme.NOT_WINDOWS);
  };

  return (
    <GlobalContext.Provider value={{ theme, themeToggle }} >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
