import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from './App';

const HeaderEl= styled.header`
  font-family: Honda_Regular;
  font-size: 40px;
  ${({ theme }) => `
    color: ${theme.variant.color};
    background: ${theme.variant.background};
  `};
`;

const Header = () => {
  const { variantToggle } = useContext(AppContext);

  return (
    <>
      <HeaderEl className="phxl">
        george skrapits
      </HeaderEl>
      <div className="maxl">
        <button onClick={variantToggle}>toggle theme</button>
      </div>
    </>
  )
};

export default Header;
