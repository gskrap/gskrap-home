import React, { ReactNode } from 'react';
import styled from 'styled-components';

const BoxEl = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 4px;
  background: ${({ theme }) => theme.variant.boxBackground};
  @media (max-width: 700px) {
    width: initial;
  };
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
  font-family: Terminal_Vector;
  ${({ theme }) => `
    color: ${theme.variant.boxContentColor};
    background: ${theme.variant.boxContentBackground};
  `};
`;

interface BoxProps {
  children: ReactNode;
  name: string;
}

const Box = ({ children, name }: BoxProps) => {
  return (
    <BoxEl className="border">
      <TopBar>
        <div className="pts">{name}</div>
        <Btn className="border">_</Btn>
      </TopBar>
      <Content>
        {children}
      </Content>
    </BoxEl>
  )
};

export default Box;
