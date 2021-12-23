import React from 'react';
import Box from './Box';
import '../styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="phxl">george skrapits</header>
      <div className="maxl">
        <Box num={99} />
      </div>
    </div>
  );
}

export default App;
