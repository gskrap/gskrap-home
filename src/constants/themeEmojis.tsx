import React from 'react';
import {ThemeVariant} from './interfaces';
import {ReactNode} from 'react';

export const themeEmojiOptionMap: Record<ThemeVariant, ReactNode> = {
  [ThemeVariant.DARK]: <option key={ThemeVariant.DARK} value={ThemeVariant.DARK}>&#127770;</option>,
  [ThemeVariant.DEFAULT]: <option key={ThemeVariant.DEFAULT} value={ThemeVariant.DEFAULT}>&#127760;</option>,
  [ThemeVariant.OCEAN]: <option key={ThemeVariant.OCEAN} value={ThemeVariant.OCEAN}>&#x1F30A;</option>,
  [ThemeVariant.VALENTINE]: <option key={ThemeVariant.VALENTINE} value={ThemeVariant.VALENTINE}>&#128150;</option>,
}
