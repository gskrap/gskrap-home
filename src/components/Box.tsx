import React, {useContext} from 'react';
import {GlobalContext, Theme} from '../context/globalContext';
import styled from 'styled-components';

const BLUE_DARK = '#1b007d';
const BLUE_LIGHT = '#0081d1';
const GRAY = '#BFBFBF';

interface ThemeProps {
  theme: Theme;
}

const BoxDiv = styled.div<ThemeProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: ${GRAY};
  height: 450px;
  width: 600px;
  padding: 4px;
  ${({ theme }) => {
    switch(theme) {
      case (Theme.WINDOWS):
        return `
          border: 20px solid green
        `;
      case (Theme.MAC):
        return `
          border: 20px solid red
        `;
    }
  }}
`;

const TopBar = styled.div`
  margin-bottom: 4px;
  padding: 2px 2px 2px 8px;
  background: ${BLUE_DARK}; /* Old browsers */
  background: -moz-linear-gradient(left, ${BLUE_DARK} 18%, ${BLUE_LIGHT} 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, ${BLUE_DARK} 18%, ${BLUE_LIGHT} 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, ${BLUE_DARK} 18%, ${BLUE_LIGHT} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  color: white;
  display: flex;
  justify-content: space-between;
  cursor: grab;
`;

const Btn = styled.div`
  background: ${GRAY};
  font-size: 12px;
  color: black;
  box-sizing: border-box;
  height: 18px;
  width: 20px;
  margin: 2px;
  text-align: center;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  // todo: temp
  background: black;
  color: white;
  padding: 8px 16px;
`;

interface OwnProps {
  num? :number;
}

const Box = ({ num = 0 }: OwnProps) => {
  const { theme, themeToggle } = useContext(GlobalContext);
  return (
    <BoxDiv theme={theme} className="border">
      <TopBar>
        <div className="pts">Box name goes here</div>
        <Btn className="border">_</Btn>
      </TopBar>
      <Content>
        number is:&nbsp;
        {num}
        <br />
        theme is:&nbsp;
        {theme}
        <div>
          <button onClick={themeToggle}>toggle</button>
        </div>
      </Content>
    </BoxDiv>
  )
};

export default Box;
