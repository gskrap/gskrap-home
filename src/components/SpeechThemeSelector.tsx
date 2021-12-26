import React, { useContext } from 'react';
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
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const ThemeItem = styled.li`
  color: ${({ theme }) => theme.variant.color};
  &.active {
    color: ${({ theme }) => theme.variant.colorHighlight};
  }
`
const SpeechThemeSelector = () => {
  const { variant, selectVariant } = useContext(AppContext);

  const onButtonClick = () => {
    recognition.start();
  }

  recognition.onresult = (event: any) => {
    const theme = event.results[0][0].transcript.toUpperCase();
    if (theme in ThemeVariant) {
      selectVariant(theme);
    }
  }

  recognition.onspeechend = () => {
    recognition.stop();
  }

  recognition.onnomatch = () => {
    console.error('theme not recognized');
  }

  recognition.onerror = () => {
    console.error('error occurred in theme recognition');
  }

  return (
    <div>
      press the button, then say a theme, where theme is one of:
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
      <button onClick={onButtonClick}>
        click me
      </button>
    </div>
  )
};

export default SpeechThemeSelector;
