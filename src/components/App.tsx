import React from 'react';
import Box from './Box';
import '../styles/App.scss';
import GlobalContextProvider from '../context/globalContext';

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="App">
        <header className="phxl">george skrapits</header>
        <div className="maxl">
          <Box num={99} />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
