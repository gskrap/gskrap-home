import React, { useContext } from 'react';
import styled from 'styled-components';
import Earth from './EarthAscii';
import { AppContext } from '../App';
import {ThemeVariant} from '../../constants/interfaces';

export const AsciiEl = styled.p`
  margin: 26px auto;
  width: fit-content;
  font-size: 10px;
  white-space: pre;
  color: ${({ theme }) => theme.variant.asciiColor};
  @media (max-width: 700px) {
    font-size: 6px;
  };
`;

const Heart = () => (
  <AsciiEl>
    &nbsp;<br />
    &nbsp;<br />
    &nbsp;   ▒▒▒▒▒▒▒▒▒▒<br />
    &nbsp;  ▒███████████▒<br />
    &nbsp; ▒████▒▒▒▒▒▒▒███▒<br />
    &nbsp;▒████▒▒▒▒▒▒▒▒▒███▒        ▒▒▒▒▒▒<br />
    &nbsp;▒███▒▒▒▒▒███▒▒▒███▒      ▒██████▒<br />
    &nbsp;▒███▒▒▒▒██████▒▒███▒    ▒██▒▒▒▒██▒<br />
    &nbsp;▒███▒▒▒███████▒▒██▒   ▒███▒▒█▒▒██▒<br />
    &nbsp; ▒███▒▒████████▒██▒ ▒███▒▒███▒▒██▒<br />
    &nbsp;  ▒██▒▒██████████▒▒███▒▒████▒▒██▒<br />
    &nbsp;  ▒██▒▒██████████████▒████▒▒██▒<br />
    &nbsp;   ▒██▒▒█████████████████▒▒██▒<br />
    &nbsp;    ▒██▒▒██████████████▒▒██▒<br />
    &nbsp;     ▒██▒▒████████████▒▒██▒<br />
    &nbsp;     ▒██▒▒██████████▒▒██▒<br />
    &nbsp;     ▒██▒▒████████▒▒██▒<br />
    &nbsp;      ▒██▒▒██████▒▒██▒<br />
    &nbsp;      ▒██▒▒████▒▒██▒<br />
    &nbsp;       ▒██▒▒███▒▒█▒<br />
    &nbsp;        ▒██▒▒█▒▒█▒<br />
    &nbsp;        ▒██▒▒▒█▒<br />
    &nbsp;        ▒██▒█▒<br />
    &nbsp;        ▒██▒█▒<br />
    &nbsp;         ██▒█<br />
    &nbsp;          █▒<br />
    &nbsp;          ▒<br />
    &nbsp;<br />
    &nbsp;<br />
  </AsciiEl>
);

const Moon = () => (
  <AsciiEl>
    &nbsp;<br />
    &nbsp;<br />
    &nbsp;<br />
    &nbsp;<br />
    &nbsp;<br />
    &nbsp;               ____....<br />
    &nbsp;           a#####~:::::::,                   |<br />
    &nbsp;       a######P";:::::::::::,        .     --*--<br />
    &nbsp;    a########:::::::::::::::::,              |        .<br />
    &nbsp;   ########P::::::::::::*:::::::    .                         .<br />
    &nbsp;  ########P::::::::::::::::::.:::.<br />
    &nbsp; ##### ##P:::::::::::::::::::::::;.               *<br />
    &nbsp;.#### O ##:::::*:::::::::::::::.::;.<br />
    &nbsp;###### #### ::::::::::::::::::.:::::<br />
    &nbsp;########@###,::::::::::::::::::::::;<br />
    &nbsp;#########~~~:::::::::::::::*:::.:::;    \\ /            .        .<br />
    &nbsp; ##### ##:::::::::::::::::::::::::;     / \\     .<br />
    &nbsp;  ####a__ay::::::::::::::::::::::;<br />
    &nbsp;   ########;::::::::::::::::::::;      .               .<br />
    &nbsp;    ########a::::::::::::::::::'            .         .      *         .<br />
    &nbsp;      ########.:::::::::*;:::'             .                        . .<br />
    &nbsp;       `d######a.::::::::::'                                    .  .<br />
    &nbsp;          `~9#####.::::''           .               .            .<br />
    &nbsp;<br />
    &nbsp;<br />
    &nbsp;<br />
    &nbsp;<br />
    &nbsp;<br />
    &nbsp;<br />
  </AsciiEl>
);

const themeAsciiMap: Record<ThemeVariant, JSX.Element> = {
  [ThemeVariant.DARK]: <Moon />,
  [ThemeVariant.DEFAULT]: <Earth />,
  [ThemeVariant.OCEAN]: <Earth />,
  [ThemeVariant.VALENTINE]: <Heart />,
}

const Ascii = () => {
  const { variant } = useContext(AppContext);
  return themeAsciiMap[variant];
}

export default Ascii;
