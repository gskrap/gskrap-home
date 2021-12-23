import React, { useContext } from 'react';
import {GlobalContext} from '../context/globalContext';

interface OwnProps {
  num? :number;
}

const Box = ({ num = 0 }: OwnProps) => {
  const { theme, themeToggle } = useContext(GlobalContext);
  return (
    <div className="box border">
      <div className="top-bar">
        <div className="pts">Box name goes here</div>
        <div className="min-btn border">_</div>
      </div>
      <div className="content">
        number is:&nbsp;
        {num}
        <br />
        theme is:&nbsp;
        {theme}
        <div>
          <button onClick={themeToggle}>toggle</button>
        </div>
      </div>
    </div>
  )
};

export default Box;
