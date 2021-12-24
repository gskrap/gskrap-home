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
  @media (max-width: 700px) {
    font-size: 6px;
  };
`;

const Fish = () => (
  <AsciiEl>
    &nbsp;                         |<br />
    &nbsp;                         i<br />
    &nbsp;                        ,n.<br />
    &nbsp;                        dmb<br />
    &nbsp;                      .d#v%b.<br />
    &nbsp;           ......,,,,o##mnv%oo,,,.......<br />
    &nbsp;     .,o@@####mmmmmnmnnnnnnnnnvvvvvvvvv%%%,,.<br />
    &nbsp;   ,@@#######mmmmmnmnnnnnnnnnvnvvvvvvvvv%%%%%%.<br />
    &nbsp;  d########m#mmmmnmnnnnnnnnnnnvnvvvvvvv%v%%%%%%,             ,<br />
    &nbsp; ,@#######m#mmmmmmnmnnnnnnnnnvnvvvvvvvvv%v%%%%%%.            %<br />
    &nbsp; @########m#mmmmmmmnnnnnnnnnnnvnvvvvvvvvv%v%%%%%%           ;%:<br />
    &nbsp;.@#######mmmmmmmmmnmnnnnnnnnnvnvvvvvvvvv%v%%%%%%%.        .;%%%<br />
    &nbsp;i########mP'    `YmnnnnnnnnnnnvnP'    'Yv%v%%%%%%;      ,%%%%%;<br />
    &nbsp;i#######mm    o   nnnnnnnnnnnvnv   o    %v%%%%%%%; .::::%:%%%%'<br />
    &nbsp;i#######mmb.    ,dnnnnnnnnnnnnvnb.    ,dv%v%%%%%%;..:::::%:%%'<br />
    &nbsp;`@#####m#mmmmmmmmmnnnnnnnnnnnvnvnvvvvvvv%v%%%%%%%'.:::::%:%%%<br />
    &nbsp; @######mmmmmmmmmnmnnnnnnnnnnnvnvvvvvvvvv%v%%%%%% .::::::%:%%,<br />
    &nbsp; P#######mmmmmmmnmnnnnnnnnnnnvnvnvvvvvvv%v%%%%%%;..:::::%:%%%%.<br />
    &nbsp; `@#####m#mmmmmmmnmnnnnnnnnnnnvnvvvvvvv%v%v%%%%%'       `%%%%%%<br />
    &nbsp;  P######m#mmmmmmmnnnnnnnnnnnvnvnvvvvv%v%v%%%%%;           %%%%;<br />
    &nbsp;   @######m;""vvmnmnnnnnnnnnnnnvvvvv"";%v%%%%%%'            `%%:<br />
    &nbsp;    @####mmmmo,.     v   '   v    .,ov%v%%%%%%'               %'<br />
    &nbsp;     Y@#####m#mmmb^aa..  A  ..a^dvv%v%v%%%%%%'                `<br />
    &nbsp;      `Y@@#m##mmmmnmnnnnnnnnnvnvvvvv%v%%%%%"'<br />
    &nbsp;         `""Y8@@@nmnnnnnnnnnvnvvvv%%%"""'<br />
    &nbsp;                 '''''""""""'''''<br />
  </AsciiEl>
);

const Heart = () => (
  <AsciiEl>
    &nbsp;         ▒▒▒▒▒▒▒▒▒▒<br />
    &nbsp;        ▒███████████▒<br />
    &nbsp;       ▒████▒▒▒▒▒▒▒███▒<br />
    &nbsp;      ▒████▒▒▒▒▒▒▒▒▒███▒        ▒▒▒▒▒▒<br />
    &nbsp;      ▒███▒▒▒▒▒███▒▒▒███▒      ▒██████▒<br />
    &nbsp;      ▒███▒▒▒▒██████▒▒███▒    ▒██▒▒▒▒██▒<br />
    &nbsp;      ▒███▒▒▒███████▒▒██▒   ▒███▒▒█▒▒██▒<br />
    &nbsp;       ▒███▒▒████████▒██▒ ▒███▒▒███▒▒██▒<br />
    &nbsp;        ▒██▒▒██████████▒▒███▒▒████▒▒██▒<br />
    &nbsp;        ▒██▒▒██████████████▒████▒▒██▒<br />
    &nbsp;         ▒██▒▒█████████████████▒▒██▒<br />
    &nbsp;          ▒██▒▒██████████████▒▒██▒<br />
    &nbsp;           ▒██▒▒████████████▒▒██▒<br />
    &nbsp;           ▒██▒▒██████████▒▒██▒<br />
    &nbsp;           ▒██▒▒████████▒▒██▒<br />
    &nbsp;            ▒██▒▒██████▒▒██▒<br />
    &nbsp;            ▒██▒▒████▒▒██▒<br />
    &nbsp;             ▒██▒▒███▒▒█▒<br />
    &nbsp;              ▒██▒▒█▒▒█▒<br />
    &nbsp;              ▒██▒▒▒█▒<br />
    &nbsp;              ▒██▒█▒<br />
    &nbsp;              ▒██▒█▒<br />
    &nbsp;               ██▒█<br />
    &nbsp;                █▒<br />
    &nbsp;                ▒<br />
  </AsciiEl>
);

const Moon = () => (
  <AsciiEl>
    &nbsp;                   .------.<br />
    &nbsp;              .---'  o     `--.<br />
    &nbsp;             '    .            `-.<br />
    &nbsp;          .-'   @@@@@@ .          -.<br />
    &nbsp;        .'@@ @@@@@@@@@@  @@@@@@  .  `.<br />
    &nbsp;     /@@@  o @@@@@@@@@@ @@@@@@@        \<br />
    &nbsp;    /        @@@@@@@@@@  @@@@@@@ @@   .  \<br />
    &nbsp;   /@  o     @@@@@@@@@@@@ @@@@@@@@@@   @@ \<br />
    &nbsp;  /@@@      . @@@@@@ o @ @@@@@@@@@@@o @@@@ \<br />
    &nbsp; /@@@@@                  @@@@@@@@@@@  @@@@@ \<br />
    &nbsp; |@@@@@    O  `.-./  .  . @@@@@@@@@@   @@@  |<br />
    &nbsp;/ @@@@@      --`-'         @@@@@@@@@@@@    . \<br />
    &nbsp;|  .     @   @       o       @@  o  @@@@@.   |<br />
    &nbsp;\     @    @     @          @@@     @@@      /<br />
    &nbsp; |  @    @  @             . @@@        .    |<br />
    &nbsp; \ .  o        @@@@  .       @@ .         . /<br />
    &nbsp;  \      @@@  @@@@@@                 o     /<br />
    &nbsp;   \    @@@@@ @@\@@      O         .      /<br />
    &nbsp;     \      .   . \.-.-             -'   /<br />
    &nbsp;      `.           `-'                .'<br />
    &nbsp;        `.        / | `    O    .   .'<br />
    &nbsp;          `-.    /  |  o           .-'<br />
    &nbsp;             .             .    .-'<br />
    &nbsp;              `---.         .--'<br />
    &nbsp;                   `------'<br />
  </AsciiEl>
);

const themeAsciiMap: Record<ThemeVariant, JSX.Element> = {
  [ThemeVariant.DARK]: <Moon />,
  [ThemeVariant.DEFAULT]: <Earth />,
  [ThemeVariant.OCEAN]: <Fish />,
  [ThemeVariant.VALENTINE]: <Heart />,
}

const Ascii = () => {
  const { variant } = useContext(AppContext);
  return themeAsciiMap[variant];
}

export default Ascii;
