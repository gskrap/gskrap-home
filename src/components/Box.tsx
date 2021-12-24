import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from './App';

const BoxEl = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 600px;
  padding: 4px;
  background: ${({ theme }) => theme.variant.boxBackground};
`;

const TopBar = styled.div`
  margin-bottom: 4px;
  padding: 2px 2px 2px 8px;
  color: white;
  display: flex;
  justify-content: space-between;
  cursor: grab;
  background: ${({ theme }) => theme.variant.boxTopBarBackground};
}`;

const Btn = styled.div`
  font-size: 12px;
  color: black;
  box-sizing: border-box;
  height: 18px;
  width: 20px;
  margin: 2px;
  text-align: center;
  cursor: pointer;
  background: ${({ theme }) => theme.variant.boxBackground};
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 8px;
  ${({ theme }) => `
    color: ${theme.variant.boxContentColor};
    background: ${theme.variant.boxContentBackground};
  `};
`;

const Box = () => {
  const { variant } = useContext(AppContext);

  return (
    <BoxEl className="border">
      <TopBar>
        <div className="pts">Box name goes here</div>
        <Btn className="border">_</Btn>
      </TopBar>
      <Content>
        theme is:&nbsp;
        {variant}
      </Content>
    </BoxEl>
  )
};

export default Box;
