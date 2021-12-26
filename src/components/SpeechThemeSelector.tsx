import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import { AppContext } from './App';
import {ThemeVariant} from '../constants/interfaces';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
    SpeechGrammarList: any;
    webkitSpeechGrammarList: any;
  }
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

const themes = Object.values(ThemeVariant);
const grammar = '#JSGF V1.0; grammar themes; public <theme> = ' + themes.join(' | ') + ' ;'

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.continuous = false;
recognition.interimResults = false;
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.maxAlternatives = 1;

const ThemeItem = styled.li`
  color: ${({ theme }) => theme.variant.color};
  &.active {
    color: ${({ theme }) => theme.variant.colorHighlight};
  }
`;

const ButtonBar = styled.div`
  padding: 8px;
  ${({ theme }) => `
    background: ${theme.variant.boxBackground};
    border-top: 1px solid ${theme.common.grayLight};
  `};
`;

const Button = styled.button`
  cursor: pointer;
  ${({ theme }) => `
    color: ${theme.variant.buttonColor};
    background: ${theme.variant.boxBackground};
  `};
 `;

const SpeechThemeSelector = () => {
  const [disabled, setDisabled] = useState(false);
  const { variant, selectVariant } = useContext(AppContext);

  const onButtonClick = () => {
    recognition.start();
    setDisabled(true);
  }

  recognition.onresult = (event: any) => {
    const theme = event.results[0][0].transcript.toUpperCase();
    if (theme in ThemeVariant) {
      selectVariant(theme);
    }
    setDisabled(false);
  }

  recognition.onspeechend = () => {
    recognition.stop();
    setDisabled(false);
  }

  recognition.onnomatch = () => {
    console.error('theme not recognized');
    setDisabled(false);
  }

  recognition.onerror = () => {
    console.error('error occurred in theme recognition');
    setDisabled(false);
  }

  return (
    <>
      <div className="paxl">
        press the button, then say a theme:
        <ol>
          {themes.map((theme) => (
            <ThemeItem
              key={theme}
              className={theme === variant ? 'active' : ''}
            >
              {theme.toLowerCase()}
            </ThemeItem>
          ))}
        </ol>
      </div>
      <ButtonBar className="fdr fjc">
        <Button className="pvl phxxl" onClick={onButtonClick} disabled={disabled}>
          click me
        </Button>
      </ButtonBar>
    </>
  )
};

export default SpeechThemeSelector;
