import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Ascii = styled.p`
  font-size: 12px;
  white-space: pre;
  @media (max-width: 700px) {
    font-size: 6px;
  };
`;

const EarthFrame1 = () => (
  <Ascii>
    &nbsp;                       .-/+ossooooooo+/:.<br />
    &nbsp;                 `:osydhyo++:     :yyyyydN@ho:`<br />
    &nbsp;              :sho:``.       .+o``d@h./N@@@@@@@@s:<br />
    &nbsp;           -s@dd-           :--@s@@@@@@@@@@@@@@@@@Ny:<br />
    &nbsp;         /dho`.              ///N@yy::@@@@N+y@dNhd@N@@+`<br />
    &nbsp;       /ho`                 `@@@/-   `:::sdosNdd@@@o@@@N+<br />
    &nbsp;     .h+                   :o@@@@@@@@/:---:::::o@@@@@@@@@@-<br />
    &nbsp;    /h.                 `+s@@@@@@@@@@@@@@@@@@@@dy@@@@Nd@@@@o<br />
    &nbsp;   oy`                  :@@@@@@@@@@@@@@@@@@@@@@Nyyo@@@yNdsh@s<br />
    &nbsp;  +h:                 -od@@@@@@@@@@@@@@@@@@@@@@@@N.y@@@@@:`+@s<br />
    &nbsp; -@``                 y@@@@@@@@@@@@@@@@@@@@@@@@@@@N@-d@@N-``o@:<br />
    &nbsp; h/                   y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@h--.```.s@<br />
    &nbsp;.NN@y.`                 hh@@@@@@dhhhN@@@@@@@@@@@@@@@@@@@s````-N:<br />
    &nbsp;/dN@@@o`                 `yyyyyy    syN@@@@@@@@@@@@@@@@h+`````so<br />
    &nbsp;o@@@@@@s//                            h@@@@@@@@@@@@@Nd+-``````oy<br />
    &nbsp;+N@@@@@@@No++                         h@@@@@@@@@@@@@d:.```````ss<br />
    &nbsp;.N@@@@@@@@@@@`                        /+N@@@@@@@@@@@s`````````d:<br />
    &nbsp; dh@@@@@@@@N/`                          @@@@@@@@@@@@/````````:@<br />
    &nbsp; -@o@@@@@@@@-                         yh@@@@@@@@@@@N.ydy````.d/<br />
    &nbsp; oy:@@@@@NNs                         ./@@@@@@@@@N-.:@N:````sy<br />
    &nbsp;   syh@@@@d`                           o@@@@@@@Nd+``y+`````oy<br />
    &nbsp;    +hh@@@N-                           oh@@@@Nd/`````````.ys<br />
    &nbsp;     -hhN@@`                            oN+++:-`````````/d:<br />
    &nbsp;       +ddd.                            ..````````````:yo`<br />
    &nbsp;        `+@d:                             ``````````/yo`<br />
    &nbsp;           :yh/                         `````````:sy/<br />
    &nbsp;             `/ss+-                   ```````-+ss/`<br />
    &nbsp;                ./oss+:-`   `-::::///++oyyso/.<br />
    &nbsp;                      `-:+oooyhhhhhyso+/-`
  </Ascii>
);

const EarthFrame2 = () => (
  <Ascii>
    &nbsp;                       .-/+ossooooooo+/:.<br />
    &nbsp;                 `:osydhhs++/.    ./hsyyh@@ho:`<br />
    &nbsp;              :sdy:` .`       .+o .@@y.o@@@@@@@@s:<br />
    &nbsp;           -sNh@o`           ::.@y@@@@@@@@@@@@@@@@Ny:<br />
    &nbsp;         /dds-``              -//@Nyy+-N@@@N+h@@Nh@N@@+`<br />
    &nbsp;       /ds.                   d@@s:   `:::odssNd@@@hy@@N+<br />
    &nbsp;     .ho`                   -:N@@@@@@@y:---::::/o@@@NN@@@@-<br />
    &nbsp;    /d.                   :o@@@@@@@@@@@@@@@@@@@@@y@@@@N@@@@o<br />
    &nbsp;   oh`                    d@@@@@@@@@@@@@@@@@@@@@@yho@@@y@hyNs<br />
    &nbsp;  +h-`                  +o@@@@@@@@@@@@@@@@@@@@@@@@@-o@@@@@.:@s<br />
    &nbsp; -@``                  `@@@@@@@@@@@@@@@@@@@@@@@@@@@N@:h@@d.`-@:<br />
    &nbsp; h/ `                  .d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@d--.```/@<br />
    &nbsp;.Ny@@+.`                 :h@@@@@@Nhhhd@@@@@@@@@@@@@@@@@@@o````@:<br />
    &nbsp;/hh@@@@+`                  -yyyyyo   `yh@@@@@@@@@@@@@@@@h/````so<br />
    &nbsp;oh@@@@@@s//                            `@@@@@@@@@@@@@@@o-`````oy<br />
    &nbsp;+h@@@@@@@@@o++.                        `@@@@@@@@@@@@@N/.``````ss<br />
    &nbsp;.N@@@@@@@@@@@@+                        `+s@@@@@@@@@@@d````````d:<br />
    &nbsp; doN@@@@@@@@@+-                          :@@@@@@@@@@@o```````:@<br />
    &nbsp; -@-@@@@@@@@@+                         :h@@@@@@@@@@@@-s@s```.d/<br />
    &nbsp;  oy d@@@@@@Nd                         `.d@@@@@@@@@/.:N@-```sy<br />
    &nbsp;   sy+@@@@@d`                           `N@@@@@@@ds``s/````oy<br />
    &nbsp;    +h+N@@@@-                           -yN@@@Ndo````````.ys<br />
    &nbsp;     -hod@@h                             -@s++/-````````/d:<br />
    &nbsp;       +hy@o                             `-```````````:yo`<br />
    &nbsp;        `+h@+                             ``````````/yo`<br />
    &nbsp;           :yd+`                        `````````:sy/<br />
    &nbsp;             `/ss+- `                 ```````-+ss/`<br />
    &nbsp;                 ./osyo:-`   ``:::////++osyso/.<br />
    &nbsp;                      `-:+oooyhhhhhyso+/-`
  </Ascii>
);

const EarthFrame3 = () => (
  <Ascii>
    &nbsp;                      .-/+osysoooooo+/:.<br />
    &nbsp;                 `:osyhdhy+++:`    -sdyhh@@ho:`<br />
    &nbsp;              :odd/` `.        -oo -N@o.y@@@@@@@s:<br />
    &nbsp;           -sN@h@:            -:`Ny@@@@@@@@@@@@@@@Ny:<br />
    &nbsp;         /dNyo .               .//h@yyo-d@@@Nod@@@hNN@+`<br />
    &nbsp;       /@y:                    +@@d:`  `-//+dyoNd@@Nyd@N+<br />
    &nbsp;     .dy.                    `:y@@@@@@@@:---::::/o@@@@@@@@-<br />
    &nbsp;    /d-                    `oy@@@@@@@@@@@@@@@@@@@NyN@@@@N@@o<br />
    &nbsp;   oh.                     :@@@@@@@@@@@@@@@@@@@@@@yhoN@NhNy@s<br />
    &nbsp;  +h`/                   .oh@@@@@@@@@@@@@@@@@@@@@@@@/o@@@@o.hs<br />
    &nbsp; -@```                   o@@@@@@@@@@@@@@@@@@@@@@@@@@N@/h@@s`.@:<br />
    &nbsp; ho ``                   odN@@@@@@@@@@@@@@@@@@@@@@@@@@@@--.``:@<br />
    &nbsp;.N/@@@:.`                  ohN@@@@@@hhh@@@@@@@@@@@@@@@@@@@/```d:<br />
    &nbsp;/h/@@@@@+.                   +yyyyy:   /yd@@@@@@@@@@@@@@Ny:```so<br />
    &nbsp;oyd@@@@@@y//.                            +@@@@@@@@@@@@@@o-````oy<br />
    &nbsp;+hh@@@@@@@@@y++/                         +@@@@@@@@@@@@@/.`````ss<br />
    &nbsp;.No@@@@@@@@@@@@d                         -+d@@@@@@@@@@@```````d:<br />
    &nbsp; d/y@@@@@@@@@@y:                           h@@@@@@@@@@y``````:@<br />
    &nbsp; -@`o@@@@@@@@@y                          shN@@@@@@@@@@:s@+``.d/<br />
    &nbsp;  oy -@@@@@@@@N.                         ./@@@@@@@@@+.:Nd.``sy<br />
    &nbsp;   sy.@@@@@@@`                            s@@@@@@@@y``s:```oy<br />
    &nbsp;    +h-d@@@@@-                            s@@@@@ds```````.ys<br />
    &nbsp;     -h/o@@@s                             `@h++/-```````/d:<br />
    &nbsp;       +h+d@:                             `-``````````:yo`<br />
    &nbsp;        `+ydy.                            ``````````/yo`<br />
    &nbsp;           :sdo.                        `````````:sy/<br />
    &nbsp;             `/ss+-                   ```````-+ss/`<br />
    &nbsp;                 ./ooyo/-`    `.:::///++ooyso/.<br />
    &nbsp;                      `-:+oooshhhhhyso+/-`
  </Ascii>
);

const EarthFrame4 = () => (
  <Ascii>
    &nbsp;                       .-/+osyyoooooo+/:.<br />
    &nbsp;                 `:osyydhhs++/.     :hhhhd@ho:`<br />
    &nbsp;              :odN+.  ``        -o+ /NN/-@@@@@@@s:<br />
    &nbsp;           -s@Nydy.            -:`Ny@@@@@@@@@@@@@@Ny:<br />
    &nbsp;         /dNhs: .               `//s@hys-d@@@No@NNd@N@+`<br />
    &nbsp;       /@do`                    .@@@/.  `-//+dysNhN@dhNN+<br />
    &nbsp;     .dd:                      -/@@@@@@@@/---::://o@@@@@@@-<br />
    &nbsp;    /@:                      :oN@@@@@@@@@@@@@@@@@@NyN@@@@@@o<br />
    &nbsp;   oy-                       h@@@@@@@@@@@@@@@@@@@@@hhoN@d@dds<br />
    &nbsp;  +d --                    /oN@@@@@@@@@@@@@@@@@@@@@@@+o@@@N-ys<br />
    &nbsp; -@` .                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@/h@@:.d:<br />
    &nbsp; hs ```                    d@@@@@@@@@@@@@@@@@@@@@@@@@@@@d--.`:@<br />
    &nbsp;.N.d@@N--`                   hh@@@@@@dhhdN@@@@@@@@@@@@@@@@N-``d:<br />
    &nbsp;/h`d@@@@@o.                    yyyyyy`   shN@@@@@@@@@@@@@@y-``so<br />
    &nbsp;oy+@@@@@@@h//-                             @@@@@@@@@@@@@@o.```oy<br />
    &nbsp;+h/@@@@@@@@@@@+++`                         @@@@@@@@@@@@@/.````ss<br />
    &nbsp;.N.@@@@@@@@@@@@@@:                         +o@@@@@@@@@@N``````d:<br />
    &nbsp; d/:@@@@@@@@@@@@/.                          -@@@@@@@@@@y`````:@<br />
    &nbsp; -@`.@@@@@@@@@@N`                         -h@@@@@@@@@@@:y@:`.d/<br />
    &nbsp;  oy  s@@@@@@@@@/                         `.d@@@@@@@@o./Ny``sy<br />
    &nbsp;   sy +@@@@@@N.                            .@@@@@@@@y`.y.``oy<br />
    &nbsp;    +h`/@@@@@@:                            /h@@@@ds``````.ys<br />
    &nbsp;     -h/-@@@@o                              yd++/-``````/d:<br />
    &nbsp;       +h:oNh-                             `-.````````:yo`<br />
    &nbsp;        `+ysdo                            ``````````/yo`<br />
    &nbsp;           :shs-                        `````````:sy/<br />
    &nbsp;             `/ss+-                   ```````-+ss/`<br />
    &nbsp;                 ./ooys/-`    ``-::///++oosso/.<br />
    &nbsp;                      `-:+oooshhhhhyso+/-`
  </Ascii>
);

const EarthFrame5 = () => (
  <Ascii>
    &nbsp;                       .-/+osyyoooooo+/:.<br />
    &nbsp;                 `:ossyyhyy+++-`    `o@ydddho:`<br />
    &nbsp;              :oyNy.   .`        -o+`+@@:/N@@@@@s:<br />
    &nbsp;           -s@Nhy@+`            -:`@y@@@@@@@@@@@@@Ny:<br />
    &nbsp;         /d@@ss```                //o@dys:h@@@@oNNNdN@+`<br />
    &nbsp;       /@Ns-                      d@@s-   -+/+dysNh@Nh@N+<br />
    &nbsp;     .dN+.                      `:d@@@@@@@s---::://s@@@@@@-<br />
    &nbsp;    /@s                       `oy@@@@@@@@@@@@@@@@@@@h@@@NN@o<br />
    &nbsp;   oy-`                       -@@@@@@@@@@@@@@@@@@@@@hhs@@hNhs<br />
    &nbsp;  +@  +`                    `oy@@@@@@@@@@@@@@@@@@@@@@@+s@@@oys<br />
    &nbsp; -N.  .                     :@@@@@@@@@@@@@@@@@@@@@@@@@@@/@@d.d:<br />
    &nbsp; hs.````                    :d@@@@@@@@@@@@@@@@@@@@@@@@@@@h--`:@<br />
    &nbsp;.N /@@@N--`                   -hd@@@@@Nhhd@@@@@@@@@@@@@@@@@d``d:<br />
    &nbsp;/h /@@@@@@s-                    .yyyyys   -hd@@@@@@@@@@@@@@s.`so<br />
    &nbsp;oy @@@@@@@@@///                             :@@@@@@@@@@@@@+.``oy<br />
    &nbsp;+h @@@@@@@@@@@@o++:                         :@@@@@@@@@@@@/.```ss<br />
    &nbsp;.N y@@@@@@@@@@@@@@h                         .+d@@@@@@@@@N`````d:<br />
    &nbsp; d/`y@@@@@@@@@@@@o:                           h@@@@@@@@@y````:@<br />
    &nbsp; -@``/@@@@@@@@@@@+                          sh@@@@@@@@@@-hd..d/<br />
    &nbsp;  oy  `d@@@@@@@@@h                          .o@@@@@@@@o.o@/`sy<br />
    &nbsp;   sy  h@@@@@@@-                             d@@@@@@@y`.s``oy<br />
    &nbsp;    +h``h@@@@@@/                            .y@@@@ds`````.ys<br />
    &nbsp;     -h/ o@@@@o                             `o@++/-`````/d:<br />
    &nbsp;       +h:-dNy.                            ``-.```````:yo`<br />
    &nbsp;        `+y/sd-                           ``````````/yo`<br />
    &nbsp;           :syy/`                       `````````:sy/<br />
    &nbsp;             `/ss+-                   ```````-+ss/`<br />
    &nbsp;                 ./oosy+-`     `.::///++oosso/.<br />
    &nbsp;                      `-:+ooosyhhhhyso+/-`
  </Ascii>
);

const EarthFrame6 = () => (
  <Ascii>
    &nbsp;                       .-/+osyysooooo+/:.<br />
    &nbsp;                 `:osshohhhs++/.     :dddddho:`<br />
    &nbsp;              :os@@:`  `.         :o/`s@h-s@@@@@s:<br />
    &nbsp;           -sNNdyy@/             -: @y@@@@@@@@@@@@Ny:<br />
    &nbsp;         /dN@d++ ``                :/+@@yy:h@@@dsNN@@@+`<br />
    &nbsp;       /@@d+`                      o@@d:   .+++dys@d@@dN+<br />
    &nbsp;     .d@h-                        -o@@@@@@@d:--::://y@@N@@-<br />
    &nbsp;    /@d.                        :oN@@@@@@@@@@@@@@@@@Nh@@@N@o<br />
    &nbsp;   oy`:                         y@@@@@@@@@@@@@@@@@@@@yhy@@@@s<br />
    &nbsp;  +d.  o                      :o@@@@@@@@@@@@@@@@@@@@@@@/h@@@ys<br />
    &nbsp; -@-   `                      y@@@@@@@@@@@@@@@@@@@@@@@@N@/N@/d:<br />
    &nbsp; h+/ ````                     odN@@@@@@@@@@@@@@@@@@@@@@@@@s-.:@<br />
    &nbsp;.N `y@@@N--.                    +h@@@@@@@hddN@@@@@@@@@@@@@@@+`d:<br />
    &nbsp;/h `y@@@@@@h:`                    /yyyyy/  `ohN@@@@@@@@@@@@d/`so<br />
    &nbsp;oy /@@@@@@@@@+//-                             h@@@@@@@@@@@@/``oy<br />
    &nbsp;+h :@@@@@@@@@@@@h+++`                         d@@@@@@@@@@@/```ss<br />
    &nbsp;.N `@@@@@@@@@@@@@@@@:                         /s@@@@@@@@@@````d:<br />
    &nbsp; d/ -N@@@@@@@@@@@@d/.                          /@@@@@@@@@o```:@<br />
    &nbsp; -@` `s@@@@@@@@@@@@                          :h@@@@@@@@@N:@o.d/<br />
    &nbsp;  oy   .N@@@@@@@@@@.                         `-N@@@@@@@+.yh.sy<br />
    &nbsp;   sy  .N@@@@@@@+`                            o@@@@@@ds`:/`oy<br />
    &nbsp;    +h` -N@@@@@No                            `sN@@@ds````.ys<br />
    &nbsp;     -h/ .d@@@@s`                            `/N++/-````/d:<br />
    &nbsp;       +h: +N@y`                           ```..``````:yo`<br />
    &nbsp;        `+y/:@y`                          ``````````/yo`<br />
    &nbsp;           :sss+:                       `````````:sy/<br />
    &nbsp;             `/ss+-                   ```````-+ss/`<br />
    &nbsp;                 ./oooys:.     ``::///++oosso/.<br />
    &nbsp;                      `-:+ooooshhhhyso+/-`
  </Ascii>
);

const EarthFrame7 = () => (
  <Ascii>
    &nbsp;                       .-/+osyyyooooo+/:.<br />
    &nbsp;                 `:osshsohhho++..    `sNd@dyo:`<br />
    &nbsp;              :osh@s.   .`         :o/-yNs:d@@@@s:<br />
    &nbsp;           -s@Nddyhd-             -:`dy@@@@@@@@@@@Ny:<br />
    &nbsp;         /d@@@y+/ `                 ./+NNyy/h@@@hh@@d@+`<br />
    &nbsp;       /@@@s:                       -@@N/`  .o++dshdNNd@+<br />
    &nbsp;     .d@N/.                        .:N@@@@@@@:-:::://d@@@@-<br />
    &nbsp;    /@ho                         `oh@@@@@@@@@@@@@@@@@Nd@@NNo<br />
    &nbsp;   oy`-`                         .@@@@@@@@@@@@@@@@@@@@yhd@dNs<br />
    &nbsp;  +h:  .o                       os@@@@@@@@@@@@@@@@@@@@@@:@@Nds<br />
    &nbsp; -N+`  ``                       N@@@@@@@@@@@@@@@@@@@@@@@Ndo@yd:<br />
    &nbsp; h//.`````                      d@@@@@@@@@@@@@@@@@@@@@@@@@N/-:@<br />
    &nbsp;.N  :d@@@@:--                     yh@@@@@@ddd@@@@@@@@@@@@@@@N.d:<br />
    &nbsp;/h  -d@@@@@@N:.                     syyyyy` `.hd@@@@@@@@@@@@h.so<br />
    &nbsp;oy  h@@@@@@@@@y///                             :@@@@@@@@@@@h-`oy<br />
    &nbsp;+h  y@@@@@@@@@@@@@+++/                         :@@@@@@@@@@@:``ss<br />
    &nbsp;.N  +@@@@@@@@@@@@@@@@@                         -o@@@@@@@@@y```d:<br />
    &nbsp; d/ `/@@@@@@@@@@@@@@+/                         ``N@@@@@@@@/``:@<br />
    &nbsp; -@`  .h@@@@@@@@@@@@/                         `hd@@@@@@@@d/@-d/<br />
    &nbsp;  oy    -@@@@@@@@@@@s                         `-h@@@@@@@/-d+sy<br />
    &nbsp;   sy   /@@@@@@@@h`                           `-@@@@@@d+`+.oy<br />
    &nbsp;    +h`  /@@@@@@@s`                          ``+@@@@do```.ys<br />
    &nbsp;     -h/  :N@@@@s`                          ```:@+//.```/d:<br />
    &nbsp;       +h: .h@@y`                         `````..`````:yo`<br />
    &nbsp;        `+y/`sN+                          ``````````/yo`<br />
    &nbsp;           :ss/o+.                      `````````:sy/<br />
    &nbsp;             `/ss+-                   ```````-+ss/`<br />
    &nbsp;                 ./ooooy/.      `.:///++oosso/.<br />
    &nbsp;                      `-:+oooosyhhhyso+/-`
  </Ascii>
);

const EarthFrame8 = () => (
  <Ascii>
    &nbsp;                                         .-/+osyyysoooo+/:.
    &nbsp;                                   `:ossyh/shhy++/``   `:d@ddyo:`
    &nbsp;                                :sysdh/`  ```         /o::d@o+N@@@s:
    &nbsp;                             -s@@@ddsdh.             -/`dyN@@@@@@@@@Ny:
    &nbsp;                           /d@@Nd+o- `                 `/+@@hy/h@@@y@N@d+`
    &nbsp;                         /@@@@o.                       `@@@+`  .o+ododdN@d+
    &nbsp;                       .d@@h-`                         :y@@@@@NN/:::::/+NN@@-
    &nbsp;                      /@hh.                          :o@@@@@@@@@@@@@@@@@N@@@No
    &nbsp;                     od` /                           s@@@@@@@@@@@@@@@@@@@yhN@Ns
    &nbsp;                    +@:`  -o                       -sd@@@@@@@@@@@@@@@@@@@@N/@@Ns
    &nbsp;                   -@s.   ``                       /@@@@@@@@@@@@@@@@@@@@@@@NydNd:
    &nbsp;                  h/`o ``````                     -d@@@@@@@@@@@@@@@@@@@@@@@@d-/@
    &nbsp;                  .N   /@@@@@+--`                    -hd@@@@@NhddN@@@@@@@@@@@@@+d:
    &nbsp;                  /h   :N@@@@@@@+:                     .yyyhho ``ohN@@@@@@@@@@N/so
    &nbsp;                  oy   N@@@@@@@@@N///-                             @@@@@@@@@@Ns.oy
    &nbsp;                  +h   @@@@@@@@@@@@@@h+++.                       ``@@@@@@@@@@h-`ss
    &nbsp;                  .N   h@@@@@@@@@@@@@@@@@o                       ``+h@@@@@@@@+``d:
    &nbsp;                   d/  .o@@@@@@@@@@@@@@d/-                        ``y@@@@@@@N.`:@
    &nbsp;                   -@`   .@@@@@@@@@@@@@@                        ` odN@@@@@@@syod/
    &nbsp;                    oy     :@@@@@@@@@@@@`                       ``-o@@@@@@N-+hsy
    &nbsp;                     sy    o@@@@@@@@N-`                        ```.@@@@@@h:./oy
    &nbsp;                      +h`   s@@@@@@@h-                         ```/d@@@h/``.ys
    &nbsp;                       -h/   o@@@@@y.                         ````:@+/:.``/d:
    &nbsp;                         +h:  -@@dy.                        ``````..````:yo`
    &nbsp;                          `+y/ .@@:                         ``````````/yo`
    &nbsp;                             :ss:/s/                      `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+ss-`     ``:///++oosso/.
    &nbsp;                                        `-:+oooosyhhhyso+/-`
  </Ascii>
);

const EarthFrame9 = () => (
  <Ascii>
    &nbsp;                                         .-/+osyyysoooo+/:.
    &nbsp;                                   `:osssh+:ydhs++-.   `.sN@dyo:`
    &nbsp;                                :shoshy-   ``         `/o:+@d+y@@@s:
    &nbsp;                             -s@@@dNhsdy`             -/`hyN@@N@@@@@Ny:
    &nbsp;                           /d@N@Nh/o. `                  /+@@hy+d@@@hN@d+`
    &nbsp;                         /@@@@h+`                        y@@s. `.ooodod@N@+
    &nbsp;                       .d@@No.                          .+@@@@NNN+:-:::/s@N@-
    &nbsp;                      /Ndyy                           `od@@@@@@@@@@@@@@@@@N@No
    &nbsp;                     oN- .:                           `N@@@@@@@@@@@@@@@@@@hhNNs
    &nbsp;                    +N-/   :o                        +sN@@@@@@@@@@@@@@@@@@@hs@@s
    &nbsp;                   -@s:`   ``                        h@@@@@@@@@@@@@@@@@@@@@@@s@N:
    &nbsp;                   h/`:/ ````.`                      odN@@@@@@@@@@@@@@@@@@@@@@o/@
    &nbsp;                  .N   `oN@@@@y--.                     +h@@@@@@ddd@@@@@@@@@@@@@dd:
    &nbsp;                  /h    :@@@@@@@@h:`                     /yhhhh- .:h@@@@@@@@@@@hso
    &nbsp;                  oy   .@@@@@@@@@@@s///                           ``o@@@@@@@@@@:oy
    &nbsp;                  +h   `@@@@@@@@@@@@@@@o+++                       ``s@@@@@@@@@o`ss
    &nbsp;                  .N    @@@@@@@@@@@@@@@@@@@.                      ``/s@@@@@@@@.`d:
    &nbsp;                   d/   -s@@@@@@@@@@@@@@@s/`                      ```/@@@@@@@h`:@
    &nbsp;                   -@`   `-@@@@@@@@@@@@@@+                      ` `:dN@@@@@@@+hd/
    &nbsp;                    oy      -@@@@@@@@@@@@s                      ```./@@@@@@h.hhy
    &nbsp;                     sy     s@@@@@@@@@o.                       `````h@@@@Ny./sy
    &nbsp;                      +h`    h@@@@@@@do                        ````-d@@Ny-`.ys
    &nbsp;                       -h/    y@@@@@h:                        `````:d//:.`/d:
    &nbsp;                         +h:   +N@dh.                       ```````..```:yo`
    &nbsp;                          `+y/  /@d-                        ``````````/yo`
    &nbsp;                             :ss:.os-                     `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+/y/`     ``.://++oosso/.
    &nbsp;                                        `-:+oooooyhhhyso+/-`
  </Ascii>
);

const EarthFrame10 = () => (
  <Ascii>
    &nbsp;                                        .-/+osyyyyoooo+/:.
    &nbsp;                                   `:osyysy-+ddh++/ .  `./@Ndyo:`
    &nbsp;                                :sds+yds`   ``         `++:s@y+@@@s:
    &nbsp;                             -s@NNd@Nyo@y`             -:`hyN@NN@@@@Ny:
    &nbsp;                           /d@@d@@h:o. `                  /+d@hyo@@@dd@@+`
    &nbsp;                         /@@@@@s/                         +@@h-``-soshyd@N+
    &nbsp;                       .d@@@@/.                          `:N@@NNNNo:-:://d@@-
    &nbsp;                      /Ndhy+                            /s@@@@@@@@@@@@@@@@@@@o
    &nbsp;                     o@+  -.                            o@@@@@@@@@@@@@@@@@hd@Ns
    &nbsp;                    +No--   :s                        `sh@@@@@@@@@@@@@@@@@@@oN@s
    &nbsp;                   -@/y.    ``                        `@@@@@@@@@@@@@@@@@@@@@Ndd@:
    &nbsp;                   h/  o- ```..`                       d@@@@@@@@@@@@@@@@@@@@@@@/@
    &nbsp;                  .N    `oN@@@@@---                      yh@@@@@Nddd@@@@@@@@@@@N@:
    &nbsp;                  /h    `:@@@@@@@@@/:                      shhhhs ..yd@@@@@@@@@Nho
    &nbsp;                  oy    :@@@@@@@@@@@N///:                         ```-@@@@@@@@@soy
    &nbsp;                  +h    -@@@@@@@@@@@@@@@@+++/                     ```-@@@@@@@@N-ss
    &nbsp;                  .N    `N@@@@@@@@@@@@@@@@@@d                     ```-oN@@@@@@y`d:
    &nbsp;                   d/    -y@@@@@@@@@@@@@@@N/:                     ````-@@@@@@@/:@
    &nbsp;                   -@`    `-@@@@@@@@@@@@@@N`                     ``..h@@@@@@@dy@/
    &nbsp;                    oy      `.N@@@@@@@@@@@@.                     ```.-N@@@@@++@y
    &nbsp;                     sy      y@@@@@@@@@@.`                     ``````y@@@@@o.hy
    &nbsp;                      +h`    `d@@@@@@@Ny`                       ````-d@@@s..ys
    &nbsp;                       -h/    `h@@@@@@/                       ``````:h//-`/d:
    &nbsp;                         +h:    s@@dh-                       ```````.```:yo`
    &nbsp;                          `+y/   s@d.                       ``````````/yo`
    &nbsp;                             :ss: :yo`                    `````````:sy/
    &nbsp;                               `/ss+-`                  ```````-+ss/`
    &nbsp;                                   ./ooo+/os.      `.://++oosso/.
    &nbsp;                                        `-:+ososoyyhhyso+/-`
  </Ascii>
);

const EarthFrame11 = () => (
  <Ascii>
    &nbsp;                                         .-/+osyyyysooo+/:.
    &nbsp;                                   `:oyyysy/`yNdy++-`` `.:yNdyo:`
    &nbsp;                                :sdh/+hh+    ``         `++/y@sy@@s:
    &nbsp;                             -sN@@@dNNso@s              -:.hy@@NN@@@Ny:
    &nbsp;                           /d@@N@@dy-o. `                  :+d@dyoN@NhN@+`
    &nbsp;                         /@@@@@No:                         :@@@-``-soyyhNN+
    &nbsp;                       .d@@@Nd-`                           -h@@NNNNo--::/s@@-
    &nbsp;                      /N@hyh:                            .o@@@@@@@@@@@@@@@NN@o
    &nbsp;                     oNd`  /`                            `N@@@@@@@@@@@@@@@@hd@s
    &nbsp;                    +dd`+`   -y`                        /sN@@@@@@@@@@@@@@@@@@y@s
    &nbsp;                   -@.s+.    ``                         +@@@@@@@@@@@@@@@@@@@@@y@:
    &nbsp;                   h/   h````....                       :@@@@@@@@@@@@@@@@@@@@@Ns@
    &nbsp;                  .N     `oN@@@@@/--.                     -h@@@@@@dd@N@@@@@@@@@@@:
    &nbsp;                  /h     `:N@@@@@@@@h:.                     -hhhhh-`-+h@@@@@@@@@@o
    &nbsp;                  oy     :@@@@@@@@@@@@y///.                       `````@@@@@@@@@sy
    &nbsp;                  +h     -@@@@@@@@@@@@@@@@y+++-                   ```.`N@@@@@@@sss
    &nbsp;                  .N     `@@@@@@@@@@@@@@@@@@@@+                   ````.+@@@@@@@-d:
    &nbsp;                   d/     :y@@@@@@@@@@@@@@@@h/-                  ``````.N@@@@@d:@
    &nbsp;                   -@`     `-d@@@@@@@@@@@@@@s                    `````y@@@@@@@sN/
    &nbsp;                    oy       `.@@@@@@@@@@@@@h                  ` ```..-@@@@@@:@y
    &nbsp;                     sy       s@@@@@@@@@@+.                     ``````s@@@@h-hy
    &nbsp;                      +h`     `d@@@@@@@@h/                    ` `````.d@@d/.ys
    &nbsp;                       -h/     `d@@@@@@+`                      ``````/y/:./d:
    &nbsp;                         +h:    `y@@dd:                      ```````````:yo`
    &nbsp;                          `+y/   `d@h`                      ``````````/yo`
    &nbsp;                             :ss:  +h+                    `````````:sy/
    &nbsp;                               `/ss+-``                 ```````-+ss/`
    &nbsp;                                   ./ooo+::y/`     ``-//++oosso/.
    &nbsp;                                        `-:+osssosyhhyso+/-`
  </Ascii>
);

const EarthFrame12 = () => (
  <Ascii>
    &nbsp;                                         .-/+osyyyyyooo+/:.
    &nbsp;                                   `:oyhysss.-@@ho+/`. `.:o@@yo:`
    &nbsp;                                :sd@+:sdh:    `          .++ohdsN@s:
    &nbsp;                             -sNN@@h@NNoo@s              ::-yh@NN@@@Ny:
    &nbsp;                           /d@@@@N@ds.o. `                  -+d@dyyN@@@@+`
    &nbsp;                         /@@@@@@N+-                         .N@@:``:sshs@N+
    &nbsp;                       .d@@@@Nh.`                           .o@@NNN@o--:/+@@-
    &nbsp;                      /N@hhsh.                             /y@@@@@@@@@@@@@@N@o
    &nbsp;                     o@N/   /`                             s@@@@@@@@@@@@@@@@dNs
    &nbsp;                    +hd+`o    .h.                        `sh@@@@@@@@@@@@@@@@@yNs
    &nbsp;                   -@`/h:`     `                          @@@@@@@@@@@@@@@@@@@@hN:
    &nbsp;                   h/   `d```.....`                       y@N@@@@@@@@@@@@@@@@@@d@
    &nbsp;                  .N      `o@@@@@@y---`                     ohN@@@@Nd@@@@@@@@@@@@:
    &nbsp;                  /h      `:@@@@@@@@@@+:                      ohhhho`-/hN@@@@@@@No
    &nbsp;                  oy      -@@@@@@@@@@@@@+///                       `````h@@@@@@@hy
    &nbsp;                  +h      -@@@@@@@@@@@@@@@@@++++`                  `````d@@@@@@@ys
    &nbsp;                  .N      `N@@@@@@@@@@@@@@@@@@@@.                ` `````+d@@@@@sd:
    &nbsp;                   d/      :s@@@@@@@@@@@@@@@@@o/`                ````````@@@@@@+@
    &nbsp;                   -@`      `-y@@@@@@@@@@@@@@@-                  ```.``s@@@@@@hN/
    &nbsp;                    oy         .h@@@@@@@@@@@@@:                 ``.``.`.@@@@@ohy
    &nbsp;                     sy        o@@@@@@@@@@@..                   ```````s@@@@oyy
    &nbsp;                      +h`       h@@@@@@@@dy                    ```````-@@@y-ys
    &nbsp;                       -h/      `d@@@@@@s:                     ```````oo:-/d:
    &nbsp;                         +h:     `h@@dd/`                    ```````````:yo`
    &nbsp;                          `+y/    .@@h`                     ``````````/yo`
    &nbsp;                             :ss:  `sd:                   `````````:sy/
    &nbsp;                               `/ss+-``                 ```````-+ss/`
    &nbsp;                                   ./ooo+:-oy.      `.:/++oosso/.
    &nbsp;                                        `-:+osssooyyhyso+/-`
  </Ascii>
);

const EarthFrame13 = () => (
  <Ascii>
    &nbsp;                                         .-/+osyyyyyooo+/:.
    &nbsp;                                   `:oyhhsss: oN@h++- .`.:+h@yo:`
    &nbsp;                                :sd@y::h@y.`  ``          -oosdyh@s:
    &nbsp;                             -sN@dNNhN@@oo@s              :-:yd@NN@@Ny:
    &nbsp;                           /d@@@N@@@hs.o. `                  -+@@dyh@Nd@+`
    &nbsp;                         /@@@@@@@@+-                         `@@N:``+ssydN+
    &nbsp;                       .d@@@@@@y.`                           `/@@NNN@+-::/y@-
    &nbsp;                      /@N@hysh.                             -o@@@@@@@@@@@@@NNo
    &nbsp;                     o@d@`   /`                             .@@@@@@@@@@@@@@@d@s
    &nbsp;                    +hoN..o     y/                         :sN@@@@@@@@@@@@@@@d@s
    &nbsp;                   -@`.oh.`     `                          /@@@@@@@@@@@@@@@@@@@@:
    &nbsp;                   h/    `d```......                       .@@@@@@@@@@@@@@@@@@@N@
    &nbsp;                  .N       `+d@@@@@@:--.                     .hd@@@@@d@@@@@@@@@@@:
    &nbsp;                  /h        :h@@@@@@@@@d:-                     .hhhhh`.-h@@@@@@@@o
    &nbsp;                  oy       .@@@@@@@@@@@@@d///:                     ``````y@@@@@@Ny
    &nbsp;                  +h       `@@@@@@@@@@@@@@@@@@+++/               ` ``````y@@@@@@hs
    &nbsp;                  .N        @@@@@@@@@@@@@@@@@@@@@@               ` ``````/d@@@@@d:
    &nbsp;                   d/       -+@@@@@@@@@@@@@@@@@@//               `````````@@@@@h@
    &nbsp;                   -@`        -o@@@@@@@@@@@@@@@@                 ```````o@@@@@@@/
    &nbsp;                    oy          .+@@@@@@@@@@@@@N                ````````-@@@@dyy
    &nbsp;                     sy         /@@@@@@@@@@@+-`                 ````````y@@@yyy
    &nbsp;                      +h`        y@@@@@@@@Ny:                  ````````-N@@+ys
    &nbsp;                       -h/       `d@@@@@@d+                   ````````.s/:/d:
    &nbsp;                         +h:      `h@@@@o.                  ````````````:yo`
    &nbsp;                          `+y/     -N@h`                    ``````````/yo`
    &nbsp;                             :ss:   -hd-                  `````````:sy/
    &nbsp;                               `/ss+- ``                ```````-+ss/`
    &nbsp;                                   ./ooo+:-:s+      `.-/++oosso/.
    &nbsp;                                        `-:+ossssoyyyyso+/-`
  </Ascii>
);

const EarthFrame14 = () => (
  <Ascii>
    &nbsp;                                         .-/+oosyyyysoo+/:.
    &nbsp;                                   `:oyhdss+o``d@dy+/`...:+sdyo:`
    &nbsp;                                :sd@@/.+@@s.`  ``          :ssydyds:
    &nbsp;                             -sN@Nd@ddN@@oo@s              /-/y@N@@@Ny:
    &nbsp;                           /d@@@@@N@@ho.s.                    -o@@dy@@@d+`
    &nbsp;                         /@@@@@@@@@/-                         `d@N-`.ssyhN+
    &nbsp;                       .d@@@@@@@y`                            `:N@NN@@/.:/sd-
    &nbsp;                      /dh@dyssy.                             `+@@@@@@@@@@@@@No
    &nbsp;                     ods@s    /`                              h@@@@@@@@@@@@@@@s
    &nbsp;                    +h-@h :+     os                         `sd@@@@@@@@@@@@@@Nds
    &nbsp;                   -@` -yh.`     `                           d@@@@@@@@@@@@@@@@NN:
    &nbsp;                   h/     .d```......`                       o@N@@@@@@@@@@@@@@@@@
    &nbsp;                  .N        `+y@@@@@@y---`                     +dN@@@@@d@@@@@@@@@:
    &nbsp;                  /h         :o@@@@@@@@@@s:`                     ohhhh:.-y@@@@@@@o
    &nbsp;                  oy         N@@@@@@@@@@@@@s///.                   ```````s@@@@@@y
    &nbsp;                  +h         @@@@@@@@@@@@@@@@@@y+++-              ````````y@@@@@Ns
    &nbsp;                  .N         h@@@@@@@@@@@@@@@@@@@@@o              ````````/d@@@@N:
    &nbsp;                   d/        -/N@@@@@@@@@@@@@@@@@h/-              ````````.N@@@N@
    &nbsp;                   -@`         .:@@@@@@@@@@@@@@@@o              ` ```````o@@@@@N/
    &nbsp;                    oy           `-@@@@@@@@@@@@@@o              ```.`````-N@@Nhy
    &nbsp;                     sy          .@@@@@@@@@@@@-.`              `````````.d@@@dy
    &nbsp;                      +h`         o@@@@@@@@@dy                 `````````/@@shs
    &nbsp;                       -h/         y@@@@@@N+.                 `````````-s:+d:
    &nbsp;                         +h:       `h@@@@h.                 ````````````:yo`
    &nbsp;                          `+y/      -N@h`                   ``````````/yo`
    &nbsp;                             :ss:    :dd.                 `````````:sy/
    &nbsp;                               `/ss+-  ``               ```````-+ss/`
    &nbsp;                                   ./ooo+:--+s-     `../++oosso/.
    &nbsp;                                        `-:+osyssosyyyso+/-`
  </Ascii>
);

const EarthFrame15 = () => (
  <Ascii>
    &nbsp;                                         .-/+oosyyyysoo+/:.
    &nbsp;                                   `:oyddy+o+: :NNdo+- -.:+shyo:`
    &nbsp;                                :sd@@y-`y@do``  ``         `+ysdhhs:
    &nbsp;                             -sN@@@@@h@@@@o+@y             `+-+yN@@@Ny:
    &nbsp;                           /d@@@@@@N@@ho`o-                   `:oNNhyNNd+`
    &nbsp;                         /@@@@@@@@@@/-                         `h@N-`-ysh@+
    &nbsp;                       .d@@@@@@@@y`                             -@@N@@d--:od-
    &nbsp;                      /d+@Nhyssy-                              /h@@@@@@@@@NNNo
    &nbsp;                     oyod@:    /.                              /@@@@@@@@@@@@N@s
    &nbsp;                    +h`o@+ :o     :d.                         /y@@@@@@@@@@@@@@Ns
    &nbsp;                   -@` `-yh``      `                          :@@@@@@@@@@@@@@@@@:
    &nbsp;                   h/      `d-``.......                       `@@@@@@@@@@@@@@@@@@
    &nbsp;                  .N         `:oN@@@@@@:---                     .d@@@@@@d@@@@@@@@:
    &nbsp;                  /h          -/@@@@@@@@@@N/:                     -hhhh+`-y@@@@@@o
    &nbsp;                  oy          y@@@@@@@@@@@@@@+///`                ``.``````s@@@@@y
    &nbsp;                  +h          y@@@@@@@@@@@@@@@@@@o+++.            `````````y@@@@@s
    &nbsp;                  .N          o@@@@@@@@@@@@@@@@@@@@@@-            `````````/@@@@@:
    &nbsp;                   d/         ./d@@@@@@@@@@@@@@@@@@o/`            `````````-@@@@@
    &nbsp;                   -@`          .-d@@@@@@@@@@@@@@@@.            ``````````sN@@@@/
    &nbsp;                    oy            `.h@@@@@@@@@@@@@@.            ``````````/@@@Ny
    &nbsp;                     sy            @@@@@@@@@@@@o-``            ``````````-@@N@y
    &nbsp;                      +h`          :@@@@@@@@@Ny:               ``````````s@dds
    &nbsp;                       -h/          s@@@@@@@s/                ``````````/++d:
    &nbsp;                         +h:         y@@N@@-`                ```````````:yo`
    &nbsp;                          `+y/       :N@d`                  ``````````/yo`
    &nbsp;                             :ss:     /@d.                `````````:sy/
    &nbsp;                               `/ss+-  `.`              ```````-+ss/`
    &nbsp;                                   ./ooo+:-.:oo      ..:++oosso/.
    &nbsp;                                        `-:+osyyssoysyso+/-`
  </Ascii>
);

const EarthFrame16 = () => (
  <Ascii>
    &nbsp;                                         .-/+oosyyyyyoo+/:.
    &nbsp;                                   `:oy@dhoo/+. y@@h+/`.-:+osyo:`
    &nbsp;                                :sdN@@/..d@d+``  `         `.syydys:
    &nbsp;                             -sN@@@hNNhN@@@++dy             `+:odNN@Ny:
    &nbsp;                           /d@@@@@N@N@@hs`o:                  ``:sNNhd@@+`
    &nbsp;                         /@@@@@@@@@@N/-                        `.h@@.`+yh@+
    &nbsp;                       .h@@@@@@@@@y`                            `-d@N@@y.:oh-
    &nbsp;                      /h-d@@yysoy:                              -y@@@@@@@@NN@o
    &nbsp;                     oy:s@N.    :-                              .N@@@@@@@@@@@Ns
    &nbsp;                    +h -y@: :s     `do                         .s@@@@@@@@@@@@@@s
    &nbsp;                   -@`  .:yd.`      `                           @@@@@@@@@@@@@@@@:
    &nbsp;                   h/        d/ ``.......                       s@@@@@@@@@@@@@@@@
    &nbsp;                  .N          `.od@@@@@@d---.                     sd@@@@N@@@@@@@@:
    &nbsp;                  /h           `:h@@@@@@@@@@d:-                   ``yhhho`-yN@@@@o
    &nbsp;                  oy           /@@@@@@@@@@@@@@d////               ``````````h@@@@y
    &nbsp;                  +h           :@@@@@@@@@@@@@@@@@@N++++           ``````````h@@@@s
    &nbsp;                  .N           -@@@@@@@@@@@@@@@@@@@@@@N           ``````````+@@@@:
    &nbsp;                   d/           /o@@@@@@@@@@@@@@@@@@N//           ``````````/@@@@
    &nbsp;                   -@`            -o@@@@@@@@@@@@@@@@d            ``````````yN@@@/
    &nbsp;                    oy              ./@@@@@@@@@@@@@@h            ```.``````s@@@y
    &nbsp;                     sy             o@@@@@@@@@@@N:-`           ```````````/@@Ny
    &nbsp;                      +h`           `N@@@@@@@@@hy               `````````.@NNs
    &nbsp;                       -h/           /@@@@@@@d+`              ``````````.+od:
    &nbsp;                         +h:          s@@N@@/.               ```````````:yo`
    &nbsp;                          `+y/        :N@@`                 ``````````/yo`
    &nbsp;                             :ss:      oNh`               `````````:sy/
    &nbsp;                               `/ss+-   `.`             ```````-+ss/`
    &nbsp;                                   ./ooo+:-../o:     `.-/+oosso/.
    &nbsp;                                        `-:+osyyssossyso+/-`
  </Ascii>
);

const EarthFrame17 = () => (
  <Ascii>
    &nbsp;                                         .-/+oossyyyyso+/:.
    &nbsp;                                   `:oy@Nhs/o// .@@@y+-`::+osyo:`
    &nbsp;                                :sdNNNh- /@Ny+`` ``        ``:yy@ys:
    &nbsp;                             -sN@@@Ny@Nd@@@@++dh             .+/o@@@Ny:
    &nbsp;                           /d@@@@@@NNN@@hs`+/                 ```/y@@hN@+`
    &nbsp;                         /@N@@@@@@@@@N+:                       ``.d@h`.yy@+
    &nbsp;                       .hyN@@@@@@@@h.                           ``-d@@@d+-+h-
    &nbsp;                      /h-:@@@yyooy/                              .s@@@@@@@NN@o
    &nbsp;                     oy`sy@@`    ::                              `d@@@@@@@@@@@s
    &nbsp;                    +h `:@@- :y      od`                         oh@@@@@@@@@@@@s
    &nbsp;                   -@`   ./yd.`                                  o@@@@@@@@@@@@@@:
    &nbsp;                   h/         ss ``.......`                      -@N@@@@@@@@@@@@@
    &nbsp;                  .N            `+s@@@@@@@o---`                    :dN@@@N@@@@@@@:
    &nbsp;                  /h             :+@@@@@@@@@@@s:.                 ```+hhhs`-h@@@@o
    &nbsp;                  oy            `@@@@@@@@@@@@@@@y///-             ```````````@@@@y
    &nbsp;                  +h             N@@@@@@@@@@@@@@@@@@h+++:         ```````````N@@@s
    &nbsp;                  .N             d@@@@@@@@@@@@@@@@@@@@@@s         ``````````.s@@@:
    &nbsp;                   d/            -/N@@@@@@@@@@@@@@@@@@h/-        ````````````y@@@
    &nbsp;                   -@`             -:@@@@@@@@@@@@@@@@@+          ``````````.d@@@/
    &nbsp;                    oy               `.@@@@@@@@@@@@@@@/          `.````````.d@@y
    &nbsp;                     sy              -N@@@@@@@@@@@y:.`          ```````````y@@y
    &nbsp;                      +h`             h@@@@@@@@@@h:            ```````````/@@s
    &nbsp;                       -h/            .N@@@@@@@o:              ``````````:sd:
    &nbsp;                         +h:           /@@@@@s-              ```````````:yo`
    &nbsp;                          `+y/         :@@N.                ``````````/yo`
    &nbsp;                             :ss:       sNh`              `````````:sy/
    &nbsp;                               `/ss+-    `.`            ```````-+ss/`
    &nbsp;                                   ./ooo+:-..:+/.    `.-:+oosso/.
    &nbsp;                                        `-:+osyyyyosssso+/-`
  </Ascii>
);

const EarthFrame18 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooosyyyyso+/:.
    &nbsp;                                   `:oy@@dy+/++- +N@do:.-/+osso:`
    &nbsp;                                :sd@NNNo` o@Ns/`` ``       ``.ohdds:
    &nbsp;                             -sN@@@@@y@@d@@@@++hd            `://y@@Ny:
    &nbsp;                           /hN@@@@@@NNN@@hs`/+                ```.+d@d@@+`
    &nbsp;                         /hdN@@@@@@@@@@+:                      ```-d@o`+hd+
    &nbsp;                       .hod@@@@@@@@@d-                          ```-d@@dh-+h-
    &nbsp;                      /h..y@@dysooy+`                            `.o@@@@@@@N@o
    &nbsp;                     oy`:o@@d`    ./                             ``y@@@@@@@@@@s
    &nbsp;                    +h  .:N@. .h.     .d+                         /y@@@@@@@@@@@s
    &nbsp;                   -@`   `.:yd-`                                 `.N@@@@@@@@@@@@:
    &nbsp;                   h/          /d```........                       h@@@@@@@@@@@@@
    &nbsp;                  .N             `:o@@@@@@@N:---                   ``h@@@@N@@@@@@:
    &nbsp;                  /h              .:d@@@@@@@@@@@/:                 ```:hhhs`:d@@@o
    &nbsp;                  oy              s@@@@@@@@@@@@@@@+///`            ``````````-@@@y
    &nbsp;                  +h              o@@@@@@@@@@@@@@@@@@@s+++.      ` ``````````:@@@s
    &nbsp;                  .N              +@@@@@@@@@@@@@@@@@@@@@@@-      ` ``````````-@@@:
    &nbsp;                   d/             `/y@@@@@@@@@@@@@@@@@@@o/`      ````````````.N@@
    &nbsp;                   -@`              `:s@@@@@@@@@@@@@@@@@`        ```````````/N@@/
    &nbsp;                    oy                `.+@@@@@@@@@@@@@@N        ``.``.``````:@@y
    &nbsp;                     sy                h@@@@@@@@@@@@::`         ```````````-N@y
    &nbsp;                      +h`              /@@@@@@@@@@hy           ```````````.@@s
    &nbsp;                       -h/              d@@@@@@@h+`            ``````````.sd:
    &nbsp;                         +h:            -@@@@@d-`           ````````````:yo`
    &nbsp;                          `+y/          -@@@:               ``````````/yo`
    &nbsp;                             :ss:        sNh`             `````````:sy/
    &nbsp;                               `/ss+-     .-`           ```````-+ss/`
    &nbsp;                                   ./ooo+:-.`.:o:`   `.-:+oosso/.
    &nbsp;                                        `-:+osyhyysossso+/-`
  </Ascii>
);

const EarthFrame19 = () => (
  <Ascii>
    &nbsp;                                         .-/+ososyyyyso+/:.
    &nbsp;                                   `:oy@@Nys/++/``h@Nh+-./+osso:`
    &nbsp;                                :sd@NN@@: `yNNs/`` ``      ```:hdds:
    &nbsp;                             -sN@@@@@dh@@@@@@N++y@           ``+/+d@Ny:
    &nbsp;                           /hdN@@@@@@N@N@@dy.-s               ````-oNNd@+`
    &nbsp;                         /hy@@@@@@@@@@@@s:`                    ````:@N:-yd+
    &nbsp;                       .h++@@@@@@@@@Nd:                         ````-@Nddo+h-
    &nbsp;                      /h.`.@@@dsso+ss-                           ```o@@@@@@N@o
    &nbsp;                     oy` soN@d     `/`                           ```o@@@@@@@@@s
    &nbsp;                    +h   -/@@- `h:      od`                       `-yN@@@@@@@@@s
    &nbsp;                   -@`    `.:yd+``                                ``d@@@@@@@@@@@:
    &nbsp;                   h/           .@/ ``.......`                    ``o@@@@@@@@@@@@
    &nbsp;                  .N              ``+s@@@@@@@h----                 ```s@@@@N@N@@@:
    &nbsp;                  /h                :+@@@@@@@@@@@@::               ````.hhhs.+@@@o
    &nbsp;                  oy               `@@@@@@@@@@@@@@@@////           ```````````o@@y
    &nbsp;                  +h               `@@@@@@@@@@@@@@@@@@@N++++     ` ```````````s@@s
    &nbsp;                  .N                N@@@@@@@@@@@@@@@@@@@@@@@     `````````````+@@:
    &nbsp;                   d/               :/N@@@@@@@@@@@@@@@@@@@/:     `````````````o@@
    &nbsp;                   -@`                -:N@@@@@@@@@@@@@@@@y        ```````````y@@/
    &nbsp;                    oy                  ..@@@@@@@@@@@@@@@o      ```.````````.h@y
    &nbsp;                     sy                 /N@@@@@@@@@@@h:.        ````````````y@y
    &nbsp;                      +h`               `N@@@@@@@@@@h:         ````````````o@s
    &nbsp;                       -h/               o@@@@@@@N+:          ````````````o@:
    &nbsp;                         +h:             `N@@N@@/.          ````````````:yo`
    &nbsp;                          `+y/           -h@@+              ``````````/yo`
    &nbsp;                             :ss:         yNd.            `````````:sy/
    &nbsp;                               `/ss+-      .-           ```````-+ss/`
    &nbsp;                                   ./ooo+:-.``://:   ``--/oosso/.
    &nbsp;                                        `-:+osyhhysossso+/-`
  </Ascii>
);

const EarthFrame20 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooosyyyyso+/:.
    &nbsp;                                   `:oydN@hy+:o+: /d@@s:-:oosoo:`
    &nbsp;                                :sd@@NN@h- .dN@o/`` ``     ```.sdhs:
    &nbsp;                             -s@@@@@@@hh@d@@@@N++yN          ``.+/yNNy:
    &nbsp;                           /yyd@@@@@@@N@N@@@y-.s`             `````:y@@d+`
    &nbsp;                         /h+h@@@@@@@@@@@@h:.                   `````+Nh.oh+
    &nbsp;                       .h+`d@@@@@@@N@Ndo                        `````:@@dhoh-
    &nbsp;                      /h. .:@@@dsso+ss/                          ````+@@@@@N@o
    &nbsp;                     oy` `ysN@@`     :-                          ````/@@@@@@@@s
    &nbsp;                    +h    :/@@:  ss      .do                     ```.sN@@@@@@@@s
    &nbsp;                   -@`     ``-ydy``                               ```y@@@@@@@@@@:
    &nbsp;                   h/             yh ``........`                  ```:@N@@@@@@@@@
    &nbsp;                  .N                `:od@@@@@@@o---.              `````+d@@@N@@@@:
    &nbsp;                  /h                 .:h@@@@@@@@@@@y:.            ``.````yhh+.s@@o
    &nbsp;                  oy                 s@@@@@@@@@@@@@@@h///-        `````````````N@y
    &nbsp;                  +h                 o@@@@@@@@@@@@@@@@@@@d+++-    ``.``````````N@s
    &nbsp;                  .N                 +@@@@@@@@@@@@@@@@@@@@@@@+    ````````````.d@:
    &nbsp;                   d/                ./s@@@@@@@@@@@@@@@@@@@y/.    ````````````.N@
    &nbsp;                   -@`                 `:o@@@@@@@@@@@@@@@@@:    ` ```````````-N@/
    &nbsp;                    oy                   `./@@@@@@@@@@@@@@N`    ```.`````````/@y
    &nbsp;                     sy                   dN@@@@@@@@@@@/:`     `````````````:Ny
    &nbsp;                      +h`                 s@@@@@@@@@@hy        ````````````-Ns
    &nbsp;                       -h/                -@@@@@@@@s+         ````````````+@:
    &nbsp;                         +h:               h@@N@@s-`        ````````````:yo`
    &nbsp;                          `+y/            .y@@y             ``````````/yo`
    &nbsp;                             :ss:          yNd.           `````````:sy/
    &nbsp;                               `/ss+-       .-          ```````-+ss/`
    &nbsp;                                   ./ooo+:-.``.:o.-  ``.-:+osso/.
    &nbsp;                                        `-:+osyhhyyossso+/-`
  </Ascii>
);

const EarthFrame21 = () => (
  <Ascii>
    &nbsp;                                         .-/+oosoyyyyso+/:.
    &nbsp;                                   `:oydN@@yo::o/-`sN@d+::ossoo:`
    &nbsp;                                :sd@@NN@Ns` -@Ndo:`` ``    ```./dhs:
    &nbsp;                             -shN@@@@@@yh@dN@@@@o+sN`        ```:++@Ny:
    &nbsp;                           /yosN@@@@@@@N@N@@Ny:`s-            `````.+@Nd+`
    &nbsp;                         /h/+N@@@@@@@@@@@@@:-                  `````.sN/+h+
    &nbsp;                       .h+ /N@@@@@@@N@@dy`                      ``````/Nddyh-
    &nbsp;                      /h.  -+@@@dsss+os+`                        `````o@@@@N@o
    &nbsp;                     oy`  -ysN@N.     ./                          ````/@@@@@@@s
    &nbsp;                    +h    `:/@@+  /d`      od.                   `````o@@@@@@@@s
    &nbsp;                   -@`      ```shd.``                             ````+@@@@@@@@@:
    &nbsp;                   h/              :@: ``........                 ```..@N@@@@@@@@
    &nbsp;                  .N                 `.+o@@@@@@@@:---`            ``````/d@@@@N@@:
    &nbsp;                  /h                   :/@@@@@@@@@@@@+:`          ````````yhh::@@o
    &nbsp;                  oy                   N@@@@@@@@@@@@@@@o///.      `````````````o@y
    &nbsp;                  +h                   N@@@@@@@@@@@@@@@@@@@s+++`  `````````````o@s
    &nbsp;                  .N                   @@@@@@@@@@@@@@@@@@@@@@@N`  `````````````o@:
    &nbsp;                   d/                  :/@@@@@@@@@@@@@@@@@@@N+/   `````````````y@
    &nbsp;                   -@`                   -:d@@@@@@@@@@@@@@@@d    `````````````y@/
    &nbsp;                    oy                     ..h@@@@@@@@@@@@@@o   ````.````````.@y
    &nbsp;                     sy                    /N@@@@@@@@@@@d:.    `````````````.dy
    &nbsp;                      +h`                  .@@@@@@@@@@@h:       ```````````.ds
    &nbsp;                       -h/                  d@@@@@@@d+-       ````````````/d:
    &nbsp;                         +h:                +@@@@@d-.        ```````````:yo`
    &nbsp;                          `+y/             .o@@@            ``````````/yo`
    &nbsp;                             :ss:           yN@.          `````````:sy/
    &nbsp;                               `/ss+-        .-         ```````-+ss/`
    &nbsp;                                   ./ooo+:-````:/+.. ``.-:+osso/.
    &nbsp;                                        `-:+osyhhhysosoo+/-`
  </Ascii>
);

const EarthFrame22 = () => (
  <Ascii>
    &nbsp;                                         .-/+oososyyyso+/:.
    &nbsp;                                   `:oyhNN@hs+:/+:.-h@Ny/:+ssoo:`
    &nbsp;                                :sd@@NNN@@+` :N@ho:`````   ```.:yhs:
    &nbsp;                             -syd@@@@@@@yd@dN@@@@o+oN.       ```.+/hNy:
    &nbsp;                           /y+/d@@@@@@@@N@N@@@y+ o:           ``````:yNd+`
    &nbsp;                         /h/.h@@@@@@@@@@@@@@+:                 ``````-dd/h+
    &nbsp;                       .h+  yN@@@@@@@@N@@h-                     ``````.s@h@d-
    &nbsp;                      /h.  `-s@@@@sss++oo:                       ``````s@@@@@o
    &nbsp;                     oy`   :yyN@@-      :.                        `````/@@@@@@s
    &nbsp;                    +h     `-:@@y  `d+      `dy                  ``````+@@@@@@@s
    &nbsp;                   -@`       ```+h@+```                          ` ```./@@@@@@@@:
    &nbsp;                   h/                hh ``.........               ``````dN@@@@@@@
    &nbsp;                  .N                   `:oh@@@@@@@d----           ```.```:@@@@@@@:
    &nbsp;                  /h                    .:s@@@@@@@@@@@N::         `````````yhh.s@o
    &nbsp;                  oy                    /@@@@@@@@@@@@@@@N+///     `````````````.@y
    &nbsp;                  +h                    /@@@@@@@@@@@@@@@@@@@N+++: `````````````.@s
    &nbsp;                  .N                    :@@@@@@@@@@@@@@@@@@@@@@@o `````````````-@:
    &nbsp;                   d/                   `/o@@@@@@@@@@@@@@@@@@@h/. `````````````+@
    &nbsp;                   -@`                    `:/@@@@@@@@@@@@@@@@@:  `````````````/@/
    &nbsp;                    oy                       .:@@@@@@@@@@@@@@N`  ```.`````````hy
    &nbsp;                     sy                      dN@@@@@@@@@@@+: ` ``````````````yy
    &nbsp;                      +h`                    y@@@@@@@@@@hs      ```````````.hs
    &nbsp;                       -h/                   +@@@@@@@@o/      ````````````/d:
    &nbsp;                         +h:                 .@@@N@@/.       ```````````:yo`
    &nbsp;                          `+y/              `+N@@`          ``````````/yo`
    &nbsp;                             :ss:            yNN.         `````````:sy/
    &nbsp;                               `/ss+-        `.-        ```````-+ss/`
    &nbsp;                                   ./ooo+:-````.:+-:```.-:/osso/.
    &nbsp;                                        `-:+osyhhhysosoo+/-`
  </Ascii>
);

const EarthFrame23 = () => (
  <Ascii>
    &nbsp;                                         .-/+oossoyyyso+/:.
    &nbsp;                                   `:oyd@N@@so/:+/:`+d@Ns/+ssoo:`
    &nbsp;                                :od@@@NN@@h/ `+N@yo-````   ```.:shs:
    &nbsp;                             -sss@@@@@@@@yh@dN@@@@s+oN.      ````:+s@y:
    &nbsp;                           /y+.s@@@@@@@@@N@N@@@ho ++          ``````.+@@+`
    &nbsp;                         /h/ /N@@@@@@@@@@@@@@y:`               ```````+@sh+
    &nbsp;                       .h+  .dN@@@@@@@@N@Nh+                    ```````-hhNd-
    &nbsp;                      /h.   .-s@@@Nsss++os+`                     ```````h@@@@o
    &nbsp;                     oy`    /yyN@@+      -:                       ``````o@@@@@s
    &nbsp;                    +h      `--N@N`  sh       /d/                 ``````+N@@@@@s
    &nbsp;                   -@`         ``:ydd```                         ```.``.:@@@@@@@:
    &nbsp;                   h/                 :d/ ``........`              ```.``dN@@@@@@
    &nbsp;                  .N                    `.+o@@@@@@@@s---.          ```````:@@@NN@:
    &nbsp;                  /h                      -:d@@@@@@@@@@@h:.        `````````hho:No
    &nbsp;                  oy                      h@@@@@@@@@@@@@@@h///-   ``````````````dy
    &nbsp;                  +h                      h@@@@@@@@@@@@@@@@@@@h+o+``````````````ds
    &nbsp;                  .N                      y@@@@@@@@@@@@@@@@@@@@@@N``````````````@:
    &nbsp;                   d/                     -/h@@@@@@@@@@@@@@@@@@@+/`````````````:@
    &nbsp;                   -@`                      .:y@@@@@@@@@@@@@@@@d `````````````.N/
    &nbsp;                    oy                        `.s@@@@@@@@@@@@@@+``.``.````````sy
    &nbsp;                     sy                       :N@@@@@@@@@@@h/.` `````````````oy
    &nbsp;                      +h`                     -@@@@@@@@@@dy-   ````````````.ys
    &nbsp;                       -h/                    `@@@@@@@@y+`     ```````````/d:
    &nbsp;                         +h:                   @@@N@@s-`     ```````````:yo`
    &nbsp;                          `+y/                +d@@:         ``````````/yo`
    &nbsp;                             :ss:             s@N-`       `````````:sy/
    &nbsp;                               `/ss+-         `--       ```````-+ss/`
    &nbsp;                                   ./ooo+:-. ```::+`:```-:/osso/.
    &nbsp;                                        `-:+osyhhhhyoooo+/-`
  </Ascii>
);

const EarthFrame24 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooosoyyyso+/:.
    &nbsp;                                   `:oydd@NNhs+::o:--y@@do+ssoo:`
    &nbsp;                                :oh@@@@@N@@y: `oN@so-````  ```.:ohs:
    &nbsp;                             -ss+y@@@@@@@@sh@dN@@@@y++N-     ````.+sdy:
    &nbsp;                           /y+`-d@@@@@@@@@N@@N@@ds`:o         ``````./y@+`
    &nbsp;                         /h/ `y@@@@@@@@@@@@@@@@:.              ```````-ydh+
    &nbsp;                       .h+   :@N@@@@@@@@N@@dh                   ````````/dN@-
    &nbsp;                      /h.    .-s@@@@ysoo+ooo:                    ```````.@@@@o
    &nbsp;                     oy`     /ys@@@h      `:.                    ````````y@@@@s
    &nbsp;                    +h       `-.d@@:  -d/       yd                ```````oN@@@@s
    &nbsp;                   -@`          ```yh@/ ``                        ``.````:@@@@@@:
    &nbsp;                   h/                   yd``..........             ```````d@@@@@@
    &nbsp;                  .N                      .-os@@@@@@@@/---`        ````````/@@@@@:
    &nbsp;                  /h                        :/@@@@@@@@@@@@o:`      `````````-hh:@o
    &nbsp;                  oy                       `@@@@@@@@@@@@@@@@o/+/   `````````````oy
    &nbsp;                  +h                       `@@@@@@@@@@@@@@@@@@@@ooo:````````````ys
    &nbsp;                  .N                       `@@@@@@@@@@@@@@@@@@@@@@@+````````````d:
    &nbsp;                   d/                       /+N@@@@@@@@@@@@@@@@@@y+.```````````:@
    &nbsp;                   -@`                        ::N@@@@@@@@@@@@@@@@-````````````.d/
    &nbsp;                    oy                          .-N@@@@@@@@@@@@@@`.``.````````sy
    &nbsp;                     sy                         hN@@@@@@@@@@N+:``````````````oy
    &nbsp;                      +h`                       h@@@@@@@@@Ny+  ````````````.ys
    &nbsp;                       -h/                      y@@@@@@@@+:    ```````````/d:
    &nbsp;                         +h:                    o@@N@@d-.   ````````````:yo`
    &nbsp;                          `+y/                 /h@@o        ``````````/yo`
    &nbsp;                             :ss:              o@@-`      `````````:sy/
    &nbsp;                               `/ss+-          `--      ```````-+ss/`
    &nbsp;                                   ./ooo+:-. ```.:/:.:``.:/osso/.
    &nbsp;                                        `-:+osyhhhhysooo+/-`
  </Ascii>
);

const EarthFrame25 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooosossyso+/:.
    &nbsp;                                   `:oy@@d@Ndyo/-:+:-/hNNy+ssso:`
    &nbsp;                                :oyN@@@N@@@Ns- `sNNso.```` ```.:oys:
    &nbsp;                             -ss//N@@@@@@@@yh@dN@@@@h++@-    `````:shy:
    &nbsp;                           /y+` +N@@@@@@@@@N@@N@@Ny.-s`       ```````:sd+`
    &nbsp;                         /h/  .d@@@@@@@@@@@@@@@@/-             ````````+@d+
    &nbsp;                       .h+    /@N@@@@@@@@@@@@h:                 ````````.yN@-
    &nbsp;                      /h.     .-o@@@@hooo++oo+`                  ````````/@@@o
    &nbsp;                     oy`      /ys@@@N.      -:                   ````````.d@@@s
    &nbsp;                    +h        `-.s@@y   sd       -do              ````````s@@@@s
    &nbsp;                   -@`           ```+y@d````                      ```.````/@@@@@:
    &nbsp;                   h/                    .do `..........          ``.``````@@@@@@
    &nbsp;                  .N                       `./oh@@@@@@@@----       `````````oN@N@:
    &nbsp;                  /h                         .:o@@@@@@@@@@@N::     ``````````/hoyo
    &nbsp;                  oy                         /@@@@@@@@@@@@@@@@/++- `````````````oy
    &nbsp;                  +h                         /@@@@@@@@@@@@@@@@@@@hoo+```````````ss
    &nbsp;                  .N                         /@@@@@@@@@@@@@@@@@@@@@@d```````````d:
    &nbsp;                   d/                        ./s@@@@@@@@@@@@@@@@@@N+:``````````:@
    &nbsp;                   -@`                         `:o@@@@@@@@@@@@@@@@s```````````.d/
    &nbsp;                    oy                           `-+@@@@@@@@@@@@@@:.``````````sy
    &nbsp;                     sy                          -N@@@@@@@@@@@y/.````````````oy
    &nbsp;                      +h`                        -@@@@@@@@@@hy`````````````.ys
    &nbsp;                       -h/                       -@@@@@@@@o+  ````````````/d:
    &nbsp;                         +h:                     -@@@@@@:.  ````````````:yo`
    &nbsp;                          `+y/                  :s@@h       ``````````/yo`
    &nbsp;                             :ss:               +@@:`     `````````:sy/
    &nbsp;                               `/ss+-           `--     ```````-+ss/`
    &nbsp;                                   ./ooo+:-.`````-:+.-.`.:/osso/.
    &nbsp;                                        `-:+ooyhhhhysooo+/-`
  </Ascii>
);

const EarthFrame26 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooossossso+/:.
    &nbsp;                                   `:oy@@ddN@hy+:://:-sd@@sosso:`
    &nbsp;                                :os@@@@@@N@@@s- .yN@oo.`..````.:oss:
    &nbsp;                             -ss/.y@@@@@@@@@yy@dN@@@@dood:   `````-oyy:
    &nbsp;                           /y+` `y@@@@@@@@@@@@@N@@@y:`s.      ```````-oh+`
    &nbsp;                         /h/   :N@@@@@@@@@@@@@@@@s:            ````````-h@+
    &nbsp;                       .h+     +@N@@@@@@@@@N@@ho                `````````/@@-
    &nbsp;                      /h.      .:+N@@@Nooo++ooo:                 `````````y@@o
    &nbsp;                     oy`       :ysd@@@+      `:.                 `````````:N@@s
    &nbsp;                    +h          -./@@@`  -d+       o@-           `````````.h@@@s
    &nbsp;                   -@`             ``.yh@+ ``                     ```.`````s@@@@:
    &nbsp;                   h/                      od-``.........`        `````````.N@@@@
    &nbsp;                  .N                         `.+o@@@@@@@@s---.    ```````````y@@N:
    &nbsp;                  /h                           -:h@@@@@@@@@@@y:.  ````````````shyo
    &nbsp;                  oy                           h@@@@@@@@@@@@@@@y+++`````````````oy
    &nbsp;                  +h                           y@@@@@@@@@@@@@@@@@@Nooo.`````````ss
    &nbsp;                  .N                           y@@@@@@@@@@@@@@@@@@@@@@.`````````d:
    &nbsp;                   d/                          :/d@@@@@@@@@@@@@@@@@@o/`````````:@
    &nbsp;                   -@`                           .:h@@@@@@@@@@@@@@@@`.````````.d/
    &nbsp;                    oy                             .-d@@@@@@@@@@@@@o``````````sy
    &nbsp;                     sy                            yN@@@@@@@@@@@+-```````````oy
    &nbsp;                      +h`                          h@@@@@@@@@@y:```````````.ys
    &nbsp;                       -h/                         d@@@@@@@y+.````````````/d:
    &nbsp;                         +h:                       @@@N@@+-`````````````:yo`
    &nbsp;                          `+y/                   -+N@N`     ``````````/yo`
    &nbsp;                             :ss:                /N@/. `  `````````:sy/
    &nbsp;                               `/ss+-            `--   ````````-+ss/`
    &nbsp;                                   ./ooo+:-.` ````::/`:..:/osso/.
    &nbsp;                                        `-:+ooyhhhhhsooo+/-`
  </Ascii>
);

const EarthFrame27 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooosossso+/:.
    &nbsp;                                   `:oy@@dh@Ndds+-://:/h@@hssso:`
    &nbsp;                                :osyN@@@@@N@@ds.`-y@doo``..```.:oss:
    &nbsp;                             -ss/`-N@@@@@@@@@yy@dN@@@@dood:  `````.+ys:
    &nbsp;                           /y+`  .d@@@@@@@@@@@@@N@@@h/`s- `   ```````.+y+`
    &nbsp;                         /h/    +@@@@@@@@@@@@@@@@@@:`          ````````.s@+
    &nbsp;                       .h+      +d@@@@@@@@@@N@@dh.              `````````-d@-
    &nbsp;                      /h.       .:/d@@@@sooo++ooo                `````````-N@o
    &nbsp;                     oy`        -sshN@@@       -:                 `````````s@@s
    &nbsp;                    +h           .-.@@@s   sd`      `dh          ``````````-N@@s
    &nbsp;                   -@`              `` +h@@` ``                   ````.`````h@@@:
    &nbsp;                   h/                        dh``..........       ``````````/N@@@
    &nbsp;                  .N                           .-osN@@@@@@@:---   ```````````.@@@:
    &nbsp;                  /h                             :/N@@@@@@@@@@N/: ````````````-hdo
    &nbsp;                  oy                            `N@@@@@@@@@@@@@@N+++-```````````oy
    &nbsp;                  +h                            `N@@@@@@@@@@@@@@@@@@yoo:````````ss
    &nbsp;                  .N                             N@@@@@@@@@@@@@@@@@@@@@:````````d:
    &nbsp;                   d/                            /+N@@@@@@@@@@@@@@@@@h+````````:@
    &nbsp;                   -@`                             ::N@@@@@@@@@@@@@@@-.```````.d/
    &nbsp;                    oy                               .:@@@@@@@@@@@@@h`````````sy
    &nbsp;                     sy                             .N@@@@@@@@@@@o/``````````oy
    &nbsp;                      +h`                           -@@@@@@@@@Ny+``````````.ys
    &nbsp;                       -h/                          /@@@@@@@d+:```````````/d:
    &nbsp;                         +h:                        s@@N@@y-````````````:yo`
    &nbsp;                          `+y/                    `+@@@.    `````````./yo`
    &nbsp;                             :ss:                 :N@/. ` `````````:sy/
    &nbsp;                               `/ss+-             `--  ````````-+ss/`
    &nbsp;                                   ./ooo+:-.` ````-:/-.:.-/osso/.
    &nbsp;                                        `-:+osshhhhhyooo+/-`
  </Ascii>
);

const EarthFrame28 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooosossso+/:.
    &nbsp;                                   `:oy@NdhyN@hd+/::+/:od@@ysso:`
    &nbsp;                                :osod@@@@N@@@@hs.`:h@ho+``.```.:oss:
    &nbsp;                             -ss/` o@@@@@@@@@@hs@@N@@@@@ooh- `````./ys:
    &nbsp;                           /y+`   :N@@@@@@@@@@@@@N@@@do`o: `  ```````.+y+`
    &nbsp;                         /h/     o@@@@@@@@@@@@@@@@@@/.         `````````+d+
    &nbsp;                       .h+       +d@@@@@@@@@@@N@Nh+             `````````.s@-
    &nbsp;                      /h.        `/:h@@@@dooo++o+o:              ``````````h@o
    &nbsp;                     oy`         -oyy@@@@/      `:-               `````````-@@s
    &nbsp;                    +h            .-.o@@@`  `ds       /@/        ```````````o@@s
    &nbsp;                   -@`                  `yh@s ```                ` ```.`````-N@@:
    &nbsp;                   h/                         :do``.........`      ``````````s@@@
    &nbsp;                  .N                            `-/sy@@@@@@@d-:-. ````````````oN@:
    &nbsp;                  /h                              `:+@@@@@@@@@@@h/.````````````o@o
    &nbsp;                  oy                              :@@@@@@@@@@@@@@@y++/``````````oy
    &nbsp;                  +h                              :@@@@@@@@@@@@@@@@@@@oo/```````ss
    &nbsp;                  .N                              :@@@@@@@@@@@@@@@@@@@@@+```````d:
    &nbsp;                   d/                             ./s@@@@@@@@@@@@@@@@@d+.``````:@
    &nbsp;                   -@`                              `:s@@@@@@@@@@@@@@@+.``````.d/
    &nbsp;                    oy                                `-y@@@@@@@@@@@@@````````sy
    &nbsp;                     sy                               sN@@@@@@@@@@y/`````````oy
    &nbsp;                      +h`                             d@@@@@@@@@ys`````````.ys
    &nbsp;                       -h/                           `N@@@@@@N+/``````````/d:
    &nbsp;                         +h:                         -@@N@@d-.``````````:yo`
    &nbsp;                          `+y/                      +h@@/   ``````````/yo`
    &nbsp;                             :ss:                  -N@+.```````````:sy/
    &nbsp;                               `/ss+-              `--  ```````-+ss/`
    &nbsp;                                   ./ooo+:-.`  ````::/.-:-/osso/.
    &nbsp;                                        `-:+ossyhhhhysoo+/-`
  </Ascii>
);

const EarthFrame29 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooossosso+/:.
    &nbsp;                                   `:oy@N@hyd@@dy+:::+//h@@hsso:`
    &nbsp;                                :ososN@@@@@N@@@ys``/h@yo+`..``.:oss:
    &nbsp;                             -ss/` `h@@@@@@@@@@do@@N@@@@@ooh-`````./ys:
    &nbsp;                           /y+`    /N@@@@@@@@@@@@@@@@@Ns`+/ ` ```````.+y+`
    &nbsp;                         /h/      s@@@@@@@@@@@@@@@@@@y:        `````````/h+
    &nbsp;                       .h+        /dd@@@@@@@@@@N@@dy            ``````````+d-
    &nbsp;                      /h.          /:s@@@@@sooo++o+o`            ``````````/@o
    &nbsp;                     oy`          `/yydN@@d       -:`             ``````````s@s
    &nbsp;                    +h             `-..N@@s   +d-       hd        ``````````.@@s
    &nbsp;                   -@`                    /hd@: ``               ```.``.`````o@@:
    &nbsp;                   h/                           od:``.........     ``````````.N@@
    &nbsp;                  .N                              .-+sd@@@@@@@+::-````````````.@@:
    &nbsp;                  /h                                .:y@@@@@@@@@@@/:```````````-@o
    &nbsp;                  oy                                s@@@@@@@@@@@@@@@+++`````````oy
    &nbsp;                  +h                                s@@@@@@@@@@@@@@@@@Noo/``````ss
    &nbsp;                  .N                                s@@@@@@@@@@@@@@@@@@@@o``````d:
    &nbsp;                   d/                               -/d@@@@@@@@@@@@@@@@N+.`````:@
    &nbsp;                   -@`                                -:d@@@@@@@@@@@@@@o.`````.d/
    &nbsp;                    oy                                  .-N@@@@@@@@@@@@.``````sy
    &nbsp;                     sy                                `N@@@@@@@@@@h/.```````oy
    &nbsp;                      +h`                              :@@@@@@@@@hy.```````.ys
    &nbsp;                       -h/                             s@@@@@@@o+`````````/d:
    &nbsp;                         +h:                           N@@@@@:-`````````:yo`
    &nbsp;                          `+y/                       /s@@o  ``````````/yo`
    &nbsp;                             :ss:                   .N@+.``````````:sy/
    &nbsp;                               `/ss+-               `-- ```````-+ss/`
    &nbsp;                                   ./ooo+:-``` ````-:::`/:/osso/.
    &nbsp;                                        `-:+ossyhhhhhsoo+/-`
  </Ascii>
);

const EarthFrame30 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooososso+/:.
    &nbsp;                                   `:oy@N@hysN@hNoo:::o/odN@soo:`
    &nbsp;                                :oso/d@@@@@@N@@@so``+dNso/`-.`.:oss:
    &nbsp;                             -ss/`  -@@@@@@@@@@@do@@N@@@@@ooy-````./ss:
    &nbsp;                           /y+`     +@@@@@@@@@@@@@@@N@@@y./+`````````.+y+`
    &nbsp;                         /h/       y@@@@@@@@@@@@@@@@@@@:`      `````````:h+
    &nbsp;                       .h+         :ddN@@@@@@@@@@N@Nh:          ``````````/h-
    &nbsp;                      /h.           ::od@@@@hooo++o+o:           ``````````-@o
    &nbsp;                     oy`            :syh@@@@/      `:-           ```````````:Ns
    &nbsp;                    +h               ...s@@@.   hd       :@+      ```````````o@s
    &nbsp;                   -@`                      yh@d` ``      `       ``.````````.N@:
    &nbsp;                   h/                             dd``..........  `````.``````o@@
    &nbsp;                  .N                                -:osN@@@@@@@-::..``````````o@:
    &nbsp;                  /h                                  ::@@@@@@@@@@@y+.``````````do
    &nbsp;                  oy                                  @@@@@@@@@@@@@@@o++.```````oy
    &nbsp;                  +h                                  @@@@@@@@@@@@@@@@@@ss/`````ss
    &nbsp;                  .N                                  @@@@@@@@@@@@@@@@@@@@s`````d:
    &nbsp;                   d/                                 /+@@@@@@@@@@@@@@@@N+.````:@
    &nbsp;                   -@`                                  :+@@@@@@@@@@@@@@s`````.d/
    &nbsp;                    oy                                   `.s@@@@@@@@@@@@.`````sy
    &nbsp;                     sy                                  s@@@@@@@@@@@+.``````oy
    &nbsp;                      +h`                                @@@@@@@@@dy.``````.ys
    &nbsp;                       -h/                              -@@@@@@@s+.```````/d:
    &nbsp;                         +h:                            y@@@@@/-````````:yo`
    &nbsp;                          `+y/                        /o@@s ``````````/yo`
    &nbsp;                             :ss:                    .N@o.`````````:sy/
    &nbsp;                               `/ss+-                `--``.````-+ss/`
    &nbsp;                                   ./ooo+:-``` `````:::.-+/osso/.
    &nbsp;                                        `-:+ossshhhhhsoo+/-`
  </Ascii>
);

const EarthFrame31 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooososso+/:.
    &nbsp;                                   `:oy@N@hysd@@d@++::+o+h@Nyoo:`
    &nbsp;                                :oys/+N@@@@@d@@@Nso``+d@oo:.-..:oss:
    &nbsp;                             -ss/`   +@@@@@@@@@@@@+N@N@@@@Noos.```./ss:
    &nbsp;                           /y+`      o@@@@@@@@@@@@@@@N@@@h./+````````.+y+`
    &nbsp;                         /h/        s@@@@@@@@@@@@@@@@@@@/.     `````````:h+
    &nbsp;                       .h+          .hd@@@@@@@@@@@N@@ds         ``````````/h-
    &nbsp;                      /h.            -//y@@@@@oooo++o+o`         ``````````.do
    &nbsp;                     oy`             -+yyd@@@@       -:`         ```````````.ds
    &nbsp;                    +h                `...N@@h   :d+       yd`    ```````````-Ns
    &nbsp;                   -@`                       -hd@o ```      `     ```.````````s@:
    &nbsp;                   h/                              :do``.........```.``.``````.N@
    &nbsp;                  .N                                 `-/sy@@@@@@@+:::``````````:@:
    &nbsp;                  /h                                   `:+@@@@@@@@@@@/-`````````yo
    &nbsp;                  oy                                   -@@@@@@@@@@@@@@y++-``````oy
    &nbsp;                  +h                                   -@@@@@@@@@@@@@@@@@ys/````ss
    &nbsp;                  .N                                   -@@@@@@@@@@@@@@@@@@@o````d:
    &nbsp;                   d/                                  ./s@@@@@@@@@@@@@@@N+.```:@
    &nbsp;                   -@`                                   .:h@@@@@@@@@@@@@s````.d/
    &nbsp;                    oy                                     .-N@@@@@@@@@N@.````sy
    &nbsp;                     sy                                   .N@@@@@@@@@@+.`````oy
    &nbsp;                      +h`                                 +@@@@@@@@ds-`````.ys
    &nbsp;                       -h/                                @@@@@@@y+.``````/d:
    &nbsp;                         +h:                             +@@@@@+-```````:yo`
    &nbsp;                          `+y/                         :oN@h``````````/yo`
    &nbsp;                             :ss:                     `@@o...``````:sy/
    &nbsp;                               `/ss+-                 `--``.```-+ss/`
    &nbsp;                                   ./ooo+:-` `` ````-/::./+osso/.
    &nbsp;                                        `-:+osyshhhhhyoo+/-`
  </Ascii>
);

const EarthFrame32 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooossoso+/:.
    &nbsp;                                   `:oy@@Ndyss@@dNyo::-yosdNhso:`
    &nbsp;                                :oyy/:y@@@@@N@@@@@so`.+@doo--..:oss:
    &nbsp;                             -ss/.    oN@@@@@@@@@@N+@@N@@@@@ooo.``./ss:
    &nbsp;                           /y+`       o@@@@@@@@@@@@@@@N@@@d-:o..`````.+y+`
    &nbsp;                         /h/         s@@@@@@@@@@@@@@@@@@@s.    `````````:h+
    &nbsp;                       .h+           `yhd@@@@@@@@@@N@@@h.       ``````````/h-
    &nbsp;                      /h.             `+/oN@@@@hooo++o+o:        ``````````.ho
    &nbsp;                     oy`              .:yyd@@@@/       :-        ````````````ys
    &nbsp;                    +h                  ..`o@@@:   sd.      -d/  `````````````ds
    &nbsp;                   -@`                         oh@@- ``      ``   ```.````````:@:
    &nbsp;                   h/                                od:``.........````````````y@
    &nbsp;                  .N                                   .:os@@@@@@@d:::`.```````.N:
    &nbsp;                  /h                                     .:h@@@@@@@@@@+:````````so
    &nbsp;                  oy                                     o@@@@@@@@@@@@@d++-`````oy
    &nbsp;                  +h                                     o@@@@@@@@@@@@@@@@ys:```ss
    &nbsp;                  .N                                     s@@@@@@@@@@@@@@@@@@/```d:
    &nbsp;                   d/                                    -/@@@@@@@@@@@@@@@N/.``:@
    &nbsp;                   -@`                                     -/@@@@@@@@@@@@@o```.d/
    &nbsp;                    oy                                       .y@@@@@@@@@Nd.```sy
    &nbsp;                     sy                                     y@@@@@@@@@@+.````oy
    &nbsp;                      +h`                                  `N@@@@@@@@s-````.ys
    &nbsp;                       -h/                                 s@@@@@@h+.`````/d:
    &nbsp;                         +h:                              -@@N@@+-``````:yo`
    &nbsp;                          `+y/                          -o@@h.````````/yo`
    &nbsp;                             :ss:                      `@@o-.``````:sy/
    &nbsp;                               `/ss+-                  .--`..``-+ss/`
    &nbsp;                                   ./ooo+:-` `` ````.:/:-:oosso/.
    &nbsp;                                        `-:+osysyhhhhyso+/-`
  </Ascii>
);

const EarthFrame33 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooososo+/:.
    &nbsp;                                   `:oy@@@dhssh@@dNoo::/yoh@dso:`
    &nbsp;                                :oyy+:/@@@@@@@@@@@ds+`-oNyo+--.:oss:
    &nbsp;                             -ss/.    `yN@@@@@@@@@@@o@@N@@@@@oo+``./ss:
    &nbsp;                           /y+`        o@@@@@@@@@@@@@@@N@@@@::+..````.+y+`
    &nbsp;                         /h/          +@@@@@@@@@@@@@@@@@@@h-   `````````:h+
    &nbsp;                       .h+             ohhN@@@@@@@@@@N@@h/      ``````````+h-
    &nbsp;                      /h.               //+h@@@@@oooo+oo++       ``````````.ho
    &nbsp;                     oy`                :+yhdN@@N       -/`       ```````````ss
    &nbsp;                    +h                   `...@@@@   .dy       yh `````````````ys
    &nbsp;                   -@`                          `hh@h  ``     `` `````.```````.@:
    &nbsp;                   h/                                 `dh``.......--```````````+@
    &nbsp;                  .N                                     -:sy@@@@@@@/::..```````d:
    &nbsp;                  /h                                       :/N@@@@@@@@@s/```````so
    &nbsp;                  oy                                       @@@@@@@@@@@@@@++-````oy
    &nbsp;                  +h                                       @@@@@@@@@@@@@@@@ys-``ss
    &nbsp;                  .N                                       N@@@@@@@@@@@@@@@@@-``d:
    &nbsp;                   d/                                      /o@@@@@@@@@@@@@@@/``:@
    &nbsp;                   -@`                                      `:h@@@@@@@@@@@@/``.d/
    &nbsp;                    oy                                        .:@@@@@@@@@Ny```sy
    &nbsp;                     sy                                      -@@@@@@@@@@/.```oy
    &nbsp;                      +h`                                    h@@@@@@@ds.```.ys
    &nbsp;                       -h/                                  :@@@@@@h/.````/d:
    &nbsp;                         +h:                               `@@N@d+.`````:yo`
    &nbsp;                          `+y/                           .od@h.```````/yo`
    &nbsp;                             :ss:                       .@N+-.`````:sy/
    &nbsp;                               `/ss+-                   .-...``-+ss/`
    &nbsp;                                   ./ooo+:-` ``  ````-/:::+ssso/.
    &nbsp;                                        `-:+osyyyhhhhyso+/-`
  </Ascii>
);

const EarthFrame34 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooosooo+/:.
    &nbsp;                                   `:oyd@@@yy+yd@d@do+:-ssyddyo:`
    &nbsp;                                :oyyo:-oN@@@@@@N@@@hs+`:o@so+:.:oss:
    &nbsp;                             -ss/``    `yN@@@@@@@@@@@od@N@@@@doo:`./ss:
    &nbsp;                           /y+`         +@@@@@@@@@@@@@@@@@@@@//+-.```.+y+`
    &nbsp;                         /h/           :@@@@@@@@@@@@@@@@@@@@:  `````````:h+
    &nbsp;                       .h+              :hh@@@@@@@@@@@N@@@s     ``````````/h-
    &nbsp;                      /h.                .+/oN@@@@hooo++o+o-     ``````````.ho
    &nbsp;                     oy`                 .:yyd@@@@o      `/-      ```````````ss
    &nbsp;                    +h                     ..`/@@@o   +@:      /d-````````````ys
    &nbsp;                   -@`                            :hd@+ ```     ````.``.``````.d:
    &nbsp;                   h/                                   :@o``......--.`````````:@
    &nbsp;                  .N                                      `:+sd@@@@@@s::-.``````d:
    &nbsp;                  /h                                        `:s@@@@@@@@@h/``````so
    &nbsp;                  oy                                        :@@@@@@@@@@@@N++.```oy
    &nbsp;                  +h                                        :@@@@@@@@@@@@@@@yo``ss
    &nbsp;                  .N                                        /@@@@@@@@@@@@@@@@d``d:
    &nbsp;                   d/                                       ./d@@@@@@@@@@@@@h:`:@
    &nbsp;                   -@`                                        -/@@@@@@@@@@@N-`.d/
    &nbsp;                    oy                                         `.@@@@@@@@NNo``sy
    &nbsp;                     sy                                       `@@@@@@@@@d/```oy
    &nbsp;                      +h`                                     /@@@@@@@ds.``.ys
    &nbsp;                       -h/                                   .N@@@@@y/.```/d:
    &nbsp;                         +h:                                `d@Ndd+.````:yo`
    &nbsp;                          `+y/                            .sd@h.``````/yo`
    &nbsp;                             :ss:                        .@N+-.````:sy/
    &nbsp;                               `/ss+-                   `.-...`-+ss/`
    &nbsp;                                   ./ooo+:-`  `` ````.//://ssso/.
    &nbsp;                                        `-:+ooyyyyhhhyso+/-`
  </Ascii>
);

const EarthFrame35 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooossoo+/:.
    &nbsp;                                   `:oydN@@hyssddNdNys::/hshdyo:`
    &nbsp;                                :osyo:--y@@@@@@d@@@@yo/`/ydoo/-:oss:
    &nbsp;                             -ss/``     .hN@@@@@@@@@@@sd@N@@@@ho+-./ss:
    &nbsp;                           /y+`          /@@@@@@@@@@@@@@@@@@@N//+-```.+y+`
    &nbsp;                         /h/            .N@@@@@@@@@@@@@@@@@@N/``````````:h+
    &nbsp;                       .h+               `hhh@@@@@@@@@@@@@Nh.   ``````````/h-
    &nbsp;                      /h.                  +/oh@@@@@oooo+oo+/    ``````````.ho
    &nbsp;                     oy`                   :+yhdN@@@`      -/    ````````````ss
    &nbsp;                    +h                      `..`h@@@.   dh      `do```````````ys
    &nbsp;                   -@`                              sh@@. ``     ```.``.``````.d:
    &nbsp;                   h/                                     y@.`.....---.````````:@
    &nbsp;                  .N                                        -/sy@@@@@@h::-.`````d:
    &nbsp;                  /h                                          -:N@@@@@@@@h/`````so
    &nbsp;                  oy                                          y@@@@@@@@@@@N++.``oy
    &nbsp;                  +h                                          h@@@@@@@@@@@@@@s/`ss
    &nbsp;                  .N                                          d@@@@@@@@@@@@@@@+`d:
    &nbsp;                   d/                                         /o@@@@@@@@@@@@@o.:@
    &nbsp;                   -@`                                         `:d@@@@@@@@@@d..d/
    &nbsp;                    oy                                          `-s@@@@@@@N@-`sy
    &nbsp;                     sy                                         s@@@@@@@@h:``oy
    &nbsp;                      +h`                                      .N@@@@@@ho``.ys
    &nbsp;                       -h/                                    `d@@@@@s/```/d:
    &nbsp;                         +h:                                ``y@Ndd/.```:yo`
    &nbsp;                          `+y/                             .sh@y.`````/yo`
    &nbsp;                             :ss:                         -@@/-.```:sy/
    &nbsp;                               `/ss+-                   ``--.`.-+ss/`
    &nbsp;                                   ./ooo+:-`  ``  ```.-/://syso/.
    &nbsp;                                        `-:+oosyyyhhhyso+/-`
  </Ascii>
);

const EarthFrame36 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooosoossoo+/:.
    &nbsp;                                   `:oydN@Nhyy+hh@@@dy+::shyhyo:`
    &nbsp;                                :osy+/--:d@@@@@@d@@@@so:.+hyoo/:oss:
    &nbsp;                             -ss/``      -hN@@@@@@@@@@@yh@N@@@@yo/./ss:
    &nbsp;                           /y+`           -@@@@@@@@@@@@@@@@@@@N/+/-``.+y+`
    &nbsp;                         /h/              d@@@@@@@@@@@@@@@@@@@o`````````:h+
    &nbsp;                       .h+                 shh@@@@@@@@@@@@@@d:` ``````````/h-
    &nbsp;                      /h.                   -++oN@@@@dooo+oo/+`  ``````````.ho
    &nbsp;                     oy`                    .:yyd@@@@y      `/.  ````````````ss
    &nbsp;                    +h                        ..`-@@@h   /@/      sh``````````ys
    &nbsp;                   -@`                               .hd@y````    `...````````.d:
    &nbsp;                   h/                                      .@s``..------```````:@
    &nbsp;                  .N                                         `/+yd@@@@@@::-`````d:
    &nbsp;                  /h                                           `:s@@@@@@@@d/````so
    &nbsp;                  oy                                           .@@@@@@@@@@@N+/``oy
    &nbsp;                  +h                                           -@@@@@@@@@@@@@@s.ss
    &nbsp;                  .N                                           :@@@@@@@@@@@@@@N`d:
    &nbsp;                   d/                                          ./@@@@@@@@@@@@N::@
    &nbsp;                   -@`                                           -s@@@@@@@@@@+.d/
    &nbsp;                    oy                                          ``-+@@@@@@@Ny`sy
    &nbsp;                     sy                                         `:@@@@@@@@o.`oy
    &nbsp;                      +h`                                      ``@@@@@@@y/`.ys
    &nbsp;                       -h/                                    ``y@@@@@o:``/d:
    &nbsp;                         +h:                                ``.s@@dh:```:yo`
    &nbsp;                          `+y/                              .sh@s.````/yo`
    &nbsp;                             :ss:                         `:@d:.```:sy/
    &nbsp;                               `/ss+-                   ```--.`-+ss/`
    &nbsp;                                   ./ooo+:-`  ``` ```..///+oyso/.
    &nbsp;                                        `-:+oosyhyhhhyso+/-`
  </Ascii>
);

const EarthFrame37 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooosooosoo+/:.
    &nbsp;                                   `:oyd@@Ndysyo@hNdNhy//+dyhyo:`
    &nbsp;                                :oss+/:-./@@@@@@N@@@@Nso--ohsoo/oss:
    &nbsp;                             -ss/` `      -hN@@@@@@@@@@@yh@N@@@Ns/:/ss:
    &nbsp;                           /y+`            .N@@@@@@@@@@@@@@@@@@N/o/.`.+y+`
    &nbsp;                         /h/               s@@@@@@@@@@@@@@@@@@@s.```````:h+
    &nbsp;                       .h+                  :hhh@@@@@@@@@@@@@@o```````````/h-
    &nbsp;                      /h.                     ++oh@@@@@oooo+o/+- ``````````.ho
    &nbsp;                     oy`                      :/yhdN@@@.      :: ````````````ss
    &nbsp;                    +h                         `...o@@@:   hh     `/d.````````ys
    &nbsp;                   -@`                                 /h@@:``.   ``..````````.d:
    &nbsp;                   h/                                        o@-`..------``````:@
    &nbsp;                  .N                                           -/sy@@@@@N::-````d:
    &nbsp;                  /h                                             -/N@@@@@@@h:```so
    &nbsp;                  oy                                             y@@@@@@@@@@@+-`oy
    &nbsp;                  +h                                             h@@@@@@@@@@@@h/ss
    &nbsp;                  .N                                             d@@@@@@@@@@@@@+d:
    &nbsp;                   d/                                            /s@@@@@@@@@@@y:@
    &nbsp;                   -@`                                          ` -/@@@@@@@@@@.d/
    &nbsp;                    oy                                          ```.:N@@@@@N@:sy
    &nbsp;                     sy                                        ```.N@@@@@@@/`oy
    &nbsp;                      +h`                                      ```h@@@@@No-.ys
    &nbsp;                       -h/                                    ```s@@@@N/-`/d:
    &nbsp;                         +d:                                ```.s@@dy-``:yo`
    &nbsp;                          `+y/                              `.sdNo````/yo`
    &nbsp;                             :ss:                         ``/Ny-.``:sy/
    &nbsp;                               `/ss+-                   ```.--`-+ss/`
    &nbsp;                                   ./ooo+:-`   ``  ``..://+oyso/.
    &nbsp;                                        `-:+oooyhyyhhyso+/-`
  </Ascii>
);

const EarthFrame38 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooosoosso+/:.
    &nbsp;                                   `:osh@NN@yshohdd@@dho//yhyyo:`
    &nbsp;                                :oso+:+-..+N@@@@@N@@@@@oo.:syosooss:
    &nbsp;                             -ss/`         -y@@@@@@@@@@@@yh@N@@@@o/+ss:
    &nbsp;                           /y+`             `@@@@@@@@@@@@@N@@@@@@/o:`.+y+`
    &nbsp;                         /h/                /@@@@@@@@@@@@@@@@@@@y.``````:h+
    &nbsp;                       .h+                   `hhhN@@@@@@@@@@@@Ny.`````````/h-
    &nbsp;                      /h.                      -++oN@@@@hooo+oo//``````````.ho
    &nbsp;                     oy`                       .:shd@@@@y      -/````````````ss
    &nbsp;                    +h                           ....@@@@   :d/  ```-d-```````ys
    &nbsp;                   -@`                                  `yd@d``.. ```-.```````.d:
    &nbsp;                   h/                                         .@s`..------`````:@
    &nbsp;                  .N                                            `/oyN@@@@N::.```d:
    &nbsp;                  /h                                              ./h@@@@@@@y-``so
    &nbsp;                  oy                                              -@@@@@@@@@@h+`oy
    &nbsp;                  +h                                              :@@@@@@@@@@@@sss
    &nbsp;                  .N                                              +@@@@@@@@@@@@dd:
    &nbsp;                   d/                                             -+@@@@@@@@@@N+@
    &nbsp;                   -@`                                          ```.:@@@@@@@@@+d/
    &nbsp;                    oy                                          ```..-@@@@@@Nysy
    &nbsp;                     sy                                        `````d@@@@@@h-oy
    &nbsp;                      +h`                                      ````s@@@@@d+.ys
    &nbsp;                       -h/`                                   ````o@@@@d:./d:
    &nbsp;                         +d:                                 ```.s@dhs.`:yo`
    &nbsp;                          `+y/                              ``-yd@/```/yo`
    &nbsp;                             :ss:                         ```+@s-.`:sy/
    &nbsp;                               `/ss+-                   ````.-.-+ss/`
    &nbsp;                                   ./ooo+:-`   ``` ``..-//+ssso/.
    &nbsp;                                        `-:+oooshhyhhyso+/-`
  </Ascii>
);

const EarthFrame39 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooosoooso+/:.
    &nbsp;                                   `:oshd@NNhssh+@d@d@hho+odyso:`
    &nbsp;                                :oso/:+:..-oN@@@@@@N@@@doo.+ssososs:
    &nbsp;                             -ss/`  `       -y@@@@@@@@@@@@hh@@@@Nh/oss:
    &nbsp;                           /y+`               h@@@@@@@@@@@@N@@@@@d:o..+y+`
    &nbsp;                         /h/                 `N@@@@@@@@@@@@@@@@@@y.`````:h+
    &nbsp;                       .h+                     +hhd@@@@@@@@@@@@@h-.```````/h-
    &nbsp;                      /h.                        ++oh@@@@Nooooos/+`````````.ho
    &nbsp;                     oy`                         :/yd@N@@@.     ./.``````````ss
    &nbsp;                    +h                             .../@@@+   hy ```..h:``````ys
    &nbsp;                   -@`                                    :h@@/`.-````-.``````.d:
    &nbsp;                   h/                                           s@-..-----.````:@
    &nbsp;                  .N                                              :+yd@@@@N::.``d:
    &nbsp;                  /h                                              ``/s@@@@@@@o.`so
    &nbsp;                  oy                                              ``@@@@@@@@@@s:oy
    &nbsp;                  +h                                              ``@@@@@@@@@@@dhs
    &nbsp;                  .N                                              `.N@@@@@@@@@@@@:
    &nbsp;                   d/                                             `./@@@@@@@@@@y@
    &nbsp;                   -@`                                           ````:h@@@@@@@dd/
    &nbsp;                    oy                                           ```..-d@@@@@dyy
    &nbsp;                     sy                                        ``````h@@@@@N+sy
    &nbsp;                      +h`                                       ````o@@@@@s:ys
    &nbsp;                       -h/`                                   `````o@@@Ns-/d:
    &nbsp;                         +h/                                 ````.s@hh+`:yo`
    &nbsp;                          `+y/                              ```-ydd:``/yo`
    &nbsp;                             :ss:                         ```.sd+.`:sy/
    &nbsp;                               `/ss+-                   `````.--+ss/`
    &nbsp;                                   ./ooo+:-`    `` ``..-/++ssso/.
    &nbsp;                                        `-:+oooshhyyhyso+/-`
  </Ascii>
);

const EarthFrame40 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooosooooo+/:.
    &nbsp;                                   `:oshdd@Ndsshsy@d@dddhoohyso:`
    &nbsp;                                :oso:::o-..:s@@@@@@@N@@@yo+-osoysss:
    &nbsp;                             -ss/`           :y@@@@@@@@@@@@hh@@@@@soys:
    &nbsp;                           /y+`                o@@@@@@@@@@@@N@@@@@y/+.+y+`
    &nbsp;                         /h/                   h@@@@@@@@@@@@@@@@@@y`````:h+
    &nbsp;                       .h+                      .hhhN@@@@@@@@@@@@d:.``````/h-
    &nbsp;                      /h.                         -+ooN@@@@hoooos/+.```````.ho
    &nbsp;                     oy`                          .:oh@@@@@y     `+:`````````ss
    &nbsp;                    +h                              `...d@@N   +d.````.y:`````ys
    &nbsp;                   -@`                                    ``sd@h`.-..``-.`````.d:
    &nbsp;                   h/                                            -@o.------.```:@
    &nbsp;                  .N                                               -+yh@@@@@:-``d:
    &nbsp;                  /h                                              ```-+@@@@@@N/`so
    &nbsp;                  oy                                              ```s@@@@@@@@@+oy
    &nbsp;                  +h                                              ```s@@@@@@@@@Nds
    &nbsp;                  .N                                              ```h@@@@@@@@@@@:
    &nbsp;                   d/                                            ````/h@@@@@@@@@@
    &nbsp;                   -@.                                           `````-y@@@@@@N@/
    &nbsp;                    oy                                         ```.``.`-d@@@@@@y
    &nbsp;                     sy                                         ``````y@@@@@ysy
    &nbsp;                      +h`                                      ``````o@@@@@+ys
    &nbsp;                       -h/                                     `````o@@@@//d:
    &nbsp;                         +h+`                                `````.yNhy-:yo`
    &nbsp;                          `+h+                              ````:y@y.`/yo`
    &nbsp;                             :ss:                         ````-yh/.:sy/
    &nbsp;                               `/ss+-                   ``````-:+ss/`
    &nbsp;                                   ./ooo+:-`    ``` `..-:++ssss/.
    &nbsp;                                        `-:+ooosyhhyyyso+/-`
  </Ascii>
);

const EarthFrame41 = () => (
  <Ascii>
    &nbsp;                                        .-/+ooooosoooo+/:.
    &nbsp;                                   `:oshdhd@@hssdod@dd@h@yoyhso:`
    &nbsp;                                :oso:.:+/..`:y@@@@@@@@@@Nso//osyhss:
    &nbsp;                             -ss/`            :sd@@@@@@@@@@@hh@@@Ndshs:
    &nbsp;                           /y+`                 :@@@@@@@@@@@@N@@@@@oo-+y+`
    &nbsp;                         /h/                    +@@@@@@@@@@@@@@@@@@s````:h+
    &nbsp;                       .h+                        shhd@@@@@@@@@@@@@:.`````/h-
    &nbsp;                      /h.                           +ooh@@@@@ossos++-``````.ho
    &nbsp;                     oy`                            ::yd@N@@@.   ``/:````````ss
    &nbsp;                    +h                                ...:@@@+  .d+`````y:````ys
    &nbsp;                   -@`                                    ```-d@@:.--``...````.d:
    &nbsp;                   h/                                              hh.-----..``:@
    &nbsp;                  .N                                               ``+sh@@@@d:.`d:
    &nbsp;                  /h                                               ```./N@@@@@h.so
    &nbsp;                  oy                                               ```:@@@@@@@@ysy
    &nbsp;                  +h                                             ` ```/@@@@@@@@@@s
    &nbsp;                  .N                                             ` ```o@@@@@@@@@@:
    &nbsp;                   d/                                            `````:s@@@@@@@@@
    &nbsp;                   -@.                                           ```.``-s@@@@@@@/
    &nbsp;                    oy                                          ``.``.``-d@@@NNy
    &nbsp;                     sy                                         ```````y@@@@@hy
    &nbsp;                      +h`                                      ```````o@@@@shs
    &nbsp;                       -h/                                     ``````s@@Ns+d:
    &nbsp;                         +h/.                               ```````-h@yo:yo`
    &nbsp;                          `+ho`                             `````+yd+./yo`
    &nbsp;                             :ss:                         `````/hs-:sy/
    &nbsp;                               `/ss+-                   ``````.:+ss/`
    &nbsp;                                   ./ooo+:-`     `` `..--/+osss/.
    &nbsp;                                        `-:+ooosyhhyyyso+/-`
  </Ascii>
);

const EarthFrame42 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooosoooo+/:.
    &nbsp;                                   `:oyhdhy@@dsshhsd@ddd@@sshso:`
    &nbsp;                                :oso:-./o-.`./yN@@@@@@@@@@oo:ooydys:
    &nbsp;                             -ss/`             -sd@@@@@@@@@@@yhN@@@hhs:
    &nbsp;                           /y+`                  .@@@@@@@@@@@@N@@@@N/++y+`
    &nbsp;                         /h/                     .@@@@@@@@@@@@@@@@@@+```:h+
    &nbsp;                       .h+                         :hhh@@@@@@@@@@@@@:.````/h-
    &nbsp;                      /h.                            -+ss@@@@@sssos++-`````.ho
    &nbsp;                     oy`                             .:oy@@@@@o  ```//```````ss
    &nbsp;                    +h                                 `...h@@@   yy`````y-```ys
    &nbsp;                   -@`                                      ```yd@y.--```-.```.d:
    &nbsp;                   h/                                             ``o@-.--....`:@
    &nbsp;                  .N                                               ```/oyN@@@s:`d:
    &nbsp;                  /h                                               ```.`/@@@@@@/so
    &nbsp;                  oy                                               ````.N@@@@@@@yy
    &nbsp;                  +h                                             ` ```..@@@@@@@@Ns
    &nbsp;                  .N                                             ``````:@@@@@@@@@:
    &nbsp;                   d/                                            ``````-o@@@@@@@@
    &nbsp;                   -@.                                            ``````.s@@@@@@/
    &nbsp;                    oy                                          ```.````.-@@@@@y
    &nbsp;                     sy                                         ````````h@@@@@y
    &nbsp;                      +h`                                      ````````y@@@d@s
    &nbsp;                       -h/                                    ```````.h@@dod:
    &nbsp;                         +h:-`                              ```````.:@hy/yo`
    &nbsp;                          `+ys`                             `````.ohh:/yo`
    &nbsp;                             :ss:                         `````.+y+:sy/
    &nbsp;                               `/ss+-                   ``````.:+ss/`
    &nbsp;                                   ./ooo+:-`     ````..--/oosss/.
    &nbsp;                                        `-:+ooosshhyyyso+/-`
  </Ascii>
);

const EarthFrame43 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooosoooo+/:.
    &nbsp;                                   `:oyhhhyhddhssdsy@dd@dNhsyyo:`
    &nbsp;                                :oso:-`:+o.``./hN@@@@N@@@@ho+/oydhs:
    &nbsp;                             -ss/`              -sd@@@@@@@@@@@yd@@@Nhy:
    &nbsp;                           /y+`                    @@@@@@@@@@@NN@@@@yooy+`
    &nbsp;                         /h/                       d@@@@@@@@@@@@@@@@N-``:h+
    &nbsp;                       .h+                          `hhh@@@@@@@@@@@@@:.```/h-
    &nbsp;                      /h.                              +sod@@@@dsssyo/-````.ho
    &nbsp;                     oy`                               ::yd@N@@d ````:/``````ss
    &nbsp;                    +h                                   ...:@@@:``+d.```.y.``ys
    &nbsp;                   -@`                                       ```/d@@--:```-.``.d:
    &nbsp;                   h/                                             ```:@:......`:@
    &nbsp;                  .N                                              ``.``:ohN@@@:.d:
    &nbsp;                  /h                                              ``.````/d@@@@hso
    &nbsp;                  oy                                              ```````@@@@@@@hy
    &nbsp;                  +h                                              ``.````N@@@@@@@s
    &nbsp;                  .N                                              ``````-@@@@@@@@:
    &nbsp;                   d/                                             ``````.o@@@@@@@
    &nbsp;                   -@`.                                         ` ```````.y@@@@@/
    &nbsp;                    oy                                          ```.`````.:N@@@y
    &nbsp;                     sy                                        `````````.d@@@@y
    &nbsp;                      +h`                                      ````````.d@@NNs
    &nbsp;                       -h/                                    ````````-@@@hd:
    &nbsp;                         +h:`:                              ````````.+dysyo`
    &nbsp;                          `+yo-                             ``````-yho/yo`
    &nbsp;                             :ss:                         ``````-ss+sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-`      ````.--:+osso/.
    &nbsp;                                        `-:+ooossyhhsyso+/-`
  </Ascii>
);

const EarthFrame44 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooosooo+/:.
    &nbsp;                                   `:oyhhyysdddysydsh@dd@N@ysyo:`
    &nbsp;                                :oso::.`/o/```-+hN@@@@NN@@@so++sdds:
    &nbsp;                             -ss/`               -od@@@@@@@@@@Ny@@N@dy:
    &nbsp;                           /y+`                     h@@@@@@@@@@NN@@@Noyy+`
    &nbsp;                         /h/                        o@@@@@@@@@@@@@@@@d.`:h+
    &nbsp;                       .h+                            ohhd@@@@@@@@@@@@-```/h-
    &nbsp;                      /h.                               -osy@@@@@sysyo/.```.ho
    &nbsp;                     oy`                                .:+h@@@@@-````:/`````ss
    &nbsp;                    +h                                    `...h@@y``:d-```-o``ys
    &nbsp;                   -@`                                        ```.h@N/-:```-``.d:
    &nbsp;                   h/                                             ```..@+......:@
    &nbsp;                  .N                                              ``````-ohN@@h-d:
    &nbsp;                  /h                                              ````````:d@@@Nho
    &nbsp;                  oy                                              ````````@@@@@@Ny
    &nbsp;                  +h                                              ````````@@@@@@@s
    &nbsp;                  .N                                              ```````.@@@@@@@:
    &nbsp;                   d/                                             ```````.o@@@@@@
    &nbsp;                   -@`.`                                        ``````````.h@@@@/
    &nbsp;                    oy                                          ````.`````.o@@@y
    &nbsp;                     sy`                                       ``````````-N@@@y
    &nbsp;                      +d.                                       ````````-@@@@s
    &nbsp;                       -h/                                    `````````/NN@d:
    &nbsp;                         +h: -.                              ````````-yhhho`
    &nbsp;                          `+y+:`                            ```````/yyoyo`
    &nbsp;                             :ss:                         ``````./sssy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-`      ````.--:+osso/.
    &nbsp;                                        `-:+ooossyhhysso+/-`
  </Ascii>
);

const EarthFrame45 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooosooo+/:.
    &nbsp;                                   `:oyddyssyd@hssdho@@d@@@hsso:`
    &nbsp;                                :syo::- `+o:```-+dN@@@@@N@@@o+oshds:
    &nbsp;                             -sy/.                -odN@@@@@@@@@@yN@@@s:
    &nbsp;                           /y+`                      o@@@@@@@@@@N@@@@hyh+`
    &nbsp;                         /h/                         -@@@@@@@@@@@@@@@@o`:h+
    &nbsp;                       .h+                             -hhhN@@@@@@@@@@d.``/h-
    &nbsp;                      /h.                                `+ssN@@@@yysy+/.``.ho
    &nbsp;                     oy`                                  ::y@@N@@+````::````ss
    &nbsp;                    +h                                      ...+@@N...d:```/:`ys
    &nbsp;                   -@`                                          ```sd@o--``.-`.d:
    &nbsp;                   h/                                             ``````d+.....:@
    &nbsp;                  .N                                              ```.```-oh@@@/@:
    &nbsp;                  /h                                              `````````:@@@@@o
    &nbsp;                  oy                                              `````````@@@@@@y
    &nbsp;                  +h                                              `````````@@@@@@s
    &nbsp;                  .N                                              ````````.@@@@@@:
    &nbsp;                   d/                                             ````````.s@@@@@
    &nbsp;                   -@` -                                         ``````````-@@@@/
    &nbsp;                    oy                                         ` ```.``````-h@@y
    &nbsp;                     sh.                                       ```````````/@@@y
    &nbsp;                      +@-                                       `````````+@@@s
    &nbsp;                       -d/                                    `````````.s@N@:
    &nbsp;                         +h:  /`                             `````````/yh@o`
    &nbsp;                          `+y/:-                            ```````.oyyyo`
    &nbsp;                             :ss:                         ```````-+yyy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-`       ```.--:/osso/.
    &nbsp;                                        `-:+ooossyyhysso+/-`
  </Ascii>
);

const EarthFrame46 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@dyosod@@ysydyyN@d@@@sso:`
    &nbsp;                                :syo/:-` .so.```:+d@@@@@@@@@h+oyhds:
    &nbsp;                             -sy+.                 -+dN@@@@@@@@@hh@@Ns:
    &nbsp;                           /y+`                       /@@@@@@@@@@N@@@@hh+`
    &nbsp;                         /h/                           @@@@@@@@@@@@@@@N-:h+
    &nbsp;                       .h+                              `yhd@@@@@@@@@@@s.`/h-
    &nbsp;                      /h.                                  :ssd@@@@yyyy//``.ho
    &nbsp;                     oy`                                   ./od@N@@y````/-```ss
    &nbsp;                    +h                                       `-.-N@@:`.h:```+.ys
    &nbsp;                   -@`                                           `../d@s--``...d:
    &nbsp;                   h/                                              ```.``h+....:@
    &nbsp;                  .N                                               ```````-oh@@y@:
    &nbsp;                  /h                                               `````````/@@@@o
    &nbsp;                  oy                                              ``````````N@@@@y
    &nbsp;                  +h                                              ``````````N@@@@s
    &nbsp;                  .N                                               ````````-@@@@@:
    &nbsp;                   d/                                            ``````````-h@@@@
    &nbsp;                   -@` `.                                        ```````````/@@@/
    &nbsp;                    oh`                                         ``.``.`````./N@y
    &nbsp;                     s@-                                        ```````````h@@y
    &nbsp;                      +N+                                      ``````````.h@@s
    &nbsp;                       -d+                                     `````````:@@@:
    &nbsp;                         +h:  `/`                            `````````.odNo`
    &nbsp;                          `+y/./`                           ````````:shho`
    &nbsp;                             :ss:                         ```````./ydy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-`       ````.-:/osso/.
    &nbsp;                                        `-:+ooossyyhysso+/-`
  </Ascii>
);

const EarthFrame47 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooooosoo+/:.
    &nbsp;                                   `:oy@@yo+oy@@dsshdo@NdNNNyso:`
    &nbsp;                                :ohs/:-.  :s+````/+@@@@@N@@@Nooyhds:
    &nbsp;                             -sy+-`                 -+dN@@@@@@@@NyN@Ny:
    &nbsp;                           /y+`                        -@@@@@@@@@@N@@@@d+`
    &nbsp;                         /h/                            s@@@@@@@@@@@@@@y:h+
    &nbsp;                       .h+                                +ddd@@@@@@@@@N/`/h-
    &nbsp;                      /h.                                   .+hy@@@@hyyy::`.ho
    &nbsp;                     oy`                                    `//h@N@@d````+.``ss
    &nbsp;                    +h                                         ---y@@+`.y:``-/ys
    &nbsp;                   -@`                                            `.-:d@y--``-.d:
    &nbsp;                   h/                                             `````.``d/...:@
    &nbsp;                  .N                                               ```.````-sd@N@:
    &nbsp;                  /h                                               `````````.o@@@o
    &nbsp;                  oy                                               `````````.@@@@y
    &nbsp;                  +d`                                            ` `````````-@@@@s
    &nbsp;                  .@`                                            ` `````````/@@@@:
    &nbsp;                   d/                                            ```````````-N@@@
    &nbsp;                   -@`  ..                                       ```````````.y@@/
    &nbsp;                    o@.                                         ``.`````````-h@y
    &nbsp;                     sN+                                        ```````````:N@y
    &nbsp;                      +@h`                                     ```````````/N@s
    &nbsp;                       -@h                                    ``````````.s@@:
    &nbsp;                         +h:   `+                           ```````````/hNo`
    &nbsp;                          `+y/ ::                           ````````.oddo`
    &nbsp;                             :ss:                         ````````-ody/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-`       ``.`.-:/osso/.
    &nbsp;                                        `-:+oooosyyyhsso+/-`
  </Ascii>
);

const EarthFrame48 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@Nhs++od@@ysydysNN@N@hso:`
    &nbsp;                                :ohy+:--`  +s+````/o@@@@@NN@@hoyhhs:
    &nbsp;                             -ss+-`                  -+hN@@@@@@@@dh@Ny:
    &nbsp;                           /y+`                         .N@@@@@@@@N@@@Nd+`
    &nbsp;                         /h/                             /@@@@@@@@@@@@@@+h+
    &nbsp;                       .h+                                 :ddd@@@@@@@@@d./h-
    &nbsp;                      /h.                                     +hyN@@@dhyy:-.ho
    &nbsp;                     oy`                                      ::y@N@@@.``.+``ss
    &nbsp;                    +h                                          .--o@@s`.y-``/ys
    &nbsp;                   -@`                                            ``.--h@y--`..d:
    &nbsp;                   h/                                             ``.``..``d-../@
    &nbsp;                  .N                                              ``.```````:yN@N:
    &nbsp;                  /h                                               ``````````.h@@o
    &nbsp;                  oy                                               ``````````/@@@y
    &nbsp;                  +@-                                            ` ``````````+@@@s
    &nbsp;                  .@:                                            ````````````y@@@:
    &nbsp;                   do                                            ````````````+@@@
    &nbsp;                   -N.   -`                                       ```````````-N@/
    &nbsp;                    o@/                                         ```.````````.+@y
    &nbsp;                     s@y.                                       ````````````y@y
    &nbsp;                      +@N:                                     ```````````.h@s
    &nbsp;                       -@N.                                   ```````````:@@:
    &nbsp;                         +d/    .+                          ```````````-sNo`
    &nbsp;                          `+h/ `/-                          `````````/h@o`
    &nbsp;                             :ss:                         ````````.ody/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-`        `.`.-:/osso/.
    &nbsp;                                        `-:+oooosyyyhyso+/-`
  </Ascii>
);

const EarthFrame49 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@Nds+:os@@dsshdodN@NN@so:`
    &nbsp;                                :oyd+:--.   ss/```./oN@@@@@N@Nsydys:
    &nbsp;                             -ss/-.                   -ohN@@@@@@@@hNNy:
    &nbsp;                           /h+`                          `d@@@@@@@@@@@@@+`
    &nbsp;                         /h/                              .N@@@@@@@@@@@@hh+
    &nbsp;                       .h+                                  `hddN@@@@@@@@++h-
    &nbsp;                      /h.                                      :yy@@@@dhyo:.ho
    &nbsp;                     oy`                                       ./odNN@@.``::`ss
    &nbsp;                    +h                                           .::/@@s`.y.`-hs
    &nbsp;                   -@`                                            ```---y@s-.`-d:
    &nbsp;                   h/                                             ``````....d../@
    &nbsp;                  .N                                              ```````````+h@@:
    &nbsp;                  /h                                              ``.`````````:@@o
    &nbsp;                  oy                                              ````````````y@@y
    &nbsp;                  +N+                                             ````````````h@@s
    &nbsp;                  .N+                                             ```````````.N@@:
    &nbsp;                   ds                                             ```````````.d@@
    &nbsp;                   -@/    :`                                    ` ````````````y@/
    &nbsp;                    o@y`                                        ```.`````````-@y
    &nbsp;                     s@N/                                      `````````````/Ny
    &nbsp;                      +@@h`                                    ````````````+Ns
    &nbsp;                       -@@o                                   ```````````.y@:
    &nbsp;                         +@+`    -+                         ```````````.o@o`
    &nbsp;                          `+h/  ./.                         `````````-y@o`
    &nbsp;                             :ss:                         `````````/hh/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+/-`        `...-:/osso/.
    &nbsp;                                        `-:+oooosyyyyyso+/-`
  </Ascii>
);

const EarthFrame50 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@N@s+::oh@@hss@hyNN@N@yo:`
    &nbsp;                                :osds/--.`   yo:```.+oN@@@NN@@hydys:
    &nbsp;                             -sy/-.`                   -ohN@@@@@@N@dNy:
    &nbsp;                           /hs.                           `h@@@@@@@NN@@@+`
    &nbsp;                         /h/                               `@@@@@@@@@@@@Nh+
    &nbsp;                       .h+                                   `yddN@@@@@@@d+h-
    &nbsp;                      /h.                                       .sh@@@@dhh/:ho
    &nbsp;                     oy`                                        `/+dNN@d.``/.ss
    &nbsp;                    +h                                           ``:::N@s`-o``ds
    &nbsp;                   -@`                                            ````---y@o-.-d:
    &nbsp;                   h/                                             ```.```...:s./@
    &nbsp;                  .N                                              ```````````.sN@:
    &nbsp;                  /h                                              ````````````.h@o
    &nbsp;                  oh                                              ````````````.@@y
    &nbsp;                  +ds.                                            ````````````-@@s
    &nbsp;                  .No.                                            ````````````+@@:
    &nbsp;                   ds-                                            ````````````/@@
    &nbsp;                   -No     :`                                    ``.``````````/@/
    &nbsp;                    o@N-                                         ```.````````.yy
    &nbsp;                     s@@y-                                     `````````````.dy
    &nbsp;                      +@@@/                                     ```````````-@s
    &nbsp;                       -dN@`                                  ```````````.o@:
    &nbsp;                         +ds.     -+                         ```````````/do`
    &nbsp;                          `+h/   :/`                        `````````.odo`
    &nbsp;                             :ss:                         `````````:yy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+/-`        `...-:/osso/.
    &nbsp;                                        `-:+oooooyyyyyso+/-`
  </Ascii>
);

const EarthFrame51 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@Nho/-+s@@dyshdy@NNN@yo:`
    &nbsp;                                :osyy+--..   `ho-```-+sN@@@NN@@hdhs:
    &nbsp;                             -sd+.-.                    -ohN@@@@@@@@Ny:
    &nbsp;                           /hy:                            `h@@@@@@@@@@@+`
    &nbsp;                         /h/                                 h@@@@@@@@@@@@+
    &nbsp;                       .h+                                    `od@N@@@@@@Nyh-
    &nbsp;                      /h.                                        `odd@@@dhs:ho
    &nbsp;                     oy`                                          //hNN@h``-:ss
    &nbsp;                    +h                                           ```:::@@o`/:`hs
    &nbsp;                   -@`                                           `````..--y@/-.d:
    &nbsp;                   h/                                              ```````...s-/@
    &nbsp;                  .N                                              ````````````:d@:
    &nbsp;                  /h                                              ```.`````````/@o
    &nbsp;                  oy.                                             `````````````s@y
    &nbsp;                  +hs+                                            `````````````y@s
    &nbsp;                  .N:o`                                           `````````````@@:
    &nbsp;                   dy+                                           `````````````.@@
    &nbsp;                   -@s:     :.                                   `````````````.N/
    &nbsp;                    o@@s`                                        ```.`````````sy
    &nbsp;                     s@@N/`                                    ``````````````yy
    &nbsp;                      +@@@@.                                    ```````````.hs
    &nbsp;                       -d@Ns                                   ```````````/d:
    &nbsp;                         +hy:      .o                        ```````````:ho`
    &nbsp;                          `+y+    /:`                       `````````.+ho`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooo+-.         `..-:/osso/.
    &nbsp;                                        `-:+oooooyyysyso+/-`
  </Ascii>
);

const EarthFrame52 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@Nds/:-oh@@hss@hhNNN@ho:`
    &nbsp;                                :osyho:-..`   .do.```:+sN@@@N@Nddhs:
    &nbsp;                             -s@s`.-`                    :odN@@@@@NN@y:
    &nbsp;                           /hy/                             `y@@@@@@NN@@+`
    &nbsp;                         /h/                                  y@@@@@@@@@@N+
    &nbsp;                       .ho                                     `+@@N@@@@@@@d-
    &nbsp;                      /h.                                        ``+dd@@@hh/do
    &nbsp;                     oy`                                          `//yNN@s``/ss
    &nbsp;                    +h                                            ```-::@@/`o.ys
    &nbsp;                   -@`                                           ```.``..--hd-.d:
    &nbsp;                   h/                                              ````````...s:@
    &nbsp;                  .N                                               ```````````.s@:
    &nbsp;                  /h                                               ````````````.No
    &nbsp;                  oy-                                              ````````````-@y
    &nbsp;                  +h+o:                                            ````````````:@s
    &nbsp;                  .N.s:                                          ` ````````````o@:
    &nbsp;                   dh/:                                          ` ````````````s@
    &nbsp;                   -@ys      -.                                  `````````````.d/
    &nbsp;                    o@@N:`                                      ``.``.````````sy
    &nbsp;                     s@@@d:`                                    `````````````oy
    &nbsp;                      +@@@@h`                                  ````````````.ys
    &nbsp;                       -dy@N:                                  ```````````/d:
    &nbsp;                         +hs/.      .o                       ```````````:yo`
    &nbsp;                          `+y+`   `+-                       ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooo+:.         `...:/osso/.
    &nbsp;                                        `-:+ooooosyyssso+/-`
  </Ascii>
);

const EarthFrame53 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@dh+:-:sd@@ysh@h@@N@ho:`
    &nbsp;                                :syysh+-...`   .@+````/oy@@@NN@N@ds:
    &nbsp;                             -sNh-`:.                     :odN@@@@N@@y:
    &nbsp;                           /dho.                            `.y@@@@@@N@@+`
    &nbsp;                         /h/                                   s@@@@@@@@@N+
    &nbsp;                       .hs                                      ./@@N@@@@@Nd-
    &nbsp;                      /h.                                        ```+d@@@Nhsdo
    &nbsp;                     oy`                                         ```:/yNN@/`-ys
    &nbsp;                    +h                                            ````-::@N--/ys
    &nbsp;                   -@`                                            ``.````.-:ds.d:
    &nbsp;                   h/                                             ``.```````..+/@
    &nbsp;                  .N                                               ````````````/N:
    &nbsp;                  /h                                               `````````````ho
    &nbsp;                  od -                                             `````````````dy
    &nbsp;                  +h`ho.                                         ` `````````````@s
    &nbsp;                  .N /s.                                         ` ````````````-@:
    &nbsp;                   ds+s                                          ``````````````/@
    &nbsp;                   -NN/+      --                                 `````````````.d/
    &nbsp;                    o@@@@.     `                                ``.```````````sy
    &nbsp;                     s@@@@y-                                    `````````````oy
    &nbsp;                      +@@@@@s                                  ````````````.ys
    &nbsp;                       -dohN@.                                ````````````/d:
    &nbsp;                         +h/o/       `s`                    ````````````:yo`
    &nbsp;                          `+y/.    .+-                      ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooo+/-`        `...:/osso/.
    &nbsp;                                        `-:+ooooooyyssso+/-`
  </Ascii>
);

const EarthFrame54 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@hs::.+y@@hsy@dd@N@ho:`
    &nbsp;                                :syhohs/...`    :d+```.+oh@@@NN@Nds:
    &nbsp;                             -sN@+ .:`                     /sd@@@@@@Ny:
    &nbsp;                           /dds/                             `.h@@@@@N@@+`
    &nbsp;                         /d+`                                  `s@@@@@@@@N+
    &nbsp;                       .hy.                                     `./@@N@@@@@@-
    &nbsp;                      /h.                                        ````/d@@@@hdo
    &nbsp;                     oy`                                         ````-/sNN@..hs
    &nbsp;                    +h                                            `````-//Nd./ys
    &nbsp;                   -@`                                            ```.````-:+d-d:
    &nbsp;                   h/                                             ``````````...s@
    &nbsp;                  .N                                              ``.``````````.N:
    &nbsp;                  /h`                                              `````````````yo
    &nbsp;                  oy.-`                                            `````````````yy
    &nbsp;                  +h oso`                                        ```````````````ys
    &nbsp;                  .N .oo.                                        ```````````````@:
    &nbsp;                   d/y-s                                          `````````````:@
    &nbsp;                   -NNsy.      .:                               ` ````````````.d/
    &nbsp;                    o@@@@y`     `                               ```.``.```````sy
    &nbsp;                     s@@@@@s-                                  ``````````````oy
    &nbsp;                      +@@@@@@+                                 ````````````.ys
    &nbsp;                       -do+N@h`                               ````````````/d:
    &nbsp;                         +h:/o-        s.                   ````````````:yo`
    &nbsp;                          `+y/.`    .+-                     ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osso+/-`        ``.--/osso/.
    &nbsp;                                        `-:+ooooooyyssso+/-`
  </Ascii>
);

const EarthFrame55 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@Nhy+::.sh@@ysd@dN@@ho:`
    &nbsp;                                :shhsod+-..``    /d/```-+o@@@NN@Nds:
    &nbsp;                             -sN@y. --                     `+s@@@@@@Ny:
    &nbsp;                           /dNyo.                             `-d@@@@N@@+`
    &nbsp;                         /dy.                                  ``s@@@@@@@N+
    &nbsp;                       .hs:                                     ``-/@NN@@@@@-
    &nbsp;                      /d.                                        `````+dN@@d@o
    &nbsp;                     oh`                                         `````-+yN@s`ys
    &nbsp;                    +h`                                          ```````-/+@o-hs
    &nbsp;                   -N`                                            ```.`````-:yod:
    &nbsp;                   h/                                             ```````````..s@
    &nbsp;                  .N                                              ``````````````@:
    &nbsp;                  /h.                                             ``````````````so
    &nbsp;                  oy: :                                           ``````````````oy
    &nbsp;                  +d  do+`                                        ``.```````````ss
    &nbsp;                  .N  :y+`                                        ``````````````d:
    &nbsp;                   d/+o//                                         `````````````:@
    &nbsp;                   -@d@-d       `/.                             ` ````````````.d/
    &nbsp;                    o@@@@No`     `                              ```.``````````sy
    &nbsp;                     s@@@@@@+-                                 ``````````````oy
    &nbsp;                      +@@@@@@@+                                ````````````.ys
    &nbsp;                       -do-d@@y                               ````````````/d:
    &nbsp;                         +h:`so`        o:                  ````````````:yo`
    &nbsp;                          `+y/`-     -+-                    ``````````/yo`
    &nbsp;                             :ss:     ``                  `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osso+/:.        ``.--/osso/.
    &nbsp;                                        `-:+osoooosyssso+/-`
  </Ascii>
);

const EarthFrame56 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@dyy::--yd@dsy@@@N@yo:`
    &nbsp;                                :sdhy+sh/..```    +d:```:osN@@N@@@s:
    &nbsp;                             -sN@@+  :.                     `oyN@@@@Ny:
    &nbsp;                           /dNho+                             `.:@@@@@@@+`
    &nbsp;                         /dd:                                  ``.s@@@@@@N+
    &nbsp;                       .ho+`                                    ```-+@N@@@@@-
    &nbsp;                      /@:                                        ``````o@N@@@o
    &nbsp;                     od`                                          `````:/hNN:ss
    &nbsp;                    +h.                                          ````````:/s@-ds
    &nbsp;                   -N-                                           ` ```.````.:/hd:
    &nbsp;                   h/                                             ````````````.+@
    &nbsp;                  .N                                              ```.``````````d:
    &nbsp;                  /@``                                            ``````````````so
    &nbsp;                  od-``-                                          ``````````````oy
    &nbsp;                  +d` .@++`                                       ``````````````ss
    &nbsp;                  .N   /h+`                                       ``````````````d:
    &nbsp;                   d/`h:s:                                        `````````````:@
    &nbsp;                   -@+@d-h        ::                             `````````````.d/
    &nbsp;                    oN@@N@N+`      `                             ```.`````````sy
    &nbsp;                     s@@@@@@@+-                                ``````````````oy
    &nbsp;                      +@@@@@@@@+                                ```````````.ys
    &nbsp;                       -do.+N@@s                              ````````````/d:
    &nbsp;                         +h: :y+         /+                  ```````````:yo`
    &nbsp;                          `+y/ `.     -+-                   ``````````/yo`
    &nbsp;                             :ss:      ``                 `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osys+//.`       ``.--/osso/.
    &nbsp;                                        `-:+osssoooyssso+/-`
  </Ascii>
);

const EarthFrame57 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@@yyo::.+h@@yy@@@N@yo:`
    &nbsp;                                :sd@ys/hs:.```    `sh-``./oy@@NN@@s:
    &nbsp;                             -sN@@h. `/`                    `-shN@@@Ny:
    &nbsp;                           /dN@ss-                            ``./@@@@@@+`
    &nbsp;                         /@do`                                 ```.y@@@@@N+
    &nbsp;                       .ds//                                    ```.-oNN@@@@-
    &nbsp;                      /No                                        ```````y@@@@o
    &nbsp;                     o@.                                          ``````:/@Nsss
    &nbsp;                    +h.                                           ````````//dohs
    &nbsp;                   -@/                                           ```.``.````.:y@:
    &nbsp;                   h/                                              ```````````./@
    &nbsp;                  .N`                                              `````````````d:
    &nbsp;                  /N`.                                            ``````````````so
    &nbsp;                  oN-/ .-                                         ``````````````oy
    &nbsp;                  +h-  /d++`                                      ``````````````ss
    &nbsp;                  .N   `+h+.                                      ``````````````d:
    &nbsp;                   d/ /h`y-                                      ``````````````:@
    &nbsp;                   -@-d@s/y        ./`                           `````````````.d/
    &nbsp;                    ohN@@N@N+       `                          ` ```.`````````sy
    &nbsp;                     sN@@@@@@@+-                                `````````````oy
    &nbsp;                      +N@@@@@@@@o                               ```````````.ys
    &nbsp;                       -ds.-y@@@s                              ```````````/d:
    &nbsp;                         +h:  oh/         .y                 ```````````:yo`
    &nbsp;                          `+y/  -`     -+-                  ``````````/yo`
    &nbsp;                             :ss:       ``                `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osys+//:`       ``.-:/osso/.
    &nbsp;                                        `-:+osssooosssoo+/-`
  </Ascii>
);

const EarthFrame58 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@Nhsh+::`yh@dydN@@@ho:`
    &nbsp;                                :sdNhy+/do-````    `yh.``.+sh@NN@@s:
    &nbsp;                             -sN@@No` ./                     `/yd@@@Ny:
    &nbsp;                           /d@@d+s`                           ```-oN@@@@+`
    &nbsp;                         /@dh-                                 ````-d@@@@N+
    &nbsp;                       .dh:o`                                   ````.-sN@@@@-
    &nbsp;                      /Nh`                                       ```````.dN@No
    &nbsp;                     o@o                                          ```````/+Ndys
    &nbsp;                    +d-`                                          ````````./odys
    &nbsp;                   -@/`                                          ```.``.`````:/@:
    &nbsp;                   h/                                              ```````````./@
    &nbsp;                  .N`                                              `````````````d:
    &nbsp;                  /d/``                                            `````````````so
    &nbsp;                  oN+-- -.                                         `````````````oy
    &nbsp;                  +d-   oh++.                                      `````````````ss
    &nbsp;                  .N    .+h+.                                    ` `````````````d:
    &nbsp;                   d/  sy h-                                     ``````````````:@
    &nbsp;                   -@`oN@/+y         :-                          `````````````.d/
    &nbsp;                    oyh@@@N@No       ``                         ``.``.````````sy
    &nbsp;                     sdN@@@@@@@o-                               `````````````oy
    &nbsp;                      +@N@@@@@@@@s                             ````````````.ys
    &nbsp;                       -dy--:@@@@s`                            ```````````/d:
    &nbsp;                         +h:  `yh:          y.               ```````````:yo`
    &nbsp;                          `+y/   :`     .+-`                ``````````/yo`
    &nbsp;                             :ss:        ``               `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osyyo///.       ```-:/osso/.
    &nbsp;                                        `-:+ossssoosssoo+/-`
  </Ascii>
);

const EarthFrame59 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@NNdsyy/:--hddhh@NNdho:`
    &nbsp;                                :sd@@ys:sho.````    `hy.`.:os@@@@@s:
    &nbsp;                             -sN@@@@:  -:                    `.+y@@@Ny:
    &nbsp;                           /d@N@y+o                           ```.:y@@@@+`
    &nbsp;                         /@Ndo                                 `````:@@@@N+
    &nbsp;                       .dN/-o                                   `````.:hN@@@-
    &nbsp;                      /N@/                                       ````````:@@No
    &nbsp;                     oNh`                                        ````````.+yNds
    &nbsp;                    +@--                                          `````````-/hds
    &nbsp;                   -@./                                           ```.```````.:N:
    &nbsp;                   h/                                             ``.``````````/@
    &nbsp;                  .N`                                              `````````````d:
    &nbsp;                  /ds .`                                           `````````````so
    &nbsp;                  o@y./` --                                        `````````````oy
    &nbsp;                  +h--   sd++-                                   ` `````````````ss
    &nbsp;                  .N     -+h+-`                                  ```````````````d:
    &nbsp;                   d/  `ys h:                                    ``````````````:@
    &nbsp;                   -@`.h@@:+h         ./`                        `````````````.d/
    &nbsp;                    oy:@@@@N@Ns        `                        ``````````````sy
    &nbsp;                     syd@@@@@@@@y-`                             `````````````oy
    &nbsp;                      +hh@@@@@@@@@d                            ````````````.ys
    &nbsp;                       -hy:--+N@@@s`                          ````````````/d:
    &nbsp;                         +h:   -hd-          o/             ````````````:yo`
    &nbsp;                          `+y/    /      .+-`               `````````./yo`
    &nbsp;                             :ss:         ``              `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooyhs///-`      ```-:/osso/.
    &nbsp;                                        `-:+osyssooossoo+/-`
  </Ascii>
);

const EarthFrame60 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@NN@yshs::.+hddh@NNdho:`
    &nbsp;                                :sd@Nys+-hy+`````    .ds.../syN@@@s:
    &nbsp;                             -sN@@@@h-  :-                   ``-shN@Ny:
    &nbsp;                           /d@@@d++/                          ````-/@@@@+`
    &nbsp;                         /@@hd:                                ``````oN@@N+
    &nbsp;                       .d@s-//                                  ``````-/@@@@-
    &nbsp;                      /NNy`                                       ````````yN@o
    &nbsp;                     o@h+                                        `````````-+NNs
    &nbsp;                    +@+.`                                        ```````````/oNs
    &nbsp;                   -N-/.                                          ```.````````:@:
    &nbsp;                   hs                                             `````````````:@
    &nbsp;                  .N `                                            ``.```````````d:
    &nbsp;                  /h/+ -                                          ``````````````so
    &nbsp;                  ohd+`o  --                                       `````````````oy
    &nbsp;                  +h-:`   sd++/                                   ``````````````ss
    &nbsp;                  .N      -+ho/`                                  ``````````````d:
    &nbsp;                   d/   -ys y+                                    `````````````:@
    &nbsp;                   -@` /d@@:/@          /:                      ` ````````````.d/
    &nbsp;                    oy d@@@NN@Nh        ``                      ```.``````````sy
    &nbsp;                     sy+@@@@@@@@@@-`                           ``````````````oy
    &nbsp;                      +h+N@@@@@@@@@N`                          ````````````.ys
    &nbsp;                       -ho+--:o@@@@y-                         ````````````/d:
    &nbsp;                         +h:    :hd-          :s            ````````````:yo`
    &nbsp;                          `+y/    `/      `+:`              ``````````/yo`
    &nbsp;                             :ss:          .``            `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oosyy+//:.      ```.:/osso/.
    &nbsp;                                        `-:+osyysooossoo+/-`
  </Ascii>
);

const EarthFrame61 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@N@dsyho::`yddhdNNdyo:`
    &nbsp;                                :sd@@@ss:-dy/````     -@+..-oyd@@@s:
    &nbsp;                             -sN@@@@@s`  /.                  ``./yd@Ny:
    &nbsp;                           /d@@Ndh/o:                         `````:sN@@+`
    &nbsp;                         /@@Nhh`                               ``````.y@@N+
    &nbsp;                       .d@@/`o-                                 ```````:s@@@-
    &nbsp;                      /N@@+                                      `````````-@@o
    &nbsp;                     o@Nh.                                        `````````/y@s
    &nbsp;                    +@y.-                                        ```````````.+@s
    &nbsp;                   -@+`s                                          ````.```````-d:
    &nbsp;                   hd                                             ```.`````````:@
    &nbsp;                  .N `                                            ``````````````d:
    &nbsp;                  /d-y` -                                         ``````````````so
    &nbsp;                  ohyy:`o  -:                                     ``````````````oy
    &nbsp;                  +d-./    +N+++`                                 ``````````````ss
    &nbsp;                  .N       .+hs+``                                ``````````````d:
    &nbsp;                   d/    :ys oy                                   `````````````:@
    &nbsp;                   -@`  o@@@::@.         ./.                    ``````````````.d/
    &nbsp;                    oy -@@@@N@@N@.        ``                    ````.`````````sy
    &nbsp;                     sy.@@@@@@@@@@@:.                          ``````````````oy
    &nbsp;                      +h-d@@@@@@@@@@@:                         ````````````.ys
    &nbsp;                       -h/+:-::s@@@@d:                        ````````````/d:
    &nbsp;                         +h:    `/d@:          `y.           ```````````:yo`
    &nbsp;                          `+y/     `/      `+:.             `````````./yo`
    &nbsp;                             :ss:           .``           `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oosyyo//:-`     ```.-/osso/.
    &nbsp;                                        `-:+osyyssoossoo+/-`
  </Ascii>
);

const EarthFrame62 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@N@@yshs+:-:hdddNN@yo:`
    &nbsp;                                :od@@@hso-/dy-````    `/@/.-/syN@@s:
    &nbsp;                             -s@@N@@@No`  /.                 ``.-ohNNy:
    &nbsp;                           /d@@@@dh:s-                        `````./d@@+`
    &nbsp;                         /@@@hdo                               ```````/@@N+
    &nbsp;                       .d@@y-`s.                                ```````./d@@-
    &nbsp;                      /N@@h-                                     `````````.yNo
    &nbsp;                     o@@hy                                        `````````.o@s
    &nbsp;                    +Nh/`-                                       ````````````/hs
    &nbsp;                   -@h`.o                                        ` ```.```````.d:
    &nbsp;                   hN-                                            `````````````:@
    &nbsp;                  .@. .                                           ```.``````````d:
    &nbsp;                  /d-:h `-                                        ``````````````so
    &nbsp;                  od/@o-.o  ./                                    ``````````````oy
    &nbsp;                  +d.:.:    :@o++-`                               ``````````````ss
    &nbsp;                  .N        `+yh+-`                               ``````````````d:
    &nbsp;                   d/     :yy`/@`                                 `````````````:@
    &nbsp;                   -@`  `s@@@+`N/          :/                    `````````````.d/
    &nbsp;                    oy  s@@@@@@@N@/        ``                    ```.`````````sy
    &nbsp;                     sy +@@@@@@@@@@@o.`                        ``````````````oy
    &nbsp;                      +h`/@@@@@@@@@@@@s                         ```````````.ys
    &nbsp;                       -h/-s-:::y@@@@@/                       ````````````/d:
    &nbsp;                         +h:     `/d@:           o/          ```````````:yo`
    &nbsp;                          `+y/      ./       +/-            ``````````/yo`
    &nbsp;                             :ss:            `.`          `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oossys+/::.     ```.-/osso/.
    &nbsp;                                        `-:+osyhysooosoo+/-`
  </Ascii>
);

const EarthFrame63 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@N@@dsyhs/:.oh@d@N@yo:`
    &nbsp;                                :sd@@@Nys+.+hy.````    `o@--:oyd@@s:
    &nbsp;                             -s@NN@@@@N+   /.                ```./y@Ny:
    &nbsp;                           /d@@@@dhy-s-                       ``````:sN@+`
    &nbsp;                         /@@@@s@/                              ```````.y@N+
    &nbsp;                       .d@@N/.`y.                               ````````-s@@-
    &nbsp;                      /N@@Ny`                                    `````````./No
    &nbsp;                     o@@Ns+                                       ``````````/@s
    &nbsp;                    +@yy-..                                       ```````````-ys
    &nbsp;                   -@@- //                                       ```.``.``````.d:
    &nbsp;                   h@y                                             ```.````````:@
    &nbsp;                  .N: ``                                           `````````````d:
    &nbsp;                  /d:-oo `:                                       ``````````````so
    &nbsp;                  oh:yd+..o  `/.                                  ``````````````oy
    &nbsp;                  +h/.---    `@y+++`                              ``````````````ss
    &nbsp;                  .N          +odo+``                             ``````````````d:
    &nbsp;                   d/      :yy.`@/                               ``````````````:@
    &nbsp;                   -@`   .s@@@s dh          `/-                  `````````````.d/
    &nbsp;                    oy  `d@@@@@@N@@y         ``                  `.``.````````sy
    &nbsp;                     sy `d@@@@@@@@@@@d.`                        `````````````oy
    &nbsp;                      +h``h@@@@@@@@@@@@N`                      ````````````.ys
    &nbsp;                       -h/ o+:::/y@@@@@+.                      ```````````/d:
    &nbsp;                         +h:      `/dN/`          :s         ```````````:yo`
    &nbsp;                          `+y/       .+       //-           ``````````/yo`
    &nbsp;                             :ss:             `.`         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osssyyo/::-`    ```.-/osso/.
    &nbsp;                                        `-:+osyhyyooosoo+/-`
  </Ascii>
);

const EarthFrame64 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@N@@@hshys::-y@@@N@ho:`
    &nbsp;                                :sd@@@@@so:.syy`````    .sh--/shN@s:
    &nbsp;                             -sNNN@@@@@@/   /.               ```.:odNy:
    &nbsp;                           /d@@@@@dhs.s.                      ``````.+d@+`
    &nbsp;                         /@@@@Ns@:                             ````````/@N+
    &nbsp;                       .d@@@@:`.y.                              ````````.+@@-
    &nbsp;                      /N@@@ds                                    ``````````:@o
    &nbsp;                     o@@@dy/                                     ```````````-hs
    &nbsp;                    +@@h+`-`                                      ```````````.ys
    &nbsp;                   -N@y. o/                                       ``.`````````.d:
    &nbsp;                   hyN-                                            ````````````:@
    &nbsp;                  .N/  ``                                          `````````````d:
    &nbsp;                  /d+.:h/ `:                                       `````````````so
    &nbsp;                  oy+/@h+..s`  ::                                  `````````````oy
    &nbsp;                  +h:.:.:-     d@+++-`                           ` `````````````ss
    &nbsp;                  .N           :+hy+-`                           ` `````````````d:
    &nbsp;                   d/       -yy/ yh                              ``````````````:@
    &nbsp;                   -@`    -sd@@d o@`          -/`                `````````````.d/
    &nbsp;                    oy   .@@@@@@@N@@@.        ``                ``.``.````````sy
    &nbsp;                     sy  -N@@@@@@@@@@@N:.                       `````````````oy
    &nbsp;                      +h` -N@@@@@@@@@@@@@/                     ````````````.ys
    &nbsp;                       -h/ .y/:://s@@@@@s:                     ```````````/d:
    &nbsp;                         +h:       `/dNo`          `y.      ````````````:yo`
    &nbsp;                          `+y/        `+       :+-`         ``````````/yo`
    &nbsp;                             :ss:              `.`        `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ossssys/:::.    ```.-/osso/.
    &nbsp;                                        `-:+osyhhysooooo+/-`
  </Ascii>
);

const EarthFrame65 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@N@@@@yshs+:-+dN@N@ho:`
    &nbsp;                                :sdN@@@@hso-.ysy`````   `-hs-:oyd@s:
    &nbsp;                             -sNNNN@@@@@@:   /`              ````-/h@y:
    &nbsp;                           /d@@@@@@hhs.s-                     ``````./y@+`
    &nbsp;                         /@@@@@ds@-                            ````````-yN+
    &nbsp;                       .d@@@@h. .y.                             `````````:y@-
    &nbsp;                      /N@@@@ho                                   ``````````-ho
    &nbsp;                     o@@@@hy:                                    ```````````.hs
    &nbsp;                    +@@sd: -`                                     ````````````ys
    &nbsp;                   -@@@:` s/                                      ```.````````.d:
    &nbsp;                   h+@d                                           ``.``.```````:@
    &nbsp;                  .N:-  ``                                         `````````````d:
    &nbsp;                  /h-/-:d:  :`                                     `````````````so
    &nbsp;                  oy/:+Ny/.`s.  ./`                                `````````````oy
    &nbsp;                  +h`/`/`/-     +@s+++``                         ` `````````````ss
    &nbsp;                  .N            .+ydo+``                         ```````````````d:
    &nbsp;                   d/        `yyo /@-                            ``````````````:@
    &nbsp;                   -@`     -sh@@@..@o           //                ````````````.d/
    &nbsp;                    oy    .N@@@@@N@@N@o         ``              ```.``.```````sy
    &nbsp;                     sy   /@@@@@@@@@@@@Ny.`                     `````````````oy
    &nbsp;                      +h`  +@@@@@@@@@@@@@@d                    ````````````.ys
    &nbsp;                       -h/  :h::///s@@@@@d+                   ````````````/d:
    &nbsp;                         +h:        `:dNy.           s/     ````````````:yo`
    &nbsp;                          `+y/         `o`      -+-`        ``````````/yo`
    &nbsp;                             :ss:               `.`       `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osysssyo:::-    ```.-/osso/.
    &nbsp;                                        `-:+osyhhysooooo+/-`
  </Ascii>
);

const EarthFrame66 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@N@dN@hsyys/::yNNN@ho:`
    &nbsp;                                :sdN@@@@@yo+..yss````    ./d+:/yhds:
    &nbsp;                             -sNN@N@@@@@@@:   /.            `````.:sdy:
    &nbsp;                           /d@@@@@@Nhho`s-                    ```````-sd+`
    &nbsp;                         /@@@@@@hs@.                           ````````.o@+
    &nbsp;                       .d@@@@@y. `y-                            `````````-sd-
    &nbsp;                      /N@@@@@h+                                  ``````````-ho
    &nbsp;                     o@@@@@sy:                                   ````````````ys
    &nbsp;                    +dN@sy: -`                                   `````````````ys
    &nbsp;                   -@s@@.  s/                                     ```.````````.d:
    &nbsp;                   h/sNo                                          `````````````:@
    &nbsp;                  .N`o   .`                                       ``````````````d:
    &nbsp;                  /h.+.::@:  -.                                   ``.```````````so
    &nbsp;                  oy.+-s@s/- o:   /-                              ``````````````oy
    &nbsp;                  +h :: + ::     `Nd+++:`                         ``.```````````ss
    &nbsp;                  .N              +ody+:`                         ``````````````d:
    &nbsp;                   d/          syy. dy                            `````````````:@
    &nbsp;                   -@`      -ohN@@o hN           ./-            ` ````````````.d/
    &nbsp;                    oy     -N@@@@@N@N@@d`        ```            ```.``````````sy
    &nbsp;                     sy    o@@@@@@@@@@@@@N-.                   ``````````````oy
    &nbsp;                      +h`   s@@@@@@@@@@@@@@@-                  ````````````.ys
    &nbsp;                       -h/   oh:////o@@@@@N+-                 ````````````/d:
    &nbsp;                         +h:         `-dN@-           /o    ````````````:yo`
    &nbsp;                          `+y/          `o.      .+:.       ``````````/yo`
    &nbsp;                             :ss:                `.``     `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osysooys/:::.   ```.-/osso/.
    &nbsp;                                        `-:+osyhhhyooooo+/-`
  </Ascii>
);

const EarthFrame67 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@N@d@@@yshss::odNN@ho:`
    &nbsp;                                :sdNN@@@@Nso/.-yyo````   `.od//shhs:
    &nbsp;                             -sN@@NN@@@@@@N-   /.           ``````:ohy:
    &nbsp;                           /d@@@@@@@Nhys`o:                   ```````.oh+`
    &nbsp;                         /@@@@@@@ys@.                          `````````/d+
    &nbsp;                       .d@@@@@@s. `s/                           `````````.+d-
    &nbsp;                      /N@@@@@@y+                                 ``````````.ho
    &nbsp;                     o@@@@@@sy/                                   ```````````ss
    &nbsp;                    +dh@yhs- -`                                  `````````````ys
    &nbsp;                   -@-N@y.  so                                    ````.```````.d:
    &nbsp;                   h/.NN/                                         `````````````:@
    &nbsp;                  .N`/:   .`                                      ``````````````d:
    &nbsp;                  /h`:o`::@/  --                                  ``````````````so
    &nbsp;                  oy //:y@s+: /o   -/`                            ``````````````oy
    &nbsp;                  +h  +- o :/      s@o+++.`                       ``````````````ss
    &nbsp;                  .N               -+ydo+.`                       ``````````````d:
    &nbsp;                   d/           /yy+ /@-                          `````````````:@
    &nbsp;                   -@`       .oh@@@@ -@o           :+`          ``````````````.d/
    &nbsp;                    oy      .@@@@@@@@@@N@o         ``           ````.`````````sy
    &nbsp;                     sy     y@@@@@@@@@@@@@Ny``                 ``````````````oy
    &nbsp;                      +h`    h@@@@@@@@@@@@@@@y                  ```````````.ys
    &nbsp;                       -h/    yy/////+N@@@@@y/                ````````````/d:
    &nbsp;                         +h:          `.h@@:`          .y`   ```````````:yo`
    &nbsp;                          `+y/            +-      `+:-      ``````````/yo`
    &nbsp;                             :ss:                  .``    `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osyyoosyo::::   ```.-/osso/.
    &nbsp;                                        `-:+osyhhhysoooo+/-`
  </Ascii>
);

const EarthFrame68 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@N@@@N@dsyyso/+hNN@ho:`
    &nbsp;                                :sd@@@@@@@Nso:`:yh+````   .:yy/+hys:
    &nbsp;                             -sN@N@N@@@@@@@N-   /.           `````-+ys:
    &nbsp;                           /d@@@@@@@@Nhys`o/                  ```````.+y+`
    &nbsp;                         /@@@@@@@@ysN-                         `````````/h+
    &nbsp;                       .d@@@@@@@o.  oo                          ``````````+h-
    &nbsp;                      /N@@@@@@@y+                                ``````````.ho
    &nbsp;                     o@@@@@@@os+                                  ```````````ss
    &nbsp;                    +No@@+do- .`                                 `````````````ys
    &nbsp;                   -N-y@@o.  +y                                  ` ```.```````.d:
    &nbsp;                   h/ oN@-                                         ````````````:@
    &nbsp;                  .N` s.   ..                                     ```.``````````d:
    &nbsp;                  /h -:+`::do  `:`                                ``````````````so
    &nbsp;                  oy `o::y@y+/ -s.   /:                           ``````````````oy
    &nbsp;                  +h  .+.`o`-o      `@@+++/``                     ``````````````ss
    &nbsp;                  .N                 +odh+/``                     ``````````````d:
    &nbsp;                   d/            .yyy` dh                         `````````````:@
    &nbsp;                   -@`        `oyd@@@/ h@`          `+/          `````````````.d/
    &nbsp;                    oy       `@N@@@@@N@N@@d.         ``        ` ```.`````````sy
    &nbsp;                     sy      y@@@@@@@@@@@@@NN-`                ``````````````oy
    &nbsp;                      +h`    `d@@@@@@@@@@@@@@@@.                ```````````.ys
    &nbsp;                       -h/    `hy////++d@@@@@d+.              ````````````/d:
    &nbsp;                         +h:           `.y@@o.          `y-  ```````````:yo`
    &nbsp;                          `+y/             //       //-     ``````````/yo`
    &nbsp;                             :ss:                   ..`   `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osyyoooys+:::.  ```.-/osso/.
    &nbsp;                                        `-:+osyhhhhsoooo+/-`
  </Ascii>
);

const EarthFrame69 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@NN@@N@@yshss++s@N@ho:`
    &nbsp;                                :sd@NN@@@@@@oo-`/sh/````  `-+ho+yys:
    &nbsp;                             -sN@@@NN@@@@@@@N-   /.          `.```./ys:
    &nbsp;                           /d@@@@@@@@@Nyys`++                 ```````.+y+`
    &nbsp;                         /@@@@@@@@@yoN:                        `````````:h+
    &nbsp;                       .d@@@@@@@@o.  /y                         ``````````/h-
    &nbsp;                      /N@@@@@@@@yo                               ``````````.ho
    &nbsp;                     o@@@@@@@@oso                                 ```````````ss
    &nbsp;                    +@sh@N/@o- ..                                 ````````````ys
    &nbsp;                   -@/.N@No`  :d`                                ```.``.``````.d:
    &nbsp;                   h+  d@@.                                        ```.````````:@
    &nbsp;                  .N: .s`   `.                                     `````````````d:
    &nbsp;                  /h `:+/`::hd   :-                                `````````````so
    &nbsp;                  oy  :+::y@yo/` s/   -/.                         ``````````````oy
    &nbsp;                  +h   -/. o.`o.      o@y+++-``                   ``````````````ss
    &nbsp;                  .N                  -+sds+:.`                  ` `````````````d:
    &nbsp;                   d/              oyy+ :@+                      ``````````````:@
    &nbsp;                   -@`          /shN@@@ -@s           -+-        `````````````.d/
    &nbsp;                    oy        `hN@@@@@@@@@Nds         `.`       ``.``.````````sy
    &nbsp;                     sy       y@@@@@@@@@@@@@@Nh``               `````````````oy
    &nbsp;                      +h`     `d@@@@@@@@@@@@@@@@y              ````````````.ys
    &nbsp;                       -h/     `dy///+++y@@@@@@o/              ```````````/d:
    &nbsp;                         +h:     `       .+@Nh-           o/ ```````````:yo`
    &nbsp;                          `+y/              :o       :+:    ``````````/yo`
    &nbsp;                             :ss:                    ..`  `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osyhs+osso/:::` ```.-/osso/.
    &nbsp;                                        `-:+osyhhhhyoooo+/-`
  </Ascii>
);

const EarthFrame70 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@@N@@@N@dsyyssoshN@ho:`
    &nbsp;                                :sd@@@@@@@@@doo.`+sd:````  .:sy+sys:
    &nbsp;                             -sN@@@dN@@@@@@@@N-   /.         ``.``./ss:
    &nbsp;                           /d@@@@@@@@@@@yyy`:o                ```````.+y+`
    &nbsp;                         /@@@@@@@@@@y+N/                       `````````:h+
    &nbsp;                       .d@@@@@@@@@s.  -h.                       ``````````/h-
    &nbsp;                      /N@@@@@@@@@hs`                             ``````````.ho
    &nbsp;                     o@@@@@@@@@sos`                              ````````````ss
    &nbsp;                    +@d/N@N:@o- `-                                ````````````ys
    &nbsp;                   -@y`+@@No`  .@:                                ``.`````````.d:
    &nbsp;                   hy  .N@@.                                      `````````````:@
    &nbsp;                  .No  /o`   `-                                    ```.`````````d:
    &nbsp;                  /h  .:o:`::s@`  .:`                              `````````````so
    &nbsp;                  oy   ++::sNds/- :s`   //                         `````````````oy
    &nbsp;                  +h    :/. +- +/       @@++++..                 ` `````````````ss
    &nbsp;                  .N                    /+hdo+..                 ` `````````````d:
    &nbsp;                   d/               -yyy. y@`                    ``````````````:@
    &nbsp;                   -@`           -ohd@@@/ y@-           /+       `````````````.d/
    &nbsp;                    oy          s@N@@@@@NdN@@d-         ``      ``.```````````sy
    &nbsp;                     sy        o@@@@@@@@@@@@@@@N/`              `````````````oy
    &nbsp;                      +h`       d@@@@@@@@@@@@@@@@@.            ````````````.ys
    &nbsp;                       -h/      `dy//++++o@@@@@@h+`           ````````````/d:
    &nbsp;                         +h:      `       .:@NN-`          /o```````````:yo`
    &nbsp;                          `+y/               .o`      :+:`  ``````````/yo`
    &nbsp;                             :ss:                     `.` `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osyhyoooss+:::. ```.-/osso/.
    &nbsp;                                        `-:+osyhhhhysooo+/-`
  </Ascii>
);

const EarthFrame71 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@@N@@@N@@hshsyysy@@ho:`
    &nbsp;                                :sd@@N@@@@@@@ho+.`+sd-```  `-+ysoss:
    &nbsp;                             -sN@@@N@@@@@@@@@@N:   /.        ``.``./ss:
    &nbsp;                           /d@@@@@@@@@@@@yyy.-s               ```````.+y+`
    &nbsp;                         /@@@@@@@@@@@h/Ns                      `````````:h+
    &nbsp;                       .d@@@@@@@@@@y.  `y/                      ``````````/h-
    &nbsp;                      /N@@@@@@@@@@ds.                            ``````````.ho
    &nbsp;                     o@@@@@@@@@@y+y:                             ````````````ss
    &nbsp;                    +@@o+@@@:@s-``-`                              ````````````ys
    &nbsp;                   -@N- h@@Ns`   ys                               ```.````````.d:
    &nbsp;                   hy`  :N@@-                                     `````.```````:@
    &nbsp;                  .Ny` `++`    -`                                 ``.```````````d:
    &nbsp;                  /h   -:o/ ::/@/   :-                             `````````````so
    &nbsp;                  oy    o/:-s@@s+/  s+   ./-                       `````````````oy
    &nbsp;                  +h     //- // :o`      :@d+++/.`                 `````````````ss
    &nbsp;                  .N                     `+odh+/..                ``````````````d:
    &nbsp;                   d/                 oyyo .@y                    `````````````:@
    &nbsp;                   -@`            `oyhN@@N `@d           .+:      ````````````.d/
    &nbsp;                    oy           /@N@@@@@@@d@@dh         `.`    ```.``.```````sy
    &nbsp;                     sy         /@@@@@@@@@@@@@@@Nd``            `````````````oy
    &nbsp;                      +h`        y@@@@@@@@@@@@@@@@@y           ````````````.ys
    &nbsp;                       -h/       `dh/++++++@@@@@@N+:          ````````````/d:
    &nbsp;                         +h:       `       .-dN@+.          -y.`````````:yo`
    &nbsp;                          `+y/                `o-      -+:` ``````````/yo`
    &nbsp;                             :ss:                      `.``````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osyhys+ooss/:::````.-/osso/.
    &nbsp;                                        `-:+osyhhhhhsooo+/-`
  </Ascii>
);

const EarthFrame72 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@@N@@@@@@dyyyyhyyd@ho:`
    &nbsp;                                :sd@@@@N@@@@@@ho+..+sd-``` `.:sysss:
    &nbsp;                             -sN@@@@@@@@@@@@@@@N/   /-       ```.`./ss:
    &nbsp;                           /d@@@@@@@@@@@@@hyy-.y.             ```````.+y+`
    &nbsp;                         /@@@@@@@@@@@@d/dh                     `````````:h+
    &nbsp;                       .d@@@@@@@@@@@d-   os                     ``````````/h-
    &nbsp;                      /N@@@@@@@@@@@@s:                           ``````````.ho
    &nbsp;                     o@@@@@@@@@@@d/so                            ````````````ss
    &nbsp;                    +N@@/s@@N:hh-` ..                            `````````````ys
    &nbsp;                   -@@s``@@@Ny`   /@.                             ```.````````.d:
    &nbsp;                   ho/   /N@@/                                    `````````````:@
    &nbsp;                  .N/o  `o+.    .-                                ``````````````d:
    &nbsp;                  /h    ::o/ :::@d   .:`                          ``.```````````so
    &nbsp;                  oy     s/:-sd@yo/- :s.   -/.                    ``.```````````oy
    &nbsp;                  +h      /+- -o``o:       y@y+++:.`              ``.```````````ss
    &nbsp;                  .N                       :+yds+:.`              ``````````````d:
    &nbsp;                   d/                  -yss- +@/                  `````````````:@
    &nbsp;                   -@`              /ohd@@@o +@o           /+`  ` ````````````.d/
    &nbsp;                    oy            `dNN@@@@@Nd@@Nd/         `.   ```.``````````sy
    &nbsp;                     sy          -@@@@@@@@@@@@@@@@N+.          ``````````````oy
    &nbsp;                      +h`         o@@@@@@@@@@@@@@@@@@.         ````````````.ys
    &nbsp;                       -h/         h@+++++++y@@@@@@s+         ````````````/d:
    &nbsp;                         +h:        `       `-s@@y-`        `.y.````````:yo`
    &nbsp;                          `+y/                  +/      .o/.``````````/yo`
    &nbsp;                             :ss:                       `..````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osyhyy+++sso:::-```.-/osso/.
    &nbsp;                                        `-:+osyhhhhhyooo+/-`
  </Ascii>
);

const EarthFrame73 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@@NN@@@N@@hshyhhyhdho:`
    &nbsp;                                :sd@@@@dN@@@@@@yo/.-/yh.`.```:+yyss:
    &nbsp;                             -sN@@@@@dN@@@@@@@@@N+   /-      ```.../ss:
    &nbsp;                           /d@@@@@@@@@@@@@@dyy:`s-            ```````.+y+`
    &nbsp;                         /@@@@@@@@@@@@@N/yN`                   `````````:h+
    &nbsp;                       .d@@@@@@@@@@@@N:`  -h.                   ``````````+h-
    &nbsp;                      /N@@@@@@@@@@@@@s+                          ``````````.ho
    &nbsp;                     oN@@@@@@@@@@@N/oy.                           ```````````ss
    &nbsp;                    +dN@y:h@@N:yN-. `.                           `````````````ys
    &nbsp;                   -@yN- .N@@@d``  `@o                            ````.```````.d:
    &nbsp;                   h/s`   /N@@s                                   `````````````:@
    &nbsp;                  .N`d.  `oo.    `-`                              ``````````````d:
    &nbsp;                  /h     ::oo -::s@:   ::                         ``````````````so
    &nbsp;                  oy      s+/-+y@ds//  so    //                   ``````````````oy
    &nbsp;                  +h       :+:``o- /o`       N@o+++-.             ``````````````ss
    &nbsp;                  .N                         ++hdo+-.`            ``````````````d:
    &nbsp;                   d/                    +sss` h@`                `````````````:@
    &nbsp;                   -@`               .oyhN@@@. d@.          `o: ``````````````.d/
    &nbsp;                    oy              s@N@@@@@@@dN@@d`        ``` ````.`````````sy
    &nbsp;                     sy            @@@@@@@@@@@@@@@@N@.`        ``````````````oy
    &nbsp;                      +h`          :@@@@@@@@@@@@@@@@@@y        ````````````.ys
    &nbsp;                       -h/          sN+++++++o@@@@@@d+-       ````````````/d:
    &nbsp;                         +h:         .        ./@NN-.        `.y-```````:yo`
    &nbsp;                          `+y/                   /o      `o/.`````````/yo`
    &nbsp;                             :ss:                        `..```````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooyhyys/o+ss+:::```.-/osso/.
    &nbsp;                                        `-:+osyhhhhhyooo+/-`
  </Ascii>
);

const EarthFrame74 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@@@N@@@@@@dyyhhddhhho:`
    &nbsp;                                :sd@@@@Nd@@@@@@@yo/`:/hy...``-/shss:
    &nbsp;                             -sN@@@@@Nd@@@@@@@@@@No   /-     ````../ss:
    &nbsp;                           /d@@@@@@@@@@@@@@@@yy+ o/           ```````.+y+`
    &nbsp;                         /@@@@@@@@@@@@@@@+o@:                  `````````:h+
    &nbsp;                       .d@@@@@@@@@@@@@@/.  `y+                  ``````````+h-
    &nbsp;                      /N@@@@@@@@@@@@@@ho.                        ``````````.ho
    &nbsp;                     o@@@@@@@@@@@@@@o/y+                          ```````````ss
    &nbsp;                    +hy@@+:h@@@/+@/-  .`                         `````````````ys
    &nbsp;                   -@:@h. .@@@@@-`   o@`                         ` ```````````.d:
    &nbsp;                   h/-o    /@@@d                                  `````````````:@
    &nbsp;                  .N +h   `os-     -.                             ``````````````d:
    &nbsp;                  /h      ::+y .:::Nd   `:-                       ``````````````so
    &nbsp;                  oy       o+/-/s@@so/- -s/   `/:                 ``````````````oy
    &nbsp;                  +h        -o:. /o `o/       :@@++++..           ``````````````ss
    &nbsp;                  .N                          .+odh++..           ``````````````d:
    &nbsp;                   d/                     `sss+ .@y               `````````````:@
    &nbsp;                   -@`                 /ohh@@@d .@d           /o``````````````.d/
    &nbsp;                    oy               -@NN@@@@@@d@@Nds         `. `````````````sy
    &nbsp;                     sy             s@@@@@@@@@@@@@@@@No.       ``````````````oy
    &nbsp;                      +h`           `N@@@@@@@@@@@@@@@@@@.       ```````````.ys
    &nbsp;                       -h/           /@o+++++++d@@@@@@o/      ````````````/d:
    &nbsp;                         +h:          .`       .-dN@/-       ``.s-``````:yo`
    &nbsp;                          `+y/                    -s`     `o/-````````/yo`
    &nbsp;                             :ss:                         `..``````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooyhyys+/ooss/::-``.-/osso/.
    &nbsp;                                        `-:+osyhhhhhhsoo+/-`
  </Ascii>
);

const EarthFrame75 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@@@NNN@@N@@hshhd@hyyo:`
    &nbsp;                                :sd@@@@@@d@@@@@@@so:`/:ds...`.:ohys:
    &nbsp;                             -sN@@@@@@Nd@@@@@@@@@@@s   /-    ````../ss:
    &nbsp;                           /d@@@@@@@@@@@@@@@@Nyys /o          ```````.+y+`
    &nbsp;                         /@@@@@@@@@@@@@@@@s:Ns                 `````````:h+
    &nbsp;                       .d@@@@@@@@@@@@@@@s-   +y                 ``````````/h-
    &nbsp;                      /N@@@@@@@@@@@@@@@@o:                       ``````````.ho
    &nbsp;                     odN@@@@@@@@@@@@@h/sy`                        ```````````ss
    &nbsp;                    +h:@@N/:d@@@o-Ny-` ..                         ````````````ys
    &nbsp;                   -@`h@o` .N@@@No`   .@o                        ```.``.``````.d:
    &nbsp;                   h/ y.    -@@@@-                                 ````````````:@
    &nbsp;                  .N  ho   `/y-`    `-`                            `````````````d:
    &nbsp;                  /h       :::h- :::s@:   -:`                     ``````````````so
    &nbsp;                  oy        +o/--sh@hs//` +s.   -/.               ``````````````oy
    &nbsp;                  +h         .o/- .o- :o.       s@y+++/.`         ``````````````ss
    &nbsp;                  .N                            :+ydy+/..         ``````````````d:
    &nbsp;                   d/                       :sss- +@/   `        ``````````````:@
    &nbsp;                   -@`                  .osh@@@@+ o@+          .o:````````````.d/
    &nbsp;                    oy                 h@N@@@@@@@dN@@d-        `.`.```````````sy
    &nbsp;                     sy              -N@@@@@@@@@@@@@@@@N.`      `````````````oy
    &nbsp;                      +h`             h@@@@@@@@@@@@@@@@@@s     ````````````.ys
    &nbsp;                       -h/            .@y+++++++s@@@@@@h+.     ```````````/d:
    &nbsp;                         +h:           .`       `-yN@y-`     ```.s-`````:yo`
    &nbsp;                          `+y/                     `s-     `o+-```````/yo`
    &nbsp;                             :ss:                         `...`````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooshyyys/++sso:::``.-/osso/.
    &nbsp;                                        `-:+osyhhhhhhsoo+/-`
  </Ascii>
);

const EarthFrame76 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@@@@@@NN@@@N@@dyydd@@yyo:`
    &nbsp;                                :sd@@@@@@@@@@@@@@@so-`+/@o.-``:+yhs:
    &nbsp;                             -sN@@@@@@@@d@@@@@@@@@@@y   /.   ````../ss:
    &nbsp;                           /d@@@@@@@@@@@@@@@@@@yyy`:s         ```````.+y+`
    &nbsp;                         /@@@@@@@@@@@@@@@@@h:d@                `````````:h+
    &nbsp;                       .d@@@@@@@@@@@@@@@@d:`  -h:               ``````````/h-
    &nbsp;                      /N@@@@@@@@@@@@@@@@@so                      ``````````.ho
    &nbsp;                     odd@@@@@@@@@@@@@@@//y/                      ````````````ss
    &nbsp;                    +h h@@@::h@@@h-hN-. `.`                       ````````````ys
    &nbsp;                   -@`-@@/` `N@@@N@`    o@.                       ``.`````````.d:
    &nbsp;                   h/ `d`    `@@@@s                                ````````````:@
    &nbsp;                  .N  :d/   `:h:.     --                           `````````````d:
    &nbsp;                  /h        -::y+ .:::N@    ::                     `````````````so
    &nbsp;                  oy         :s/:-+sN@so/:  ss    :/`              `````````````oy
    &nbsp;                  +h           o+:` +o  o+        @@o+++-.`      ` `````````````ss
    &nbsp;                  .N                              /+h@o+:-``     ` `````````````d:
    &nbsp;                   d/                         osss` h@`  ```     ``````````````:@
    &nbsp;                   -@`                    /oyhN@@@` @@`          +o```````````.d/
    &nbsp;                    oy                  :dNN@@@@@@dd@@dh        `..``.````````sy
    &nbsp;                     sy                d@@@@@@@@@@@@@@@@Ns.     `````````````oy
    &nbsp;                      +h`              /@@@@@@@@@@@@@@@@@@N`   ````````````.ys
    &nbsp;                       -h/              @@++++++++N@@@@@@+:    ```````````/d:
    &nbsp;                         +h:            `.        ./@@@-.   `````.s-````:yo`
    &nbsp;                          `+y/                       o:     `o+-``````/yo`
    &nbsp;                             :ss:                         ``...````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooyyyyso:o+ss+:/-`.-/osso/.
    &nbsp;                                        `-:+osyhhhhhhyoo+/-`
  </Ascii>
);

const EarthFrame77 = () => (
  <Ascii>
    &nbsp;                                        .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@N@@@@@NNN@@N@@hydd@Nhso:`
    &nbsp;                                :sd@@@@@@@dN@@@@@@@so-.++@+-.`-/shs:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@@@@@@h   /.  `````-/ss:
    &nbsp;                           /d@@@@@@@@@@@@@@@@@@@hyy..y`       ```````.+y+`
    &nbsp;                         /@@@@@@@@@@@@@@@@@@N:s@-              `````````:h+
    &nbsp;                       .d@@@@@@@@@@@@@@@@@@/.   ss              ``````````/h-
    &nbsp;                      /N@@@@@@@@@@@@@@@@@@do-                    ``````````.ho
    &nbsp;                     ods@@@@@@@@@@@@@@@@y/sy`                    ````````````ss
    &nbsp;                    +@`-@@@@:-s@@@N-/@o.` ..                      ````````````ys
    &nbsp;                   -@. y@@-`  @@@@@N/    `@y                      ```.````````.d:
    &nbsp;                   h/  :y`     dN@@d`                             ``.``.```````:@
    &nbsp;                  .N   od:   ``h+-     `-.                         `````````````d:
    &nbsp;                  /h         -::+y` :::o@o   `:-                   `````````````so
    &nbsp;                  oy          .s+/--sh@ds+/- -s/   `//             `````````````oy
    &nbsp;                  +h            :o:- .o: -o:       .@N++++-.     ` `````````````ss
    &nbsp;                  .N                               `+o@d++--``   ```````````````d:
    &nbsp;                   d/                          .sss+ .@y  ````   ``````````````:@
    &nbsp;                   -@`                     `oshd@@@h -@y          :s.`````````.d/
    &nbsp;                    oy                    ydNN@@@@@Nd@@Nd/      ``.-``.```````sy
    &nbsp;                     sy                 /N@@@@@@@@@@@@@@@@N-`   `````````````oy
    &nbsp;                      +h`               `N@@@@@@@@@@@@@@@@@@/  ````````````.ys
    &nbsp;                       -h/               s@o+++++++h@@@@@@o+  ````````````/d:
    &nbsp;                         +h:             `.`       `-@N@:-  ``````.o.```:yo`
    &nbsp;                          `+y/                        /+    `.o+.`````/yo`
    &nbsp;                             :ss:                         ```..````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooosyyyss/++sss//:..-/osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame78 = () => (
  <Ascii>
    &nbsp;                                        .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@N@@@@@NN@@@N@@dyhd@Ndso:`
    &nbsp;                                :sd@@@@@@@@hN@@@@@@Nso--/sh/-../oys:
    &nbsp;                             -sN@@@@@@@@@d@@@@@@@@@@@@h   +. `````./ss:
    &nbsp;                           /d@@@@@@@@@@@@@@@@@@@@dyy:`y.      ```````.+y+`
    &nbsp;                         /@@@@@@@@@@@@@@@@@@@@o/No             `````````:h+
    &nbsp;                       .d@@@@@@@@@@@@@@@@@@@s:   :h.            ``````````/h-
    &nbsp;                      /N@@@@@@@@@@@@@@@@@@@@o+                   ``````````.ho
    &nbsp;                     o@sh@@@@@@@@@@@@@@@@N//y+                   ````````````ss
    &nbsp;                    +N- o@@@@:-+@@@@o-@@..  .`                   `````````````ys
    &nbsp;                   -N- `@@@-`  y@@@@Nh     /@/                    ```.````````.d:
    &nbsp;                   h/   os`     o@@@do                            `````````````:@
    &nbsp;                  .N    yd:    `oy-.     .-`                      ``````````````d:
    &nbsp;                  /h          .:::y/ .:::d@-   -:`                ``````````````so
    &nbsp;                  oy            oo/:-+s@@ys//` /s-   ./-          ``````````````oy
    &nbsp;                  +h             `o+:` /o` /s`       +@h+++/-`    ``.```````````ss
    &nbsp;                  .N                                 -+y@y+/:-``  ``````````````d:
    &nbsp;                   d/                            /sss- +@/  ```   `````````````:@
    &nbsp;                   -@`                       -oyh@@@@/ y@:      ` `.s:````````.d/
    &nbsp;                    oy                     -d@N@@@@@@@dN@@d     ```..`````````sy
    &nbsp;                     sy                   @N@@@@@@@@@@@@@@@@s. ``````````````oy
    &nbsp;                      +h`                 s@@@@@@@@@@@@@@@@@@h ````````````.ys
    &nbsp;                       -h/                -@h+++++++o@@@@@@h+.````````````/d:
    &nbsp;                         +h:               .`        -yN@o-````````.o.``:yo`
    &nbsp;                          `+y/                         -o   ``.s+.````/yo`
    &nbsp;                             :ss:                         ````..```:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooooyyyyso:o+sso//-.-/osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame79 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@NNNN@@@NNN@@N@dhh@@N@so:`
    &nbsp;                                :sd@@@@@@@@Nh@@@@@@@No+-::yy:-.:oss:
    &nbsp;                             -sN@@@@@@@@@@dN@@@@@@@@@@@h  `+``````./ss:
    &nbsp;                           /dN@@@@@@@@@@@@@@@@@@@@Nyy+`s:     ```````.+y+`
    &nbsp;                         /dN@@@@@@@@@@@@@@@@@@@h:dd            `````````:h+
    &nbsp;                       .dNN@@@@@@@@@@@@@@@@@@@:.  `h+           ``````````/h-
    &nbsp;                      /N@@@@@@@@@@@@@@@@@@@@@ho.                 ``````````.ho
    &nbsp;                     oNosN@@@@@@@@@@@@@@@@@y:oy.                  ```````````ss
    &nbsp;                    +@s `h@@@N:-:@@@@@.+@o.` `.                  `````````````ys
    &nbsp;                   -@+  .@@@-`  +N@@@@N:     h@`                  ````.```````.d:
    &nbsp;                   h+    yo`     .@N@@d`                          `````````````:@
    &nbsp;                  .@`    hd/    `:h/-      --                     ``````````````d:
    &nbsp;                  /h            :::oy  :::/@@    ::               ``````````````so
    &nbsp;                  oy             :s//--sy@Nso//  ss`   :/`        ``````````````oy
    &nbsp;                  +h               /o/: `o+  oo        d@s+++--   ``````````````ss
    &nbsp;                  .N                                   /+d@o+::.. ``````````````d:
    &nbsp;                   d/                              osss` d@` ```` `````````````:@
    &nbsp;                   -N`                         +oyh@@@N``N@      ````o/```````.d/
    &nbsp;                    oh                       sdNN@@@@@@d@@N@/    ```...```````sy
    &nbsp;                     sy                    +N@@@@@@@@@@@@@@@@@-``````````````oy
    &nbsp;                      +h`                  .@@@@@@@@@@@@@@@@@@N.```````````.ys
    &nbsp;                       -h/                  @@++++++++@@@@@@@+:```````````/d:
    &nbsp;                         +h:                ..        .+@@h-````````-+``:yo`
    &nbsp;                          `+y/                          .o` ```-s/.```/yo`
    &nbsp;                             :ss:                         `````.```:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooosyyyss+/ooss+/:.-/osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame80 = () => (
  <Ascii>
    &nbsp;                                         .-/+oosooooooo+/:.
    &nbsp;                                   `:oy@NNNNN@@NN@@@N@ddhd@N@yo:`
    &nbsp;                                :sd@@@@@@@@@Nh@@@@@@@No/./:ds:.:oss:
    &nbsp;                             -sN@@@@@@@@@@@dN@@@@@@@@@@@h` `+`````./ss:
    &nbsp;                           /dN@@@@@@@@@@@@@@@@@@@@@@yyo o/    ```````.+y+`
    &nbsp;                         /ddN@@@@@@@@@@@@@@@@@@@N:o@.          `````````:h+
    &nbsp;                       .d@@@@@@@@@@@@@@@@@@@@@@+-   oy          ``````````/h-
    &nbsp;                      /N@@@@@@@@@@@@@@@@@@@@@@@o+                ``````````.ho
    &nbsp;                     o@sos@@@@@@@@@@@@@@@@@@@//yo                 ```````````ss
    &nbsp;                    +@@` .@@@@@:--d@@@@/.@N..  ..                `````````````ys
    &nbsp;                   -@h.  :@@@:`  .N@@@@Nd     -@s                ` ```.```````.d:
    &nbsp;                   h+     ys`      h@@dds                          ````````````:@
    &nbsp;                  .@:     hd+    ``yy-.     `-.                   ``````````````d:
    &nbsp;                  /@             -::/y/ .:::s@s   `:-             ``````````````so
    &nbsp;                  oy              `so/:-/sd@ds+/- .s+   `//       ``````````````oy
    &nbsp;                  +h                .o+:. -o: -s/       .@N+++/-. ``````````````ss
    &nbsp;                  .N                                    `+o@h++::.``````````````d:
    &nbsp;                   d/                               .sss+ :@s ``..`````````````:@
    &nbsp;                   -N:                          .oshd@@@y +@+    `````++``````.d/
    &nbsp;                    o@`                       .d@N@@@@@@NdN@@d ` ```.`..``````sy
    &nbsp;                     sy                      @N@@@@@@@@@@@@@@@@+.````````````oy
    &nbsp;                      +h`                    h@@@@@@@@@@@@@@@@@@/``````````.ys
    &nbsp;                       -h/                   +@s++o++++y@@@@@N+/``````.```/d:
    &nbsp;                         +h:                 `-`       `:@@@-.```````::`:yo`
    &nbsp;                          `+y/                           `o-````:o:```/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooooyyysss:++sss//--/osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame81 = () => (
  <Ascii>
    &nbsp;                                         .-/+oosooooooo+/:.
    &nbsp;                                   `:oy@NNNNN@@@NNN@@Nd@ddNN@yo:`
    &nbsp;                                :sd@@@@@@@@@@Nh@@@@@@@@o/-++do-:oss:
    &nbsp;                             -sN@@@@@@@@@@@@dN@@@@@@@@@@@h` -+````./ss:
    &nbsp;                           /hNN@@@@@@@@@@@@@@@@@@@@@@hys`++   ```````.+y+`
    &nbsp;                         /@d@@@@@@@@@@@@@@@@@@@@@@+/N+         `````````:h+
    &nbsp;                       .d@@@@@@@@@@@@@@@@@@@@@@@h:`  -h:        ``````````/h-
    &nbsp;                      /NN@@@@@@@@@@@@@@@@@@@@@@@ho.              ``````````.ho
    &nbsp;                     o@hooy@@@@@@@@@@@@@@@@@@@y:oy-               ```````````ss
    &nbsp;                    +@@o  -N@@@@+--o@@@@d.+@s.` `.`               ````````````ys
    &nbsp;                   -N@:   +@@N+`   yN@@@@N+     o@:              ```.``.``````.d:
    &nbsp;                   h+`     yy`      -@Nddd-                        ````````````:@
    &nbsp;                  .@y      yds     `/h/-`     .-`                  `````````````d:
    &nbsp;                  /N.             `:::oy` -:::d@-   .:.            `````````````so
    &nbsp;                  oy                :s//:-osN@ys+/. :s:   ./-      `````````````oy
    &nbsp;                  +h                  /o/:` +o` /s-       +@h+++:-``````````````ss
    &nbsp;                  .N                                      -+h@s+//..````````````d:
    &nbsp;                   d/                                 /sss- y@. `...```````````:@
    &nbsp;                   -Ns                            :oyh@@@@- @N`  ``````/+`````.d/
    &nbsp;                    oN-                         +dNN@@@@@@@@@@@/``.``.`..`````sy
    &nbsp;                     sh                       /N@@@@@@@@@@@@@@@@h-```````````oy
    &nbsp;                      +h`                     -@@@@@@@@@@@@@@@@@@s`````````.ys
    &nbsp;                       -h/                    `@d+o+++++oN@@@@@o+``````.``/d:
    &nbsp;                         +h:                   -.        -dNN:-```````/.:yo`
    &nbsp;                          `+y/                             +-````/o-``/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooo+syyssoo:o+sso/::/osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame82 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooosoooooo+/:.
    &nbsp;                                   `:oy@NN@N@N@@NNN@@N@@@dNN@ho:`
    &nbsp;                                :sd@@@@@@@@@@@@d@@@@@@@do::+sh/:oss:
    &nbsp;                             -sN@@@@@@@@@@@@@dN@@@@@@@@@@@y` :/```./ss:
    &nbsp;                           /h@NN@@@@@@@@@@@@@@@@@@@@@@dyy./o  ```````.+y+`
    &nbsp;                         /@dh@@@@@@@@@@@@@@@@@@@@@@h:dd        `````````:h+
    &nbsp;                       .d@NN@@@@@@@@@@@@@@@@@@@@@@/-   yo       ``````````/h-
    &nbsp;                      /N@@@@@@@@@@@@@@@@@@@@@@@@@@o/             ``````````.ho
    &nbsp;                     o@Nsooh@@@@@@@@@@@@@@@@@@@@/:ys             ````````````ss
    &nbsp;                    +@@N.  -N@@@@y---N@@@@+.d@-.  ..              ````````````ys
    &nbsp;                   -@@h.   +@@Ny`   :N@@@@NN`     dd              ``.`````````.d:
    &nbsp;                   hy`      od.       h@@ddh                      `````````````:@
    &nbsp;                  .@N.      sdh`    ``yy--      --                 `````````````d:
    &nbsp;                  /@+               -:::ys  :::/@N    ::`          `````````````so
    &nbsp;                  od                  so//--sy@Nss//  os`   :/`    `````````````oy
    &nbsp;                  +h                   `oo/: `oo  oo`       @@o+++:-````````````ss
    &nbsp;                  .N                                        +o@d++/:-```````````d:
    &nbsp;                   d/                                   ssys .Ny `...``````````:@
    &nbsp;                   -@y`                             oshh@@@d /@+ ```````/+````.d/
    &nbsp;                    ods                           hdNN@@@@@N@N@Ny`.`````..````sy
    &nbsp;                     sd`                        dN@@@@@@@@@@@@@@@N:.`````````oy
    &nbsp;                      +h`                       d@@@@@@@@@@@@@@@@@h````````.ys
    &nbsp;                       -h/                      y@o+++++++d@@@@@y+.````.``/d:
    &nbsp;                         +h:                    .-        .sN@/-``````./:yo`
    &nbsp;                          `+y/                              +:````++.`/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osoo++yyssss//ooss+/:/osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame83 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooosoooooo+/:.
    &nbsp;                                   `:oy@N@@@@N@@@NNN@@@@@@@N@ho:`
    &nbsp;                                :sd@@@@@@@@@@@@@d@@@@@@@do:/+hs/oss:
    &nbsp;                             -sN@@@@@@@@@@@@@@dN@@@@@@@@@@@s``+-``./ss:
    &nbsp;                           /ddNN@@@@@@@@@@@@@@@@@@@@@@@Nyy-/o````````.+y+`
    &nbsp;                         /@@y@@@@@@@@@@@@@@@@@@@@@@@N:sN.      `````````:h+
    &nbsp;                       .d@@@@@@@@@@@@@@@@@@@@@@@@@@s:`  /h`     ``````````/h-
    &nbsp;                      /NN@@@@@@@@@@@@@@@@@@@@@@@@@@ho.           ``````````.ho
    &nbsp;                     oN@yyo+h@@@@@@@@@@@@@@@@@@@@d:+y:           ````````````ss
    &nbsp;                    +@N@h   -N@@@@N--.y@@@@@.:@h.` `.`            ````````````ys
    &nbsp;                   -Ny@/`   /@@N@`    dN@@@@Ny     :@o            ```.````````.d:
    &nbsp;                   h@``      /@-`      -@Ndddo                    `````````````:@
    &nbsp;                  .@@s       +hh:     `:ho-.     `-.              ``````````````d:
    &nbsp;                  /@h.               `:::+y: .:::o@y   `::         `````````````so
    &nbsp;                  oN.                  :s+/:-/sh@@so/: `so   `/:   `````````````oy
    &nbsp;                  +N                     :o+/. -o/ .s+       -@d+oo/:```````````ss
    &nbsp;                  .@.                                        .+y@so+/-.`````````d:
    &nbsp;                   ds                                    -yyy: sN.`.-.`````````:@
    &nbsp;                   -Noo                              .oshd@@@: @@````````/+```.d/
    &nbsp;                    ohh.                           :d@N@@@@@@@@@N@-.`````..```sy
    &nbsp;                     sh-                         :N@@@@@@@@@@@@@@@@+.````````oy
    &nbsp;                      +h`                        :@@@@@@@@@@@@@@@@@d```````.ys
    &nbsp;                       -h/                       :@y+++++++y@@@@@y+.````.`/d:
    &nbsp;                         +h:                     `-`       .+N@+-``````:/yo`
    &nbsp;                          `+y/                              `+:```.o:./yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./osso+/sysssos:++sys+//osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame84 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooosoooooo+/:.
    &nbsp;                                   `:oy@N@@@d@@@@NNN@@@@NN@N@ho:`
    &nbsp;                                :sd@@@@@@@@@@@@@@d@@@@@@@h+:+ohooss:
    &nbsp;                             -sN@@@@@@@@@@@@@@@dN@@@@@@@@@@@o`.+.`./ss:
    &nbsp;                           /dddNN@@@@@@@@@@@@@@@@@@@@@@@@yy:/o```````.+y+`
    &nbsp;                         /@@yh@@@@@@@@@@@@@@@@@@@@@@@@o/@/     `````````:h+
    &nbsp;                       .d@@@N@@@@@@@@@@@@@@@@@@@@@@@@:.  .h:    ``````````/h-
    &nbsp;                      /N@@N@@@@@@@@@@@@@@@@@@@@@@@@@@o/          ``````````.ho
    &nbsp;                     od@Nss++h@@@@@@@@@@@@@@@@@@@@@+:sy          ````````````ss
    &nbsp;                    +@d@@o   -@@@@@@+..:@@@@@o.y@+.  ..          `````````````ys
    &nbsp;                   -@o@@-    -N@@N:`   :N@@@@@@:     s@-          ```.````````.d:
    &nbsp;                   h@/`       .@+`       y@@ddd-                  `````````````:@
    &nbsp;                  .@@N-       :hhs     ``oh:-      .-`            ``````````````d:
    &nbsp;                  /@N+                 -:::sy` -:::h@/   .:.      ``````````````so
    &nbsp;                  o@o                    os//:-os@@hs+/. :s:   :+```````````````oy
    &nbsp;                  +@-                      +o//` /s. :s-       h@soo+:.`````````ss
    &nbsp;                  .@+                                          /o@doo+-.````````d:
    &nbsp;                   dd                                      +yys`-No`.-..```````:@
    &nbsp;                   -@+d.                               /syhN@@d o@:```````//``.d/
    &nbsp;                    od+y                             sdNN@@@@@N@N@@+.`````.```sy
    &nbsp;                     sy:                           hN@@@@@@@@@@@@@@@s.```````oy
    &nbsp;                      +h`                          d@@@@@@@@@@@@@@@@d.`````.ys
    &nbsp;                       -h/                         @@+++++++o@@@@@h+.```../d:
    &nbsp;                         +h:                       ..       `/@@o-`````.+yo`
    &nbsp;                          `+y/                              ``/:```:+-/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooyo+/+ssssso+/ooyyo//osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame85 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooosooooo+/:.
    &nbsp;                                   `:oy@N@ddddN@@@NNN@@@NNNN@ho:`
    &nbsp;                                :sd@@@@@@@@@@@@@@@@@@@@@@@y//+syoss:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@dN@@@@@@@@@@N+`:/`./ss:
    &nbsp;                           /dNyNN@@@@@@@@@@@@@@@@@@@@@@@@@hy:/o``````.+y+`
    &nbsp;                         /@@ds@@@@@@@@@@@@@@@@@@@@@@@@@h:@s   ``````````:h+
    &nbsp;                       .h@@@d@@@@@@@@@@@@@@@@@@@@@@@@@+:   yo   ``````````/h-
    &nbsp;                      /N@@d@@@@@@@@@@@@@@@@@@@@@@@@@@@ho`        ``````````.ho
    &nbsp;                     odd@hho++y@@@@@@@@@@@@@@@@@@@@@@:/y/         ```````````ss
    &nbsp;                    +Ns@@@/   .h@@@@@h...y@@@@@--NN.. `.`        `````````````ys
    &nbsp;                   -@hh@h.    `N@@Ny`    hN@@@@@@`    `@h         ````.```````.d:
    &nbsp;                   h@h`         @h.`      `N@dddh                 `````````````:@
    &nbsp;                  .@@@@        `hhh.     `.hy--      --           ``````````````d:
    &nbsp;                  /@@h-                  /::/ys  :::/N@`   ::     ``````````````so
    &nbsp;                  o@@`                    `so//--sy@@ys//` os`  `+:`````````````oy
    &nbsp;                  +@y                       `oo/:  oo  +s`      -@dooo:.````````ss
    &nbsp;                  .@d                                     `     .+h@oo+:.```````d:
    &nbsp;                   d@-                                    ` `yyy/ hd`....``````:@
    &nbsp;                   -@hoy                                `oshd@@@:.Ny```````+-`.d/
    &nbsp;                    oN-@:                             .d@N@@@@@@@N@Ny.`````.``sy
    &nbsp;                     sd--                           -N@@@@@@@@@@@@@@@y.``````oy
    &nbsp;                      +h`                           :@@@@@@@@@@@@@@@@d.````.ys
    &nbsp;                       -h/                          +@s+++++++N@@@@h/.```./d:
    &nbsp;                         +h:                        `-       `:@@o.`````+ho`
    &nbsp;                          `+y/                              ```/:``.///yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooys+//ossssss/+osys++osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame86 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooosooooo+/:.
    &nbsp;                                   `:oy@N@ddddN@@@NNN@@@NNNN@ho:`
    &nbsp;                                :sd@@@@@@@@@@@@@@@d@@@@@@@Ns/+oyyss:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@@dN@@@@@@@@@@@/./-./ss:
    &nbsp;                           /d@dh@@@@@@@@@@@@@@@@@@@@@@@@@@@dh//o`````.+y+`
    &nbsp;                         /@@dysN@@@@@@@@@@@@@@@@@@@@@@@@@/hd   `````````:h+
    &nbsp;                       .hh@@N@@@@@@@@@@@@@@@@@@@@@@@@@@h:.  +y````````````/h-
    &nbsp;                      /NN@@d@@@@@@@@@@@@@@@@@@@@@@@@@@@@o:       ``````````.ho
    &nbsp;                     o@o@@yd+++s@@@@@@@@@@@@@@@@@@@@@@s:sy`       ```````````ss
    &nbsp;                    +@s@@@@:   .o@@@@@@:..-@@@@@y.+@s.` ..       `````````````ys
    &nbsp;                   -@@:@@s`     hN@NN.    -NN@@@@@s     /@/      `````````````.d:
    &nbsp;                   h@@/`         o@-`       /@Ndddo                ````````````:@
    &nbsp;                  .@@@@y         ohho     `./h+-.     `--         ``````````````d:
    &nbsp;                  /@@Ns.                  ./::+y/ `:::+@d   `:-   ```.``````````so
    &nbsp;                  o@@o                      :s+//-/sh@Nss/: .s+   :+````````````oy
    &nbsp;                  +@@.                        -o+/- .s+ `s+       d@ooo/-```````ss
    &nbsp;                  .@@:                                     ``    `+s@yo+:-``````d:
    &nbsp;                   d@y                                     `` +yys`+N-....`````:@
    &nbsp;                   -@@:d+                                 :syhN@@h`h@``````.o..d/
    &nbsp;                    o@++N`                              odN@@@@@@N@@Nh.```````sy
    &nbsp;                     s@./                             yN@@@@@@@@@@@@@@h.`````oy
    &nbsp;                      +d`                             d@@@@@@@@@@@@@@@d.```.ys
    &nbsp;                       -h/                           `Nd+++++++d@@@@y/.``./d:
    &nbsp;                         +h:                          -`     ``:d@+.````:do`
    &nbsp;                          `+y/                              ````/-``-++yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oosy+///sssssoo/ooyyo+osso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame87 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooosooooo+/:.
    &nbsp;                                   `:oydN@ddhd@@@@@NN@@@NN@N@ho:`
    &nbsp;                                :sd@@@@@@@@@@@@@@@@d@@@@@@@@o/oshss:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@@@dN@@@@@@@@@@d:-/./ss:
    &nbsp;                           /hN@s@N@@@@@@@@@@@@@@@@@@@@@@@@@@dh/++````.+y+`
    &nbsp;                         /@@hNoy@@@@@@@@@@@@@@@@@@@@@@@@@@+s@` `````````:h+
    &nbsp;                       .ho@@@@N@@@@@@@@@@@@@@@@@@@@@@@@@N/-  :h.``````````/h-
    &nbsp;                      /N@@@d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ho      ``````````.ho
    &nbsp;                     o@o@@@sd+++o@@@@@@@@@@@@@@@@@@@@@@N//y/      ```````````ss
    &nbsp;                    +@do@@@@-   `:@@@@@@h...s@@@@@/.d@:.  ..      ````````````ys
    &nbsp;                   -@@ys@@o`     +N@@Ns     sN@@@@@@-     h@`    ```.``.``````.d:
    &nbsp;                   h@@N.`         `@y.`       h@@ddd-              ````````````:@
    &nbsp;                  .@@@@No         -hhh.     `.sh:-`     .-`        `````````````d:
    &nbsp;                  /@@@@+`                   :/::sy. -:::h@+   -:`  `````````````so
    &nbsp;                  o@@@-                       os+/:-+s@@dso/. /y.  -+-``````````oy
    &nbsp;                  +@@y                          +o+/` :s- :s-     `/@yoo/-``````ss
    &nbsp;                  .@@@                                      ``   ``:o@ho+/-`````d:
    &nbsp;                   d@@-                                     `` `yyy:-N+`...````:@
    &nbsp;                   -@@h/d:                                  oshd@@N.o@.`````-/.d/
    &nbsp;                    o@d`dd                               `d@@@@@@@@@@@@.``````sy
    &nbsp;                     s@o`/                             .N@@@@@@@@@@@@@@h.````oy
    &nbsp;                      +N-                              /@@@@@@@@@@@@@@@y```.ys
    &nbsp;                       -d/                             yN+++++++h@@@@s/``./d:
    &nbsp;                         +h:                           ..    ```-dN/.```:do`
    &nbsp;                          `+y/                              `````/-``/oyo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooyo///+ssssso+/ssysoosso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame88 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooosoooo+/:.
    &nbsp;                                   `:oydN@dhhh@N@@@NNN@@NN@N@ho:`
    &nbsp;                                :sd@@@@@@@@@@@@@@@@@dN@@@@@@d+oohys:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@@@@d@@@@@@@@@@Ny-/:/ss:
    &nbsp;                           /dd@@o@NN@@@@@@@@@@@@@@@@@@@@@@@@@@h/o/```.+y+`
    &nbsp;                         /d@h@@/d@@@@@@@@@@@@@@@@@@@@@@@@@@s+N-``.``````:h+
    &nbsp;                       .h+s@@@@N@@@@@@@@@@@@@@@@@@@@@@@@@@o:``.h:`````````/h-
    &nbsp;                      /NdN@@h@@@@@@@@@@@@@@@@@@@@@@@@@@@@@No.    ``````````.ho
    &nbsp;                     o@@+@@Ns@++//N@@@@@@@@@@@@@@@@@@@@@@s/os    ````````````ss
    &nbsp;                    +@@+d@@@@:    -d@@@@@@:...N@@@@@.:@h.` ..     ````````````ys
    &nbsp;                   -@@@:d@@o`     `N@@NN.    `@N@@@@@@     :@o    ``..````````.d:
    &nbsp;                   h@@@y``          y@-.       `@@dddh         `  ``.``````````:@
    &nbsp;                  .@@@@@N+          shhy      ..hy--      --       `````````````d:
    &nbsp;                  /@@@@h/`                   `/::/yy  :::/N@`  `:- `````````````so
    &nbsp;                  o@@@h`                       `ss//::ssN@ys+/ `s+ ``+/`````````oy
    &nbsp;                  +@@@:                          `oo//  oo` os   ` `.Ndoo+-`````ss
    &nbsp;                  .@@@o                                   ``  `` ` `.ohdo+/.````d:
    &nbsp;                   d@@d                                   ``  `` oyh+`ds`...```:@
    &nbsp;                   -@@@/sd-                                  :shhN@@/:@:`````/.d/
    &nbsp;                    o@@:.Ny                                +@N@@@@@@NN@@-`````sy
    &nbsp;                     s@N`::                              s@@@@@@@@@@@@@@y.```oy
    &nbsp;                      +@o                                @@@@@@@@@@@@@@@o``.ys
    &nbsp;                       -d/                              :@s++++++y@@@@o:``/d:
    &nbsp;                         +h:                            `-  `````-d@:```:ho`
    &nbsp;                          `+y/                              ``````/.`-sho`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooss///:ossssss/osyysosso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame89 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooosoooo+/:.
    &nbsp;                                   `:oyd@@ddhhd@@@@NN@@@NN@@@ho:`
    &nbsp;                                :sd@@@@@@@@@@@@@@@@@@dN@@@@@@y+oyhs:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@@@@@d@@@@@@@@@N@o://ss:
    &nbsp;                           /ddN@ys@NN@@@@@@@@@@@@@@@@@@@@@@@@@@h/o:``.+y+`
    &nbsp;                         /d@hyNh/@@@@@@@@@@@@@@@@@@@@@@@@@@@h/@:``.`````:h+
    &nbsp;                       .h+-N@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@h/.`.y/````````/h-
    &nbsp;                      /NNd@@@y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@y/   ``````````.ho
    &nbsp;                     o@@+h@@@s@+///d@@@@@@@@@@@@@@@@@@@@@@N//y-  ````````````ss
    &nbsp;                    +@@@:@@@@@/    .o@@@@@@d...+@@@@@s.y@/. `-`   ````````````ys
    &nbsp;                   -@@@@.N@@o`      yN@@Ny     /NN@@@@@o     h@`  ```.````````.d:
    &nbsp;                   h@@@@o``          .@y.`       +@Nd@do       `` `````````````:@
    &nbsp;                  .@@@@@@N+          -hhh:     `./ho-.     `-.    ``.```````````d:
    &nbsp;                  /@@@@@h/`                    ./::+y+ `:::o@y   -/`````````````so
    &nbsp;                  o@@@@s                         -so//:/sh@Nso/- /y.``/+````````oy
    &nbsp;                  +@@@N`                           .so/: .s+ -s/ ```.`hNoo+-````ss
    &nbsp;                  .@@@@-                                    `` `.```.`+y@o+:.```d:
    &nbsp;                   d@@@o                                    `` ```-yhs`yy`...``:@
    &nbsp;                   -@@@N`hd-                                  `syd@@@s.N/````./d/
    &nbsp;                    o@@@`/@y                                `d@@@@@@@NN@@-````sy
    &nbsp;                     s@@o +.                              .N@@@@@@@@@@@@@s```oy
    &nbsp;                      +@@`                                o@@@@@@@@@@@@@N:`.ys
    &nbsp;                       -d+                                @d++++++y@@@N+-`/d:
    &nbsp;                         +h:                             `-```````-@d-``:yo`
    &nbsp;                          `+y/                              ``````./`.sho`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooooy+//:/sssssso/ssyyosso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame90 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooossooo+/:.
    &nbsp;                                   `:oyh@@hdyhh@N@@@NN@@N@@@@ho:`
    &nbsp;                                :sd@@@@@@@@@@@@@@@@@@@dN@@@@@Nooyhs:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Nh//+ss:
    &nbsp;                           /d@h@@oh@@N@@@@@@@@@@@@@@@@@@@@@@@@@@h/o.`.+y+`
    &nbsp;                         /dddhd@s/N@@@@@@@@@@@@@@@@@@@@@@@@@@@/@/``.````:h+
    &nbsp;                       .h+`o@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@N/-`.y+```````/h-
    &nbsp;                      /NNdN@@@y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o` ``````````.ho
    &nbsp;                     o@@N-N@@@sN+///o@@@@@@@@@@@@@@@@@@@@@@@s:so ````````````ss
    &nbsp;                    +@@@s+@@@@@o    `-N@@@@@@+...d@@@@@--N@.` .- `````````````ys
    &nbsp;                   -@@@@y-N@@s`      -N@@NN:     yN@@@@@N.    :@+ ````.```````.d:
    &nbsp;                   h@@@@@+``           s@/.        h@@d@@-      `````.`````````:@
    &nbsp;                  .@@@@@@@No           shhh`     `.sh/-`     .-`  ``````````````d:
    &nbsp;                  /@@@@@Nh/.                     :/::sh- .:::d@-  ./-```````````so
    &nbsp;                  o@@@@Ns                          +s+/::+s@@hs++`.y/``-+```````oy
    &nbsp;                  +@@@@d                             /s+/. :s- +s```.``o@ss+-```ss
    &nbsp;                  .@@@@N                                     ````..````/s@o+:.``d:
    &nbsp;                   d@@@@/                                    `` ``.`yhy.sh`..``:@
    &nbsp;                   -@@@@d`hd-                                   /ydd@@d.N/````/d/
    &nbsp;                    o@@@s o@y                                 o@N@@@@@NN@d.```sy
    &nbsp;                     s@@N. s.                               y@@@@@@@@@@@@@/``oy
    &nbsp;                      +N@/                                 .@@@@@@@@@@@@@d..ys
    &nbsp;                       -ds                                 sN++++++y@@@d:./d:
    &nbsp;                         +h:                               ..``````-Ny.`:yo`
    &nbsp;                          `+y/                              ```````-:`oho`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooooss//::+ssssss+osyyssso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame91 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooosooo+/:.
    &nbsp;                                   `:oyhd@hhhyh@@@@@NN@@N@@@@ho:`
    &nbsp;                                :sdN@@@@@@@@@@@@@@@@@@Nd@@@@@@doyhs:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@@@@@@@@N@@@@@@@N@s/oys:
    &nbsp;                           /dNh@@N/d@@N@@@@@@@@@@@@@@@@@@@@@@@@@@h++..+y+`
    &nbsp;                         /hh@hyN@o/N@@@@@@@@@@@@@@@@@@@@@@@@@@N+d/``````:h+
    &nbsp;                       .h+`.d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o:`.s+``````/h-
    &nbsp;                      /NNNh@@@@yd@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@s.``````````.ho
    &nbsp;                     o@@@y:@@@@sNo////N@@@@@@@@@@@@@@@@@@@@@@@/+y````````````ss
    &nbsp;                    +@@@@:y@@@@@h     .s@@@@@@N...-@@@@@h.s@+. `-`````````````ys
    &nbsp;                   -@@@@@o-@@Nd`       yN@@Nd     `@N@@@@Ny`    hd````.```````.d:
    &nbsp;                   h@@@@@@+``           `@@..       `@@@@@h       ..```````````:@
    &nbsp;                  .@@@@@@@@Ny           `hhho      ..hh--     `-. ```.``````````d:
    &nbsp;                  /@@@@@@Nh/.                      //::yy` :::+@h ``:/``````````so
    &nbsp;                  o@@@@@@o                           ss++::sy@Nys+:`os``-+``````oy
    &nbsp;                  +@@@@@h                              os//  oo .s/````./@ss/.``ss
    &nbsp;                  .NN@@@@                                      `.`.-````:s@o+-``d:
    &nbsp;                   d@@@@@-                                     `` ..`ohh-oy`..`:@
    &nbsp;                   -@@@@@y`hd:                                   .yhdN@@.@/```-@/
    &nbsp;                    oN@@@: s@h                                 -@N@@@@@@N@h.``sy
    &nbsp;                     sN@@d `y.                               :@@@@@@@@@@@@N.`oy
    &nbsp;                      +N@@`                                  h@@@@@@@@@@@@o.ys
    &nbsp;                       -dy`                                 :@o+++++y@@Ns-/d:
    &nbsp;                         +h:                                ..``````/@+`:yo`
    &nbsp;                          `+y/                              ````````:./ho`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooooos+/:::sssssss+sshysso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame92 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooosooo+/:.
    &nbsp;                                   `:oydddhyhyhh@N@@@NN@N@@@@ho:`
    &nbsp;                                :oh@N@@@@@@@@@@@@@@@@@@Nd@@@@@Nssys:
    &nbsp;                             -sN@N@@@@@@@@@@@@@@@@@@@@@@N@@@@@@@@dooys:
    &nbsp;                           /d@hyN@@:d@@N@@@@@@@@@@@@@@@@@@@@@@@@@@y+:.+y+`
    &nbsp;                         /hydhdyN@+/@@@@@@@@@@@@@@@@@@@@@@@@@@@Nod/`````:h+
    &nbsp;                       .h+``/N@@@@N@@@@@@@@@@@@@@@@@@@@@@@@@@@@y/..o+.````/h-
    &nbsp;                      /NNN@d@@@@yh@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@h:`````````.ho
    &nbsp;                     o@@@@++@@@Ns@y////y@@@@@@@@@@@@@@@@@@@@@@@o/y:``````````ss
    &nbsp;                    +@@@@N.h@@@@@N`    `-N@@@@@@y...s@@@@@/-N@-` --```````````ys
    &nbsp;                   -@@@@@No-NNNN.`      .NN@NNo     +NN@@@@N:`   +@:.``.``````.d:
    &nbsp;                   h@@@@@@@+`.            +@o.`       /@N@@@/      ..``````````:@
    &nbsp;                  .@@@@@@@@@Nd            /hhh:     `./ho-.     .:``````````````d:
    &nbsp;                  /@@@@@@@@h+-                      .//:+ho `:::h@-``-/`````````so
    &nbsp;                  o@@@@@@@s                           .ss+/:/sd@dyo+`/y.`.+.````oy
    &nbsp;                  +N@@@@@y                              .so/: -s- os`.``.:@ss/``ss
    &nbsp;                  .Nd@@@@d                                      `.`.-.``.-sd+/.`d:
    &nbsp;                   dy@@@@@.                                     `.`..`/hh:os`..:@
    &nbsp;                   -NN@@@@s`hh+                                  ``shdN@@.@-``.@/
    &nbsp;                    odN@@N. s@@`                               ``h@@@@@@@N@s``sy
    &nbsp;                     sdN@@s `y.                               `@@@@@@@@@@@@y`oy
    &nbsp;                      +@y@o                                   +@@@@@@@@@@@@:ys
    &nbsp;                       -hy:                                  .Ns++++/h@@@//d:
    &nbsp;                         +h:                                 .-``````oh-:yo`
    &nbsp;                          `+y/                              ````````.:/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooo+oo/:::/ssssssoosyysso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame93 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooossoo+/:.
    &nbsp;                                   `:oydddhyyhshd@@@@NN@N@@@@ho:`
    &nbsp;                                :oh@@@@@@@@@@@@@@@@@@@@@N@@@@@@dsys:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@@@@@@@@@@N@@@@@@N@ysys:
    &nbsp;                           /dNNyh@@d:@@@N@@@@@@@@@@@@@@@@@@@@@@@@@@s+-+y+`
    &nbsp;                         /hoy@ydh@@+:N@@@@@@@@@@@@@@@@@@@@@@@@@@@oh:````:h+
    &nbsp;                       .ho `.+@@@@@N@@@@@@@@@@@@@@@@@@@@@@@@@@@@h/.-s/.```/h-
    &nbsp;                      /NNN@d@@@@@hy@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@d/````````.ho
    &nbsp;                     o@@@@N:o@@@@sd@/////@@@@@@@@@@@@@@@@@@@@@@@h/s+`````````ss
    &nbsp;                    +@@@@@N`h@@@@@@/     .s@@@@@@@:...N@@@@d.s@+. -:``````````ys
    &nbsp;                   -@@@@@@No.NNNN/`       sN@@NN.     hN@@@@Nh`  `.@o``.``````.d:
    &nbsp;                   h@@@@@@@@o..             d@:.        h@@@@d     `...````````:@
    &nbsp;                  .@@@@@@@@@@N@.            yhhh`     `.sh/-`    `:-````````````d:
    &nbsp;                  /@@@@@@@@@ho:                       ://:sh- -::+@y``./.```````so
    &nbsp;                  oh@@@@@@@s                            /so+/:oyNNys+--y-`.+````oy
    &nbsp;                  +hN@@@@@h                               /s+/` oo :y-```.:@so-`ss
    &nbsp;                  .No@@@@@@                                      `...-.``.-sh+:`d:
    &nbsp;                   d/N@@@@@.                                     `..`..:hh-y+..:@
    &nbsp;                   -@d@@@@@s hhs                                 ```+yd@@@-@.`.d/
    &nbsp;                    oyy@@@N. o@N-                               ``o@N@@@@@@@:`sy
    &nbsp;                     syh@@@+ `y-                                s@@@@@@@@@@@-oy
    &nbsp;                      +hoN@-                                   -N@@@@@@@@@@oys
    &nbsp;                       -ho+.                                  `dy+++//d@Ns+d:
    &nbsp;                         +h:                                 `.-.````.ho:yo`
    &nbsp;                          `+y/                              `````````-+yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+++y+::::ossssssosyhyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame94 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooooosoo+/:.
    &nbsp;                                   `:oy@@hhyyhyhh@@@@NNNNN@@@ho:`
    &nbsp;                                :oy@dN@@@@@@@@@@@@@@@@@@@N@@@@@Nyss:
    &nbsp;                             -sN@@@@@@@@@@@@@@@@@@@@@@@@@@N@@@@@@@hyys:
    &nbsp;                           /d@@hyd@@h:@@@N@@@@@@@@@@@@@@@@@@@@@@@@@d+/+y+`
    &nbsp;                         /h/syddhd@@+-N@@@@@@@@@@@@@@@@@@@@@@@@@@Nsh-```:h+
    &nbsp;                       .ds `.-o@@@@@N@@@@@@@@@@@@@@@@@@@@@@@@@@@@d/--s:```/h-
    &nbsp;                      /N@N@@h@@@@@dsN@@@@@@@@@@@@@@@@@@@@@@@@@@@@@N+```````.ho
    &nbsp;                     o@@@@@@:o@@@@hh@+///:h@@@@@@@@@@@@@@@@@@@@@@N+oo````````ss
    &nbsp;                    +@@@@@@@`h@@@@@@d     `.N@@@@@@d...+@@@@@/:@h-`-:.````````ys
    &nbsp;                   -@@@@@@@No.@NNNy`       `@N@@Nh     -NN@@@@N:` ``hy````````.d:
    &nbsp;                   h@@@@@@@@@h..`            .@d..       .@@@@@+  ``.`-.```````:@
    &nbsp;                  .N@@@@@@@@@@@@+            .hhhs      .-hy--     -:```````````d:
    &nbsp;                  /h@@@@@@@@@dy:.                       //:/hy `://dN```/-``````so
    &nbsp;                  oyh@@@@@@Ny.                            ss++:/sd@dy+:`s:`./```oy
    &nbsp;                  +hy@@@@@@d`                               oo+/ :s-.s/````/Ns+.ss
    &nbsp;                  .N-@@@@@@N                                     ``--.--```-yy+.d:
    &nbsp;                   d/o@@@@@@-                                    ``..`..-hh-h-.:@
    &nbsp;                   -@+@@@@@@y yhh`                                ```:yd@@d/y`.d/
    &nbsp;                    oy:@@@@@` +@@+                              ``.:@N@@@@@@d`sy
    &nbsp;                     sy+@@@N/  y/                               `/@@@@@@@@@@yoy
    &nbsp;                      +h/h@@`                                  ``@@@@@@@@@@dhs
    &nbsp;                       -h/+/`                                 ``yh++//+@@dsd:
    &nbsp;                         +h:                                ```.-.````:h+yo`
    &nbsp;                          `+y/                              `````````.oyo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++/ss/::::ssssyysoyhyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame95 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooooosoo+/:.
    &nbsp;                                   `:oy@@dyyyydshdN@@@NNNN@@@ho:`
    &nbsp;                                :sy@d@@@@@@@@@@@@@@@@@@@@@@N@@@@@ss:
    &nbsp;                             -sN@NN@@@@@@@@@@@@@@@@@@@@@@@@N@@@@@@ddys:
    &nbsp;                           /ddNNsyd@@h:d@@N@@@@@@@@@@@@@@@@@@@@@@@@@y/oy+`
    &nbsp;                         /h/:yhy@y@@@o.N@@@@@@@@@@@@@@@@@@@@@@@@@@Nsy.``:h+
    &nbsp;                       .dd` .`-s@@@@@N@@@@@@@@@@@@@@@@@@@@@@@@@@@@d+--s-``/h-
    &nbsp;                      /N@NN@@y@@@@@@s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@No``````.ho
    &nbsp;                     o@@@@@@@:o@@@@dyNy//::/@@@@@@@@@@@@@@@@@@@@@@@o+s```````ss
    &nbsp;                    +@@@@@@@N`s@@@@@@@-     .+@@@@@@@+...d@@@@h-hN:..:.```````ys
    &nbsp;                   -@@@@@@@@Ny`yNNNN.        /NN@NN+     sN@@@@Nh````od.``````.d:
    &nbsp;                   h@@@@@@@@@@N...             o@o.`       s@N@@d `````..``````:@
    &nbsp;                  .NN@@@@@@@@@@@Nd             /hhh/     `.+h+-`  ``-:.`````````d:
    &nbsp;                  /hs@@@@@@@@@@h/-                       .+/:oh/ -//s@:``:-`````so
    &nbsp;                  oy:@@@@@@@@y:                            -ss+/:oy@Nyo/`s/`-:``oy
    &nbsp;                  +h-@@@@@@@N`                               -so+.`o+`oo````+ds-ss
    &nbsp;                  .N`s@@@@@@@.                                    ``.-.--```:ho:d:
    &nbsp;                   d/`N@@@@@@/                                    ``..`..-hh-h.:@
    &nbsp;                   -@.@@@@@@@h +hh:                             ` ```.-yd@@ys/.d/
    &nbsp;                    oy`d@@@@N. -@@h                             ```..@N@@@@@@/sy
    &nbsp;                     sy`d@@@N/  so                             ```.N@@@@@@@@Nsy
    &nbsp;                      +h.+N@d`                                 ```h@@@@@@@@N@s
    &nbsp;                       -h/.s:                                 ```sd+///oN@hd:
    &nbsp;                         +h:                                `````-.````osyo`
    &nbsp;                          `+y/                              ``````````+ho`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++/+s+::::+sssyyyosyhso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame96 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oy@N@yyysdyhh@@@@NNN@@@@ho:`
    &nbsp;                                :ohdddN@@@@@@@@@@@@@@@@@@@@@N@@@Nys:
    &nbsp;                             -sN@N@@@@@@@@@@@@@@@@@@@@@@@@@dN@@@@N@@ds:
    &nbsp;                           /dd@@@oh@@@y:d@N@@@@@@@@@@@@@@@@@@@@@@@@@Nosy+`
    &nbsp;                         /h+`sydyNy@@@y`@@@@@@@@@@@@@@@@@@@@@@@@@@@Nso``:h+
    &nbsp;                       .dN. `..-s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/-:s.`/h-
    &nbsp;                      /N@@N@@@y@@@@@@sy@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o`````.ho
    &nbsp;                     o@@@@@@@@//N@@@NydN/::::y@@@@@@@@@@@@@@@@@@@@@@y+s``````ss
    &nbsp;                    +@@@@@@@@N`+@@@@@@@y     `.d@@@@@@N.../@@@@@:o@o-.:.``````ys
    &nbsp;                   -@@@@@@@@@@d`+NNNNs         hN@@N@.    `NN@@@NN-.``/@.`````.d:
    &nbsp;                   h@@@@@@@@@@@@:..`             @@:.       `N@@@@/``.``..`````:@
    &nbsp;                  .@@@@@@@@@@@@@@N@:             yhhh.     ..yh:- ```.:.````````d:
    &nbsp;                  /d-N@@@@@@@@@Nho:`                       :+/:yh .//+@o``:-````so
    &nbsp;                  oy d@@@@@@@@ho                             +soo:+y@@ys+`o:`:-`oy
    &nbsp;                  +h h@@@@@@@@:                                os+/`/s`/s````yy+ss
    &nbsp;                  .N -@@@@@@@@/                                   ```.-.--```+h+d:
    &nbsp;                   d/ +@@@@@@@s                                   ```..`..-hs+/:@
    &nbsp;                   -@`+@@@@@@@N`:hhs                            ```````.ydN@+h.d/
    &nbsp;                    oy -@@@@@N. `N@@.                           ````..dN@@@@@dsy
    &nbsp;                     sy /@@@@N+  /h                            ````.@@@@@@@@@dy
    &nbsp;                      +h`:y@@h`                                 ```s@@@@@@@@Ns
    &nbsp;                       -h/ /s-                                ````od////yN@d:
    &nbsp;                         +h:                                 `````.````-hho`
    &nbsp;                          `+y/                              ``````````/ho`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++//os/::::ossyyyssyhso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame97 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:osdN@hsyssdshdN@@@NN@@@@ho:`
    &nbsp;                                :ohhdh@@@@@@@@@@@@@@@@@@@@@@@@@@@hs:
    &nbsp;                             -s@NN@N@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@N@s:
    &nbsp;                           /d@hN@d+hd@@h:h@N@@@@@@@@@@@@@@@@@@@@@@@@@hyh+`
    &nbsp;                         /do`-hsdyNyN@@d y@@@@@@@@@@@@@@@@@@@@@@@@@@@s/`/h+
    &nbsp;                       .d@o```..:s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@d/:/+`/h-
    &nbsp;                      /N@@@N@@@y@@@@@@yoN@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o````.ho
    &nbsp;                     o@@@@@@@@@//@@@@@hy@s::::/@@@@@@@@@@@@@@@@@@@@@@h/o`````ss
    &nbsp;                    +@@@@@@@@@@--@@@@@@@@.     .:@@@@@@@s...d@@@@s/Nh-./.`````ys
    &nbsp;                   -@@@@@@@@@@@@-.NNNNN.        .NN@@Ny     oN@@@@No.`.:@.````.d:
    &nbsp;                   h@@@@@@@@@@@@@s...             .@d..       +@N@@y````...````:@
    &nbsp;                  .@@N@@@@@@@@@@@@@@h             .hhhy      ./do:.``.`:-```````d:
    &nbsp;                  /@`s@@@@@@@@@@@dy:-                       `++:oh/`///@y``:.```so
    &nbsp;                  oy -@@@@@@@@@@y.                            `sso+/sh@hs+`o:`/`oy
    &nbsp;                  +h .@@@@@@@@@s`                               -so+.-s-:s```.@oys
    &nbsp;                  .N  /@@@@@@@@y                                  `````-..-``.yo@:
    &nbsp;                   d/  h@@@@@@@@                                  `````....:h/s:@
    &nbsp;                   -@``d@@@@@@@@-`hhh-                           ```````.y@NN+/d/
    &nbsp;                    oy  s@@@@@@:` h@@s                         ` ```...hN@@@@Nyy
    &nbsp;                     sy  h@@@@No  -d-                          ``````h@@@@@@@Ny
    &nbsp;                      +h` +d@@y`                                ````o@@@@@@@@s
    &nbsp;                       -h/ `y+-                               `````oh////@N@:
    &nbsp;                         +h:                                 ``````.```.s@o`
    &nbsp;                          `+y/                              ``````````/ho`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooo+///s+::::/ssyyyysyyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame98 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oshNNhosssdyhh@@@@NN@@@@ho:`
    &nbsp;                                :oyhhhh@@@@@@@@@@@@@@@@@@@@@NN@@@ds:
    &nbsp;                             -s@N@N@@@@@@@@@@@@@@@@@@@@@@@@@N@@@@@N@Ny:
    &nbsp;                           /h@hd@@yodd@@h:y@N@@@@@@@@@@@@@@@@@@@@@@@@Nhh+`
    &nbsp;                         /@y. +hodhNyN@@@`+@@@@@@@@@@@@@@@@@@@@@@@@@@do./h+
    &nbsp;                       .d@d-``..--o@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@d:-+-/h-
    &nbsp;                      /N@@@@N@@@yd@@@@@@od@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/```.ho
    &nbsp;                     o@@@@@@@@@No:h@@@@@y@N/::::y@@@@@@@@@@@@@@@@@@@@@h/o````ss
    &nbsp;                    +@@@@@@@@@@@+`@@@@@@@@h     `.s@@@@@@@:..+@@@@@/@d:./.````ys
    &nbsp;                   -@@@@@@@@@@@@No`yNNNNs         oNN@NN/    `@N@@@Nh.`.-d.```.d:
    &nbsp;                   h@@@@@@@@@@@@@@N...`             o@o.`      `N@@@@..``...```:@
    &nbsp;                  .@N@@@@@@@@@@@@@@@N@/             /hhh/     `.yh:-````--``````d:
    &nbsp;                  /@/.@@@@@@@@@@@@@ho:`                       -+//hy`://dd``/.``so
    &nbsp;                  oy  o@@@@@@@@@Ny+                             +yso/oy@ds+`s..-oy
    &nbsp;                  +h  +@@@@@@@@@N``                               os+:.o:-s```/hhs
    &nbsp;                  .N  .s@@@@@@@@N`                                ``````--.-``:y@:
    &nbsp;                   d/  `N@@@@@@@@-                               ` `````....+h++@
    &nbsp;                   -@` :N@@@@@@@@o ohhs                          ````````.h@@ysd/
    &nbsp;                    oy  `@@@@@@@o` /@@N`                        ``.``.`.hN@@@@@y
    &nbsp;                     sy  .N@@@@Ny   ho                          ``````y@@@@@@@y
    &nbsp;                      +h` .oN@@h`                              ``````o@@@@@@@s
    &nbsp;                       -h/  .d/-                               `````oy//:s@@:
    &nbsp;                         +h:                                 ```````.```+No`
    &nbsp;                          `+y/                              ``````````/ho`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./oooo+///+s/::::+syyyyssyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFram99 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:osy@@dy+ssydshdN@@@@@@@@ho:`
    &nbsp;                                :oyhsyy@@@@@@@@@@@@@@@@@@@@@@NN@@@s:
    &nbsp;                             -s@@@NNN@@@@@@@@@@@@@@@@@@@@@@@@N@@@@@@Ny:
    &nbsp;                           /yhdyN@@oodd@@d:sN@@@@@@@@@@@@@@@@@@@@@@@@@@d+`
    &nbsp;                         /@h/ .ohodhNy@@@@--@@@@@@@@@@@@@@@@@@@@@@@@@@y//h+
    &nbsp;                       .hNNs```..--+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@y:-++h-
    &nbsp;                      /N@@@@@N@@@yy@@@@@@ss@@@@@@@@@@@@@@@@@@@@@@@@@@@@N:``.ho
    &nbsp;                     o@@@@@@@@@@Ns-o@@@@@yh@s:::::N@@@@@@@@@@@@@@@@@@@@d//```ss
    &nbsp;                    +@@@@@@@@@@@@h s@@@@@@@@:     ..N@@@@@@y.--@@@@@/h@:./````ys
    &nbsp;                   -@@@@@@@@@@@@@Nd`:NNNNN-         dN@@N@`    oN@@@N@-.`:d.``.d:
    &nbsp;                   h@@@@@@@@@@@@@@@@o...              @@-.       o@N@@:```...``:@
    &nbsp;                  .@@dN@@@@@@@@@@@@@@@@@              shhh.     .+d+:`.``--`````d:
    &nbsp;                  /@y /N@@@@@@@@@@@@hy/:                        ++:sd-.//hd`.:``so
    &nbsp;                  oy   h@@@@@@@@@@dy`                            .yss++yN@s+.s`:oy
    &nbsp;                  +h   h@@@@@@@@@@/`                             ` :so/`o/-s```hds
    &nbsp;                  .N   -y@@@@@@@@@+                              ` ``````--..``sN:
    &nbsp;                   d/   .@@@@@@@@@y                              ````````....yos@
    &nbsp;                   -@`  o@@@@@@@@@@ .hhh-                        `````````-h@Ns@/
    &nbsp;                    oy   .N@@@@@@h. `N@@o                       ``.``.`.-d@@@@@y
    &nbsp;                     sy   :@@@@@@d.  od`                        ```````y@@@@@@y
    &nbsp;                      +h`  :s@@@h.                             ```````s@@@@@@s
    &nbsp;                       -h/   :d/-                              ``````ss/:/N@:
    &nbsp;                         +h:                                ````````````:@o`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++////oo::::/syyyyysyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame100 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:osyh@@yoossdyyh@@@@@@@@@ho:`
    &nbsp;                                :syysoyy@@@@@@@@@@@@@@@@@@@@@@N@@@s:
    &nbsp;                             -sdd@@@N@@@@@@@@@@@@@@@@@@@@@@@@@@N@@@@Ny:
    &nbsp;                           /ysyhh@@@+odd@@@:o@@@N@@@@@@@@@@@@@@@@@@@@@Nd+`
    &nbsp;                         /dho. -oyodh@y@@@@+`N@@@@@@@@@@@@@@@@@@@@@@@@N++h+
    &nbsp;                       .hhNd+``.-.--/N@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o:/oh-
    &nbsp;                      /NN@@@@@N@@@hs@@@@@@dod@@@@@@@@@@@@@@@@@@@@@@@@@@@@...ho
    &nbsp;                     o@@@@@@@@@@@@y:/N@@@@dyNN/::::o@@@@@@@@@@@@@@@@@@@@h/:``ss
    &nbsp;                    +@@@@@@@@@@@@@N`-@@@@@@@@@     `.+@@@@@@@:--s@@@@oyN:.:```ys
    &nbsp;                   -@@@@@@@@@@@@@@@N/`hNNNNh         -NN@@No`   .N@@@NN:.`:y``.d:
    &nbsp;                   h@@@@@@@@@@@@@@@@@N...`             -@d..      -@N@@+```.-.`:@
    &nbsp;                  .N@NdN@@@@@@@@@@@@@@@N@o             `hhhs     .-hy:.```--````d:
    &nbsp;                  /hy: s@@@@@@@@@@@@@Nhs:.                       :o/+d/.//yh`.-`so
    &nbsp;                  oy    N@@@@@@@@@@Ny+                             oys+/y@@s/-/-sy
    &nbsp;                  +h    @@@@@@@@@@@@``                           ` `.so+`+/-o``+@s
    &nbsp;                  .N    :h@@@@@@@@@@                             `````````-.-.`/N:
    &nbsp;                   d/    -@@@@@@@@@@`                            `````````...-hs@
    &nbsp;                   -@`   y@@@@@@@@@@: ohhs                        `````````:dNhN/
    &nbsp;                    oy    -@@@@@@@N-` o@@N`                     ```.````.-@@@@@y
    &nbsp;                     sy    +@@@@@@@/  .@+                       ````````h@@@@@y
    &nbsp;                      +h`   /y@@@d:                            ````````y@@@@@s
    &nbsp;                       -h/    +d/:                            ```````.y+::h@:
    &nbsp;                         +h:                                ````````````:ho`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++///:/s+::::+yyyyyysso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame101 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:osyydddo/ssydshhN@@@@@@@ho:`
    &nbsp;                                :ohss+ysd@@@@@@@@@@@@@@@@@@@@@NN@@s:
    &nbsp;                             -sddd@@NN@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /yo+dsd@@@/odh@@N/+d@@N@@@@@@@@@@@@@@@@@@@@@d+`
    &nbsp;                         /hys/  /sy+dh@hd@@@h y@@@@@@@@@@@@@@@@@@@@@@@@hoh+
    &nbsp;                       .hsdNh/`..----:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@N/-sh-
    &nbsp;                      /@d@@@@@@N@@@@s@@@@@@@os@@@@@@@@@@@@@@@@@@@@@@@@@@@y..ho
    &nbsp;                     oN@@@@@@@@@@@@d+:y@@@@Nyh@y:::::@@@@@@@@@@@@@@@@@@@@s+.`ss
    &nbsp;                    +NN@@@@@@@@@@@@@/ d@@@@@@@@+     ..d@@@@@@y--/@@@@ssN:--``ys
    &nbsp;                   -@@@@@@@@@@@@@@@@Nh`:NNNNN/         sN@@NN.`   h@@@NN/.`++`.d:
    &nbsp;                   h@@@@@@@@@@@@@@@@@@@o...`             s@+.`    ``d@@@s```..`:@
    &nbsp;                  .Nd@@d@@@@@@@@@@@@@@@@@N@-             /hhh:    `-sd:-```-.```d:
    &nbsp;                  /hoy` y@@@@@@@@@@@@@@dh+/`                      `o+/hs`//hs`:`so
    &nbsp;                  oy    `@@@@@@@@@@@@dy.                          ``:yso/y@@s:+.yy
    &nbsp;                  +h     N@@@@@@@@@@@/`                           ``.`oo+.//:/`.Ns
    &nbsp;                  .N     /h@@@@@@@@@@+                            `````````-.-`.N:
    &nbsp;                   d/     :@@@@@@@@@@s                            `````````.`.os@
    &nbsp;                   -@`    h@@@@@@@@@@d .hhh:                    ` ``````````o@@@/
    &nbsp;                    oy     :@@@@@@@@o. `N@@s                    ```.`````.:N@@@y
    &nbsp;                     sy     s@@@@@@Ny   yd`                    `````````.d@@@@y
    &nbsp;                      +h`    +y@@@@+                           ````````.d@@@@s
    &nbsp;                       -h/     od/:                           ````````-y/:s@:
    &nbsp;                         +h:    `                           ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++///::+s/:::/oyyhhysso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame102 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:ooyyyd@so+sshhyh@@@@@@@@ho:`
    &nbsp;                                :ohoo+oysN@@@@@@@@@@@@@@@@@@@@@N@@s:
    &nbsp;                             -sydydN@NN@@@@@@@@@@@@@@@@@@@@@@@@N@@@@Ny:
    &nbsp;                           /yo:ydo@@@@/o@yN@@++h@N@@@@@@@@@@@@@@@@@@@@@@+`
    &nbsp;                         /hoso.  /oy+dh@hd@@@N`/@@@@@@@@@@@@@@@@@@@@@@@Nsh+
    &nbsp;                       .h+o@dd-...---:-h@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@h:sd-
    &nbsp;                      /dsN@@@@@@N@@@Nsh@@@@@@ho@@@@@@@@@@@@@@@@@@@@@@@@@@@/-ho
    &nbsp;                     od@@@@@@@@@@@@@@y:/@@@@@dyN@/::::o@@@@@@@@@@@@@@@@@@@+/`ss
    &nbsp;                    +@@@@@@@@@@@@@@@@d :@@@@@@@@N`     ./@@@@@@N:::@@@@ys@-:.`ys
    &nbsp;                   -NN@@@@@@@@@@@@@@@@N/`yNNNN@`        `@N@@Ns`  `+@@@@N/``s-.d:
    &nbsp;                   h@@@@@@@@@@@@@@@@@@@@@-...              NN..   ```s@NNs``...:@
    &nbsp;                  .No@@dd@@@@@@@@@@@@@@@@@@@d              yhhy   ``-+d/-```-.``d:
    &nbsp;                  /h-ho `h@@@@@@@@@@@@@@Nhy/:                     ``+o/yy`:/d/.-so
    &nbsp;                  oy     `@@@@@@@@@@@@@ys                         ```.yso/s@do-/sy
    &nbsp;                  +h      N@@@@@@@@@@@N``                         `````/s+.+:+-`hs
    &nbsp;                  .N      /y@@@@@@@@@@N                           ``````````-..`@:
    &nbsp;                   d/      -@@@@@@@@@@@`                          ``````````.`-h@
    &nbsp;                   -@`    `h@@@@@@@@@@@: ohhy`                   ```````````.hNN/
    &nbsp;                    oy     `:@@@@@@@@@.` o@@@.                   ```.`````.o@@@y
    &nbsp;                     sy      s@@@@@@Nd.  -@+                   ``````````-N@@@y
    &nbsp;                      +h`     oy@@@Ns                           ````````-@@@@s
    &nbsp;                       -h/      sd//`                         `````````/o:od:
    &nbsp;                         +h:     `                           ```````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++///:::so::://yyhhhyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame103 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oosyshdd++osydshhN@@@@@@ho:`
    &nbsp;                                :oyy/++ssy@@@@@@@@@@@@@@@@@@@@@@N@s:
    &nbsp;                             -ssyyh@@@N@@@@@@@@@@@@@@@@@@@@@@@@@@N@@Ny:
    &nbsp;                           /y+.+dhoN@@@/+@yN@@o/y@N@@@@@@@@@@@@@@@@@@@@@+`
    &nbsp;                         /h/oy+  `/oy/hyNdh@@@@/`N@@@@@@@@@@@@@@@@@@@@@@dd+
    &nbsp;                       .h+-@Ndd-...-----o@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@N+od-
    &nbsp;                      /h/d@@@@@@@N@@@@ys@@@@@@Nos@@@@@@@@@@@@@@@@@@@@@@@@@d-ho
    &nbsp;                     oys@@@@@@@@@@@@@@y+/h@@@@Nyh@h:::::d@@@@@@@@@@@@@@@@@N/-ss
    &nbsp;                    +hy@@@@@@@@@@@@@@@@: d@@@@@@@@y     `.h@@@@@@o::h@@@hyd.:`ys
    &nbsp;                   -@y@@@@@@@@@@@@@@@@@Nd`-NNNNNy         +N@@@N.` `-N@@@@/`.s.d:
    &nbsp;                   hs@@@@@@@@@@@@@@@@@@@@@h...`             /@o.`  ```/@NNs``..:@
    &nbsp;                  .N.N@Ndd@@@@@@@@@@@@@@@@@@N@o             -hdd/ ```.:d+-```-``d:
    &nbsp;                  /h sh/ `y@@@@@@@@@@@@@@@@hs/-                   ```:o/sh`:/@.-so
    &nbsp;                  oy       N@@@@@@@@@@@@@y/                       `````oys/sNh+/oy
    &nbsp;                  +h       @@@@@@@@@@@@@s``                       ``````:s+.+-+`ss
    &nbsp;                  .N       :s@@@@@@@@@@@s                         ```````````--.d:
    &nbsp;                   d/       `@@@@@@@@@@@y                        ````````````..y@
    &nbsp;                   -@`      h@@@@@@@@@@@@ `hhho                  ````````````/@@/
    &nbsp;                    oy      `-@@@@@@@@@/. `N@@h                  ```.``````-h@@y
    &nbsp;                     sy       o@@@@@@@@+   yd`                 ```````````+@@@y
    &nbsp;                      +h`      oy@@@@y-                         `````````+@@@s
    &nbsp;                       -h/       s@//.                        `````````.+/od:
    &nbsp;                         +h:      `                          ```````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++///:::/s/:://oyhhhyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame104 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oooysshdso/sshhyh@@@@@@@ho:`
    &nbsp;                                :osh::oosod@@@@@@@@@@@@@@@@@@@@@N@s:
    &nbsp;                             -ssosydN@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /y+.-ydso@@@@//Ny@@@y/y@N@@@@@@@@@@@@@@@@@@@@+`
    &nbsp;                         /h/-ho:  `/oh/yyN@hN@@@y y@@@@@@@@@@@@@@@@@@@@@Nd+
    &nbsp;                       .h+`o@Ndd-...-----:N@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@hod-
    &nbsp;                      /h-o@@@@@@@@N@@@@dod@@@@@@hod@@@@@@@@@@@@@@@@@@@@@@@N+ho
    &nbsp;                     oy:N@@@@@@@@@@@@@@dy:/@@@@@dy@@+:::/+@@@@@@@@@@@@@@@@@y:ss
    &nbsp;                    +h/N@@@@@@@@@@@@@@@@h :@@@@@@@@@-     .:@@@@@@d::s@@@yhs-.ys
    &nbsp;                   -@/N@@@@@@@@@@@@@@@@@@N+`oNNNNN:         @N@@N+``..@@@N@:`/:d:
    &nbsp;                   h/d@@@@@@@@@@@@@@@@@@@@@@/...`             @N-. ```.-@NNo`..:@
    &nbsp;                  .N s@@@dd@@@@@@@@@@@@@@@@@@@N@-             oddy ```.-ho-``..`d:
    &nbsp;                  /h .hh: `yN@@@@@@@@@@@@@@@dh+/`                  ```.o+oh`/+y.yo
    &nbsp;                  oy        d@@@@@@@@@@@@@hh.                      `````+ys/yNs:yy
    &nbsp;                  +h        d@@@@@@@@@@@@@:.                      ```````-s+.o::ss
    &nbsp;                  .N        :o@@@@@@@@@@@@.                      ` ``````````...d:
    &nbsp;                   d/         @@@@@@@@@@@@:                      ` ``````````..+@
    &nbsp;                   -@`       yN@@@@@@@@@@@+ /hhh-                ````````````.h@/
    &nbsp;                    oy       `.N@@@@@@@@d.` +@@@/               ``.``.`````./N@y
    &nbsp;                     sy        +@@@@@@@Nd`  -@o                 ```````````h@@y
    &nbsp;                      +h`       oy@@@@d+                       ``````````.h@@s
    &nbsp;                       -h/        oN++-                        `````````-+od:
    &nbsp;                         +h:       `                         ```````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++///::::os:://+yhhhyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame105 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oooss+shd+o+sydyhh@@@@@@ho:`
    &nbsp;                                :osy+.+sosoN@@@@@@@@@@@@@@@@@@@@@ds:
    &nbsp;                             -ss/+yh@@@@@@@@@@@@@@@@@@@@@@@@@@@@@NN@Ny:
    &nbsp;                           /y+../hdos@@@@o-Nyd@@h/sd@@N@@@@@@@@@@@@@@@@@+`
    &nbsp;                         /h/ od+-  `/+h/sy@Nh@@@@N`/@@@@@@@@@@@@@@@@@@@@@@+
    &nbsp;                       .h+ .d@@@d-..-----::h@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Nsh-
    &nbsp;                      /h.-d@@@@@@@@N@@@@@os@@@@@@@os@@@@@@@@@@@@@@@@@@@@@@@hho
    &nbsp;                     oy`y@@@@@@@@@@@@@@@Ny+:h@@@@@hh@@:////d@@@@@@@@@@@@@@@@/ys
    &nbsp;                    +h.y@@@@@@@@@@@@@@@@@@: h@@@@@@@@@     `.h@@@@@N/:o@@@s@/:ys
    &nbsp;                   -@.d@@@@@@@@@@@@@@@@@@@NN..dNNNN@`        /N@@@d..``d@@Nd..+d:
    &nbsp;                   h//@@@@@@@@@@@@@@@@@@@@@@@N....             /@o.````.-@NN/`./@
    &nbsp;                  .N .N@@@dd@@@@@@@@@@@@@@@@@@@@@@             .ddd:````-ho-``-`d:
    &nbsp;                  /h  +hh-  y@@@@@@@@@@@@@@@@Nhy//                 `````o+oy./y:yo
    &nbsp;                  oy         s@@@@@@@@@@@@@Nhs                     ``````/yo/h@+yy
    &nbsp;                  +h         s@@@@@@@@@@@@@@.`                   ` ```````-o/-//ss
    &nbsp;                  .N         -+N@@@@@@@@@@@d                     ` ```````````-.d:
    &nbsp;                   d/          y@@@@@@@@@@@@                     `````````````.:@
    &nbsp;                   -@`        o@@@@@@@@@@@@@` yhhy               `````````````+N/
    &nbsp;                    oy        `.d@@@@@@@@@+.  @@@N              ``.`````````-h@y
    &nbsp;                     sy         :@@@@@@@@@+   y@.               ```````````:N@y
    &nbsp;                      +h`        +y@@@@@y`                     ```````````/N@s
    &nbsp;                       -h/         /@o+/                      ```````````/sd:
    &nbsp;                         +h:        ``                      ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++///::::/so:///oyhhhso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame106 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:osooso+ydy+/sshhyhN@@@@@ho:`
    &nbsp;                                :osso`.ssoos@@@@@@@@@@@@@@@@@@@@@ds:
    &nbsp;                             -ss/-ohhN@@@@@@@@@@@@@@@@@@@@@@@@@@@@N@Ny:
    &nbsp;                           /y+`..shh+s@@@@s.Nhh@@@/sh@@N@@@@@@@@@@@@@@@@+`
    &nbsp;                         /h/ .hh+`  `//h++hd@hd@@@@:`@@@@@@@@@@@@@@@@@@@@@+
    &nbsp;                       .h+  /N@@@@--------::o@@@@@@@@@@@@@@@@@@@@@@@@@@@@@dd-
    &nbsp;                      /h..+N@@@@@@@@@@@@@@ho@@@@@@@hod@@@@@@@@@@@@@@@@@@@@@Ndo
    &nbsp;                     oy`-N@@@@@@@@@@@@@@@@dy:/@@@@@@y@@o////o@@@@@@@@@@@@@@@yhs
    &nbsp;                    +h :N@@@@@@@@@@@@@@@@@@@ .@@@@@@@@@+     ./@@@@@@+/+@@@sd:ys
    &nbsp;                   -@`/N@@@@@@@@@@@@@@@@@@@@Ny`/NNNNNs         @N@@N:.``h@@Ny`/d:
    &nbsp;                   h/ @@@@@@@@@@@@@@@@@@@@@@@@@y...`             N@-.```..NN@../@
    &nbsp;                  .N  +N@@@ddN@@@@@@@@@@@@@@@@@@@N@s             sdds````-h+-``.d:
    &nbsp;                  /h   shy-  sd@@@@@@@@@@@@@@@@@hs/-               ``````++ss./yyo
    &nbsp;                  oy          /@@@@@@@@@@@@@@@h+                   ```````/yo+@yyy
    &nbsp;                  +h          :@@@@@@@@@@@@@@s.`                 ``````````-o:/:ys
    &nbsp;                  .N          `+h@@@@@@@@@@@@o                   `````````````.-d:
    &nbsp;                   d/           :@@@@@@@@@@@@s                    ````````````.:@
    &nbsp;                   -@`         /d@@@@@@@@@@@@y -hhh+            ` ````````````-N/
    &nbsp;                    oy          .s@@@@@@@@@@.. -@@@s            ```.``.`````.+@y
    &nbsp;                     sy          .N@@@@@@@N@`  .@s`            `````````````y@y
    &nbsp;                      +h`         /yN@@@@h/                    ```````````.h@s
    &nbsp;                       -h/          -@s++`                    ```````````-sd:
    &nbsp;                         +h:         ``                     ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo++///:::::+s////+yhhhso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame107 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oooo+o/+y@oo/syhyhd@@@@@ho:`
    &nbsp;                                :osoo: :ysooh@@@@@@@@@@@@@@@@@@@@ds:
    &nbsp;                             -ss/`/yhdN@@@@@@@@@@@@@@@@@@@@@@@@@@@NNNy:
    &nbsp;                           /y+` .-yhh/s@@@@h`ddyN@N+sy@NN@@@@@@@@@@@@@@@+`
    &nbsp;                         /h/  :@y+`  `//ys/hh@dh@@@@y h@@@@@@@@@@@@@@@@@@N+
    &nbsp;                       .h+  `o@@@@@:-------:::N@@@@@@@@@@@@@@@@@@@@@@@@@@@Nd-
    &nbsp;                      /h. -y@@@@@@@@@@N@@@@Noy@@@@@@@os@@@@@@@@@@@@@@@@@@@@@No
    &nbsp;                     oy` o@@@@@@@@@@@@@@@@@Ny+:y@@@@@hh@@/////N@@@@@@@@@@@@@Nhs
    &nbsp;                    +h `o@@@@@@@@@@@@@@@@@@@@+ s@@@@@@@@N`    .-@@@@@@o/o@@Ny+ys
    &nbsp;                   -@` h@@@@@@@@@@@@@@@@@@@@@@@/`yNNNNN-        oN@@@+.``h@@@/-N:
    &nbsp;                   h/ :@@@@@@@@@@@@@@@@@@@@@@@@@@/...`            o@:-```.-@Ny`/@
    &nbsp;                  .N   y@@@@dd@@@@@@@@@@@@@@@@@@@@@N@:            :ddh````-h/.`.d:
    &nbsp;                  /h   `yyy:  /h@@@@@@@@@@@@@@@@@dho/.            ``.`````++s/:yyo
    &nbsp;                  oy            N@@@@@@@@@@@@@@dh-`               `````````/s+s@yy
    &nbsp;                  +h            N@@@@@@@@@@@@@@:.                 ``.```````:o-/hs
    &nbsp;                  .N            /o@@@@@@@@@@@@@-                  `````````````.d:
    &nbsp;                   d/             N@@@@@@@@@@@@-                  `````````````:@
    &nbsp;                   -@`          .hN@@@@@@@@@@@@: +hhh.          ` ````````````.d/
    &nbsp;                    oy           ./@@@@@@@@@@o.` y@@@-          ```.`````````-@y
    &nbsp;                     sy            d@@@@@@@@@o   s@-`          `````````````/Ny
    &nbsp;                      +h`          -yd@@@@dy                   ````````````+@s
    &nbsp;                       -h/           `Nh++:                   ```````````.s@:
    &nbsp;                         +h:          `.                    ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+////:::::/os///+ohhhso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame108 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:ooso/+//sdd/o+syhydN@@@@ho:`
    &nbsp;                                :oso//.`+hs+od@@@@@@@@@@@@@@@@@@@@s:
    &nbsp;                             -ss/`.+dy@@@@@@@@@@@@@@@@@@@@@@@@@@@@NNNy:
    &nbsp;                           /y+` `-:hhh/s@@@@@`y@y@@@ooyNNN@@@@@@@@@@@@@@+`
    &nbsp;                         /h/   +Ns/   `::sy:yhN@hN@@@N`o@@@@@@@@@@@@@@@@@N+
    &nbsp;                       .h+   `h@@@NN+------::::y@@@@@@@@@@@@@@@@@@@@@@@@@@@@-
    &nbsp;                      /h. `:d@@@@@@@@@@N@@@@@ho@@@@@@@ho@@@@@@@@@@@@@@@@@@@@@o
    &nbsp;                     oy`  h@@@@@@@@@@@@@@@@@@dy:/N@@@@@y@@s////y@@@@@@@@@@@@@@s
    &nbsp;                    +h  -h@@@@@@@@@@@@@@@@@@@@N` N@@@@@@@@s    `-s@@@@@s/o@@hyys
    &nbsp;                   -@` .N@@@@@@@@@@@@@@@@@@@@@@@@..@NNNNd        .N@@@y.``d@Nd.@:
    &nbsp;                   h/  s@@@@@@@@@@@@@@@@@@@@@@@@@@N....           `-@o-```.:@N::@
    &nbsp;                  .N   `d@@@Nddd@@@@@@@@@@@@@@@@@@@@@N@`          ``hdd-```-d:`.@:
    &nbsp;                  /h    .yyy/  .y@@@@@@@@@@@@@@@@@@hh+/           `````````+/h-+@o
    &nbsp;                  oy             s@@@@@@@@@@@@@@@hy``             ``````````+s+ddy
    &nbsp;                  +d             s@@@@@@@@@@@@@@N..               ```````````++:ys
    &nbsp;                  .@`            -+d@@@@@@@@@@@@@                 `````````````.d:
    &nbsp;                   d/              o@@@@@@@@@@@@@                 `````````````:@
    &nbsp;                   -@`            y@@@@@@@@@@@@@@  yhhs          ``.``````````.d/
    &nbsp;                    oy            `.@@@@@@@@@@@-. `@@@d          ```.````````.hy
    &nbsp;                     sy             +@@@@@@@@N@`  `@y`         `````````````.@y
    &nbsp;                      +h`           `sh@@@@Nh:                  ```````````:@s
    &nbsp;                       -h/             hN+++`                 ````````````+@:
    &nbsp;                         +h:           `.                    ```````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+////::::::/s+//++yhhso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame109 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:ooso/:///y@s+/syhyh@@@@@ho:`
    &nbsp;                                :oso::/ .sds/o@@@@@@@@@@@@@@@@@@@@s:
    &nbsp;                             -ss/` :odyN@@@@@@@@@@@@@@@@@@@@@@@@@@@NNy:
    &nbsp;                           /y+`  .-/dhh/o@@@@N.+@yd@@soy@NN@@@@@@@@@@@@@+`
    &nbsp;                         /h/    s@o/    ::+h/oh@Nh@@@@@:-@@@@@@@@@@@@@@@@N+
    &nbsp;                       .h+    .d@@NNNs-----:::::/@@@@@@@@@@@@@@@@@@@@@@@@@@@-
    &nbsp;                      /h.  ./@@@@@@@@@@@@@@@@@Nos@@@@@@Noy@@@@@@@@@@@@@@@@@@@o
    &nbsp;                     oy`  `@@@@@@@@@@@@@@@@@@@Nyo:s@@@@@hh@@////o@@@@@@@@@@@@Ns
    &nbsp;                    +h   :d@@@@@@@@@@@@@@@@@@@@@s /@@@@@@@@@`    -/@@@@@y/y@@hhs
    &nbsp;                   -@`  /N@@@@@@@@@@@@@@@@@@@@@@@@s`+NNNNN+`     ``h@@@h.`.@@@/d:
    &nbsp;                   h/   d@@@@@@@@@@@@@@@@@@@@@@@@@@@y....          ``@h-.``.o@h:@
    &nbsp;                  .N    .d@@@@hddN@@@@@@@@@@@@@@@@@@@@@Ny         ```sdd:```:y-`@:
    &nbsp;                  /h     .yyys   sh@@@@@@@@@@@@@@@@@Nhy/:         ``````````o/s-@o
    &nbsp;                  oy              .@@@@@@@@@@@@@@@Nhs``           ```````````oooNy
    &nbsp;                  +@`             .@@@@@@@@@@@@@@@y..             ````````````o:hs
    &nbsp;                  .@:              +s@@@@@@@@@@@@@s               ``````````````d:
    &nbsp;                   d+               `@@@@@@@@@@@@@s              ``````````````:@
    &nbsp;                   -@`             /h@@@@@@@@@@@@@s :hhh/        `````````````.d/
    &nbsp;                    oh             `.s@@@@@@@@@@y.` +@@@/      ` ```.`````````sy
    &nbsp;                     sy              .@@@@@@@@@@s   +@:         `````````````yy
    &nbsp;                      +h`             +yN@@@@dy                 ```````````.hs
    &nbsp;                       -h/              o@o++-`                ```````````/d:
    &nbsp;                         +h:             .`                  ```````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:://:::::::+s//++shhso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame110 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:ooos/:::/+dd+o/yyhy@@@@@ho:`
    &nbsp;                                :oso:`/- -hdo:sN@@@@@@@@@@@@@@@@@@s:
    &nbsp;                             -ss/` `/ydy@@@@@@@@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /y+`   --+dhy//@@@@@::@hh@@y+hdNN@@@@@@@@@@@@+`
    &nbsp;                         /h/    `h@o/    -:/ho/hd@dd@@@@o`@@@@@@@@@@@@@@@N+
    &nbsp;                       .h+    `-@@@NNNh-----::::::d@@@@@@@@@@@@@@@@@@@@@@@@@-
    &nbsp;                      /h.   ./N@@@@@@@@@@@N@@@@@ho@@@@@@@hoN@@@@@@@@@@@@@@@@@o
    &nbsp;                     oy`   .N@@@@@@@@@@@@@@@@@@@dy/:@@@@@@y@@o///+N@@@@@@@@@@@s
    &nbsp;                    +h    /@@@@@@@@@@@@@@@@@@@@@@@- d@@@@@@@@s    -:N@@@@s/d@d@s
    &nbsp;                   -@`   oN@@@@@@@@@@@@@@@@@@@@@@@@@:`hNNNN@``   ```o@@@d.`-@@yd:
    &nbsp;                   h/   `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/...`        ```y@-.``.dN+@
    &nbsp;                  .N     .d@@@@dhh@@@@@@@@@@@@@@@@@@@@@@NN:        ```/dd/```o+.d:
    &nbsp;                  /h      `yyyy`  :y@@@@@@@@@@@@@@@@@@@hs+.        `````````.os:ho
    &nbsp;                  oy                y@@@@@@@@@@@@@@@@h/``          ``````````.soNy
    &nbsp;                  +@-               y@@@@@@@@@@@@@@@+.`            ```````````-+hs
    &nbsp;                  .@y               -+d@@@@@@@@@@@@@:            ` `````````````d:
    &nbsp;                   dh                 o@@@@@@@@@@@@@-            ``````````````:@
    &nbsp;                   -@-              `h@@@@@@@@@@@@@@- ohhh`      `````````````.d/
    &nbsp;                    o@               .-@@@@@@@@@@@/-  @@@@      ``.``.````````sy
    &nbsp;                     sy                h@@@@@@@@N@-   dh`       `````````````oy
    &nbsp;                      +h`              -yd@@@@Nh:              ````````````.ys
    &nbsp;                       -h/               .@h++/`               ```````````/d:
    &nbsp;                         +h:              ..                 ```````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-//:::::::/so/++ohhso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame111 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:ooos+:.::/s@h/ooyyydN@@@ho:`
    &nbsp;                                :oso:`.+. /@ho:y@@@@@@@@@@@@@@@@@@s:
    &nbsp;                             -ss/`  ./hhh@@@@@@@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /y+`    -:odyy/:@@@@@o`@dyN@d+hhNN@@@@@@@@@@@+`
    &nbsp;                         /h/     `d@s/`   -::yy:sh@@hN@@@d`h@@@@@@@@@@@@@N+
    &nbsp;                       .h+     `-@@@NNNN:----::::::o@@@@@@@@@@@@@@@@@@@@@@@@-
    &nbsp;                      /h.    -+N@@@@@@@@@@@N@@@@@Noy@@@@@@Noh@@@@@@@@@@@@@@@@o
    &nbsp;                     oy`    -@@@@@@@@@@@@@@@@@@@@Nys:o@@@@@yh@d//++d@@@@@@@@@@s
    &nbsp;                    +h    `+N@@@@@@@@@@@@@@@@@@@@@@d -@@@@@@@@N`  `.:d@@@@o+NN@s
    &nbsp;                   -@`    yN@@@@@@@@@@@@@@@@@@@@@@@@@@.-NNNNNo`   ```:@@@d.`+@@@:
    &nbsp;                   h/    `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@N....      ``.``oN-.``:@h@
    &nbsp;                  .N      .d@@@@@hhh@@@@@@@@@@@@@@@@@@@@@@N@       ````-dd+``.y-d:
    &nbsp;                  /h       `yyyy:   yh@@@@@@@@@@@@@@@@@@dd++       ``````````-+oyo
    &nbsp;                  oh                 .@@@@@@@@@@@@@@@@dh-.         ```````````/ody
    &nbsp;                  +N+                `@@@@@@@@@@@@@@@N--         ` ````````````+ys
    &nbsp;                  .@@`                +o@@@@@@@@@@@@@N           ` `````````````d:
    &nbsp;                   dN`                  N@@@@@@@@@@@@N           ``````````````:@
    &nbsp;                   -@o                +hN@@@@@@@@@@@@@ `hhh+     `````````````.d/
    &nbsp;                    o@.               `.y@@@@@@@@@@@-. :@@@+    ``````````````sy
    &nbsp;                     sy                 :@@@@@@@@@@h   /@/      `````````````oy
    &nbsp;                      +h`                yh@@@@@dy             ````````````.ys
    &nbsp;                       -h/                 dN+++.`            ````````````/d:
    &nbsp;                         +h:               `.               ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-:/::::::::+y+++oyhso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame112 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oooso:..://hdo+/syhhN@@@ho:`
    &nbsp;                                :oso:` :+` oNy+:y@@@@@@@@@@@@@@@@@s:
    &nbsp;                             -ss/`   :/dyd@@@@@@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /y+`     ::odyy+.N@@@@y @@yN@@+hhNN@@@@@@@@@@+`
    &nbsp;                         /h/      `d@s/`   .::oh/+hNNhN@@@N.s@@@@@@@@@@@@N+
    &nbsp;                       .h+      `-@@@NNNN+-:--:::::::N@@@@@@@@@@@@@@@@@@@@@@-
    &nbsp;                      /h.     -+N@@@@@@@@@@@@N@@@@@ho@@@@@@@ys@@@@@@@@@@@@@@@o
    &nbsp;                     oy`     -@@@@@@@@@@@@@@@@@@@@@dy+:@@@@@dyN@++++h@@@@@@@@@s
    &nbsp;                    +h     `+@@@@@@@@@@@@@@@@@@@@@@@@+ s@@@@@@@@+ ``.:y@@@@+s@@s
    &nbsp;                   -@`     yN@@@@@@@@@@@@@@@@@@@@@@@@@@o`sNNNN@.` ```.-N@@h.`dNN:
    &nbsp;                   h/     `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@y...`    `````.+N-.`.yN@
    &nbsp;                  .N       `hN@@@@hhh@@@@@@@@@@@@@@@@@@@@@@@No    ``````.d@/``/+d:
    &nbsp;                  /h         syyys   :y@@@@@@@@@@@@@@@@@@Ndy+:    ````````````/oyo
    &nbsp;                  od`                  o@@@@@@@@@@@@@@@Nhy..       ````````````shy
    &nbsp;                  +@s-                 o@@@@@@@@@@@@@@@d-.        `````````````-hs
    &nbsp;                  .@@s                 -+h@@@@@@@@@@@@@y          ``````````````d:
    &nbsp;                   d@o                   /@@@@@@@@@@@@@s          `````````````:@
    &nbsp;                   -@@`                `hd@@@@@@@@@@@@@o /hhh.  ` ````````````.d/
    &nbsp;                    o@+                 .-@@@@@@@@@@@o.` h@@N`  ```.``````````sy
    &nbsp;                     sh`                  d@@@@@@@@N@:   dh`   ``````````````oy
    &nbsp;                      +h`                 /y@@@@@Nh:           ````````````.ys
    &nbsp;                       -h/                  +@s++/`           ````````````/d:
    &nbsp;                         +h:                `-`             ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:--/::::::::/os++osyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame113 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:ososs/.`-:++@h/o+yhh@@@@ho:`
    &nbsp;                                :oso:`  /+``sNy//h@@@@@@@@@@@@@@@@s:
    &nbsp;                             -ss/`    //@y@@@@@@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /y+`     `::o@yyo`@@@@@@ y@y@@N+hhNN@@@@@@@@@+`
    &nbsp;                         /h/       `d@h:.   `::/ho/h@@h@@@@@-+@@@@@@@@@@@N+
    &nbsp;                       .h+       `-d@@@N@@h:::-:::::::h@@@@@@@@@@@@@@@@@@@@@-
    &nbsp;                      /h.      -+N@@@@@@@@@@@@N@@@@@Noy@@@@@@@s@@@@@@@@@@@@@@o
    &nbsp;                     oy`      -N@@@@@@@@@@@@@@@@@@@@@hy/o@@@@Ny@@s+++y@@@@@@@@s
    &nbsp;                    +h      `+@@@@@@@@@@@@@@@@@@@@@@@@N``N@@@@@@@h````:y@@@@+@Ns
    &nbsp;                   -@`      yN@@@@@@@@@@@@@@@@@@@@@@@@@@N-.@NNNNo`````..N@@s.:@@:
    &nbsp;                   h/      `d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:...   ```.``./@-``:@@
    &nbsp;                  .N         h@@@@@@hhhN@@@@@@@@@@@@@@@@@@@@@NN`  ```````.d@:`.o@:
    &nbsp;                  /h          +yyyy-   sy@@@@@@@@@@@@@@@@@@@ds+`  ````````````.+do
    &nbsp;                  o@-                    N@@@@@@@@@@@@@@@@d+.`    `````````````:hy
    &nbsp;                  +@d+                   N@@@@@@@@@@@@@@@o-`      ``````````````ds
    &nbsp;                  .@@@-                  /+N@@@@@@@@@@@@@:        ``````````````d:
    &nbsp;                   d@N.                    d@@@@@@@@@@@@@-        `````````````:@
    &nbsp;                   -@@/                  /hN@@@@@@@@@@@@@. yhho ``````````````.d/
    &nbsp;                    o@d`                 `.s@@@@@@@@@@@-. -@@@+ ```.``````````sy
    &nbsp;                     s@.                   :@@@@@@@@@@d   /@:` ``````````````oy
    &nbsp;                      +@.                  `yh@@@@@dy          ````````````.ys
    &nbsp;                       -h/                   `@d+++.`         ````````````/d:
    &nbsp;                         +h:                  ..            ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-.:::::::::/+yo+ooyso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame114 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:ossss+-` ::+s@y/+syd@N@@ho:`
    &nbsp;                                :oso:`  `+/ `hNs:/d@@@@@@@@@@@@@@@s:
    &nbsp;                             -ss/`    `//Ns@@@@@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /y+`      `::+@yys`h@@@@@.+@hd@N+dhNN@@@@@@@@+`
    &nbsp;                         /h/        `d@d:.    :::yy/sd@dd@@@@/:@@@@@@@@@@N+
    &nbsp;                       .h+        `-h@@@@@@N:::::::::::+@@@@@@N@@@@@@@@@@@@@-
    &nbsp;                      /h.       -+@@@@@@@@@@@@@@@@@@@@ho@@@@@@@sd@@@@@@@@@@@@o
    &nbsp;                     oy`       `N@@@@@@@@@@@@@@@@@@@@@@yo/d@@@@hh@d++oy@@@@@@@s
    &nbsp;                    +h       `+d@@@@@@@@@@@@@@@@@@@@@@@@s o@@@@@@@N.```/y@@@yy@s
    &nbsp;                   -@`       oN@@@@@@@@@@@@@@@@@@@@@@@@@@Ny`oNNNNd..``.`.N@@/`d@:
    &nbsp;                   h/        dN@@@@@@@@@@@@@@@@@@@@@@@@@@@@@d...` ```````.+d.`.h@
    &nbsp;                  .N          od@@@@@hhhd@@@@@@@@@@@@@@@@@@@@@@Ns ```.````.dd.`/@:
    &nbsp;                  /@           -yyyys   -yd@@@@@@@@@@@@@@@@@@dh+/ `````````````/do
    &nbsp;                  o@+                     :@@@@@@@@@@@@@@@@dh-.   ``````````````dy
    &nbsp;                  +@@s/                   :@@@@@@@@@@@@@@@@:-     ``````````````ys
    &nbsp;                  .@@@@                   .+s@@@@@@@@@@@@@N       ``````````````d:
    &nbsp;                   d@@y                     .@@@@@@@@@@@@@@       `````````````:@
    &nbsp;                   -@@@`                   yh@@@@@@@@@@@@@y /hhh.`````````````.d/
    &nbsp;                    o@N+                   .-N@@@@@@@@@@y.` h@@@````.`````````sy
    &nbsp;                     s@/                     d@@@@@@@@N@/  `dy ``````````````oy
    &nbsp;                      +N:                    +yN@@@@Nd:         ```````````.ys
    &nbsp;                       -d/                     y@oo+:`        ````````````/d:
    &nbsp;                         +h:                   `-            ```````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-.-:::::::://oy+oosso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame115 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:osssoo:` `:/ohho++yd@N@@ho:`
    &nbsp;                                :oso:`   .+: .@Ns-+@@@@@@@@@@@@@@@s:
    &nbsp;                             -ss/`     `/+Ns@@@@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /y+`        :/+Nyyy.s@@@@@/:@dh@NodhNN@@@@@@@+`
    &nbsp;                         /h/          h@N/-    -::oh/+hN@hN@@@o:N@@@@@@@@N+
    &nbsp;                       .h+         `-s@@@@@@@o:::-:::::::@@@@@@N@@@@@@@@@@@@-
    &nbsp;                      /h.        .+d@@@@@@@@@@@@@N@@@@@Noy@@@@@@hh@@@@@@@@@@@o
    &nbsp;                     oy`         d@@@@@@@@@@@@@@@@@@@@@@yy/o@@@@@y@N++oy@@@@@@s
    &nbsp;                    +h         /y@@@@@@@@@@@@@@@@@@@@@@@@@.`N@@@@@@@/```/y@@NoNs
    &nbsp;                   -@`        /@@@@@@@@@@@@@@@@@@@@@@@@@@@@N:.@NNNN:.``.`.N@N.+@:
    &nbsp;                   h/         s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/... ```````.oy.`o@
    &nbsp;                  .N`          :h@@@@@@hhhN@@@@@@@@@@@@@@@@@@@@@NN`````````-@y`.N:
    &nbsp;                  /@.            syyyy-   +y@@@@@@@@@@@@@@@@@@Ndyo.````````````.ho
    &nbsp;                  o@y-                      s@@@@@@@@@@@@@@@Nds-. ``````````````yy
    &nbsp;                  +@@@o-                    s@@@@@@@@@@@@@@@h-.   ``````````````ss
    &nbsp;                  .@@@@y                    :+h@@@@@@@@@@@@@s     ``````````````d:
    &nbsp;                   d@@@/                      o@@@@@@@@@@@@@+    ``````````````:@
    &nbsp;                   -@@@s                    :h@@@@@@@@@@@@@@- yhh+````````````.d/
    &nbsp;                    o@@@.                   `.+@@@@@@@@@@@:. -@@@:```.````````sy
    &nbsp;                     s@d`                     -@@@@@@@@@@d   o@.`````````````oy
    &nbsp;                      +@s                     `yd@@@@@dy       ````````````.ys
    &nbsp;                       -d+                      -@h+++.`       ```````````/d:
    &nbsp;                         +h:                    `-`          ```````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-`.:::::::://+ysoosso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame116 = () => (
  <Ascii>
    &nbsp;                                         .-/+oooooooooo+/:.
    &nbsp;                                   `:oyysos/.  .:oody/osh@NN@ho:`
    &nbsp;                                :oso:.    -o- -NNs.+N@@@@@@@@@@@@@s:
    &nbsp;                             -sy/`      ./+NsN@@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /y+`         :/+Nyyy-/@@@@@o.N@h@NodhNN@@@@@@+`
    &nbsp;                         /h/           s@@+:    .::/ho/hNNhN@@@s:N@@@@@@@N+
    &nbsp;                       .h+           -+@@@@@@@d:::::::::::y@@@@@N@@@@@@@@@@@-
    &nbsp;                      /h.         `+y@@@@@@@@@@@@@@@@@@@@yoN@@@@@dy@@@@@@@@@@o
    &nbsp;                     oy`          y@@@@@@@@@@@@@@@@@@@@@@dyo/@@@@NyNNoooh@@@@@s
    &nbsp;                    +h          :o@@@@@@@@@@@@@@@@@@@@@@@@@y o@@@@@@@o```/d@@hds
    &nbsp;                   -@`         .N@@@@@@@@@@@@@@@@@@@@@@@@@@@Nh.oNNN@s.`.``-@@y-N:
    &nbsp;                   h/          /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@d....```````.y/./@
    &nbsp;                  .N`           `h@@@@@@hhhh@@@@@@@@@@@@@@@@@@@@@@N+````````/@/`@:
    &nbsp;                  /@s             /yyyyy    yy@@@@@@@@@@@@@@@@@@@do/````````````ho
    &nbsp;                  o@N/.                       N@@@@@@@@@@@@@@@@d:- `````````````oy
    &nbsp;                  +@@@yo.                     N@@@@@@@@@@@@@@@+:`` `````````````ss
    &nbsp;                  .@@@@@o                     ++N@@@@@@@@@@@@@.  ` `````````````d:
    &nbsp;                   d@@@@-                       d@@@@@@@@@@@@N`  ``````````````:@
    &nbsp;                   -@@@@:                     ohN@@@@@@@@@@@@d /hdh```````````.d/
    &nbsp;                    o@@Nh                     ..d@@@@@@@@@@h.` d@@s``.````````sy
    &nbsp;                     s@@:                       h@@@@@@@@N@/  .@+````````````oy
    &nbsp;                      +@N`                      +hN@@@@@d-     ````````````.ys
    &nbsp;                       -@y                        dN+++-.      ```````````/d:
    &nbsp;                         +h:                      ..        ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-``-::::::://+oyoosso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame117 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooosoooo+/:.
    &nbsp;                                   `:oyhyooo-   -:ssds+oy@NN@ho:`
    &nbsp;                                :oso:-     :o- :@No`o@@@@@@@@@@@@@s:
    &nbsp;                             -sh+`       -:+NsN@@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /y+.          ://@hyy:.@@@@@h.@NhNNoddN@@@@@@+`
    &nbsp;                         /h/            /@@s:`   `:::hy/s@@h@@@@y/N@@@@@@N+
    &nbsp;                       .h+            -:N@@@@@@@/::::::::::+@@@@@N@@@@@@@@@@-
    &nbsp;                      /h.           /o@@@@@@@@@@@@@@@@@@@@@od@@@@@NyN@@@@@@@@o
    &nbsp;                     oy`           /@@@@@@@@@@@@@@@@@@@@@@@yy/y@@@@y@@oood@@@@s
    &nbsp;                    +h           -+@@@@@@@@@@@@@@@@@@@@@@@@@@..@@@@@@@y``./@@Nhs
    &nbsp;                   -@`           d@@@@@@@@@@@@@@@@@@@@@@@@@@@NN:-NN@@d-````/@@-@:
    &nbsp;                   h/           .@N@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/---```````.d.:@
    &nbsp;                  .@:             oh@@@@@Nhhhd@@@@@@@@@@@@@@@@@@@@@Nd````````oh`d:
    &nbsp;                  /@@.              yyyyy/   -yh@@@@@@@@@@@@@@@@@Ndyo```````````yo
    &nbsp;                  o@@y/                        -@@@@@@@@@@@@@@@Nds-.````````````oy
    &nbsp;                  +@@@@o+`                     -@@@@@@@@@@@@@@@@:- `````````````ss
    &nbsp;                  .@@@@@@/                     `+s@@@@@@@@@@@@@y ```````````````d:
    &nbsp;                   d@@@@d.                       .@@@@@@@@@@@@@o ```.``````````:@
    &nbsp;                   -@@@@@.                     `yh@@@@@@@@@@@@@:`hdd-`````````.d/
    &nbsp;                    o@@@Ns                      .:@@@@@@@@@@@:. +@@d``.```````sy
    &nbsp;                     s@@d`                       .@@@@@@@@@@h   hh```````````oy
    &nbsp;                      +@@o                       `hd@@@@@ds    ````````````.ys
    &nbsp;                       -@N.                        +@s++/.`   ````````````/d:
    &nbsp;                         +d:                       `-       ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-` .:::::::///+ysosso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame118 = () => (
  <Ascii>
    &nbsp;                                         .-/+ooooosoooo+/:.
    &nbsp;                                   `:oyhhsoo/`   :+shy+osdNN@ho:`
    &nbsp;                                :oso:-`     /o.`/@N+`s@@@@@@@@@@@@s:
    &nbsp;                             -sdo`        -:/NsN@@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /h+.           -//d@yy+`N@@@@d.dNhNNs@dN@@@@@+`
    &nbsp;                         /h/             -@@d:.   `-::sd+od@h@@@@y+N@@@@@N+
    &nbsp;                       .h+             .-d@@@@@@@y:::::::::::N@@@@NN@@@@@@@@-
    &nbsp;                      /h.            :+@@@@@@@@@@@@@@@@@@@@@ys@@@@@NyN@@@@@@@o
    &nbsp;                     oy`            `N@@@@@@@@@@@@@@@@@@@@@@dyo+@@@@h@@soo@@@@s
    &nbsp;                    +h            `+h@@@@@@@@@@@@@@@@@@@@@@@@@y h@@@@@@y``-o@@@s
    &nbsp;                   -@`            o@@@@@@@@@@@@@@@@@@@@@@@@@@@@Nh.h@@@@-````y@sd:
    &nbsp;                   h/             y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@h---``````./o:@
    &nbsp;                  .@s`             .h@@@@@@dhhhN@@@@@@@@@@@@@@@@@@@@@N.```````d/d:
    &nbsp;                  /@@s               /yyyyy.   +y@@@@@@@@@@@@@@@@@@@ho-`````````so
    &nbsp;                  o@@@+:                         o@@@@@@@@@@@@@@@@d:-```````````oy
    &nbsp;                  +@@@@N++.                      o@@@@@@@@@@@@@@@o:`.```````````ss
    &nbsp;                  .@@@@@@@/                      -+h@@@@@@@@@@@@@.``````````````d:
    &nbsp;                   d@@@@@h.                        o@@@@@@@@@@@@N``````````````:@
    &nbsp;                   -@@@@@N`                      /h@@@@@@@@@@@@@h sdd/````````.d/
    &nbsp;                    o@@@@@+                      `.y@@@@@@@@@@y...N@N.````````sy
    &nbsp;                     s@@@o                         s@@@@@@@@N@-``+d.`````````oy
    &nbsp;                      +@@N.                        +h@@@@@@d.  ````````````.ys
    &nbsp;                       -@@o                         `Nd+++-.  ````````````/d:
    &nbsp;                         +@/                         -`     ````````````:yo`
    &nbsp;                          `+y/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-                   ```````-+ss/`
    &nbsp;                                   ./ooo+:-` `-::::::///+syosso/.
    &nbsp;                                        `-:+osyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame119 = () => (
  <Ascii>
    &nbsp;                                         .-/+osoooooooo+/:.
    &nbsp;                                   `:oyhdso++.   `:sshs+shNN@ho:`
    &nbsp;                                :oso:..     `+o.`o@@/.h@@@@@@@@@@@s:
    &nbsp;                             -sdy.         --/@sN@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /ho.`           -//yNyyo`h@@@@@-h@hNNs@@N@@@@+`
    &nbsp;                         /h/              `@@@/-   `-::+ds+d@dd@@@so@@@@@N+
    &nbsp;                       .h+              `-o@@@@@@@N::::-::::::d@@@@NN@@@@@@@-
    &nbsp;                      /h.             .+h@@@@@@@@@@@@@@@@@@@@dsN@@@@@hN@@@@@@o
    &nbsp;                     oy`              y@@@@@@@@@@@@@@@@@@@@@@Nyy/@@@@hd@sos@@@s
    &nbsp;                    +d              /o@@@@@@@@@@@@@@@@@@@@@@@@@N`/@@@@@@y``:h@Ns
    &nbsp;                   -@`             `N@@@@@@@@@@@@@@@@@@@@@@@@@@@NN-+@@@N-```.@@d:
    &nbsp;                   h/              :@N@@@@@@@@@@@@@@@@@@@@@@@@@@@@@N---.`````.y/@
    &nbsp;                  .@@.               oh@@@@@@hhhh@@@@@@@@@@@@@@@@@@@@@N/``````/yd:
    &nbsp;                  /@@N-                yyyyyy    syN@@@@@@@@@@@@@@@@Ndo:````````so
    &nbsp;                  o@@@d/:                          d@@@@@@@@@@@@@@Ndo:``````````oy
    &nbsp;                  +@@@@@@++.                       d@@@@@@@@@@@@@@d:-```````````ss
    &nbsp;                  .@@@@@@@@+                       /+@@@@@@@@@@@@@y`````````````d:
    &nbsp;                   d@@@@@@y-                         d@@@@@@@@@@@@+````````````:@
    &nbsp;                   -@@@@@@@                        shN@@@@@@@@@@@@./ddo```````.d/
    &nbsp;                    oN@@@@N/                       .-N@@@@@@@@@N--`d@N-```````sy
    &nbsp;                     s@@@@:                         `@@@@@@@@@@s``:d:````````oy
    &nbsp;                      +@@@h                         `yd@@@@Nd+  ```````````.ys
    &nbsp;                       -@@@`                          s@o++:. ````````````/d:
    &nbsp;                         +Ny                          ..     ```````````:yo`
    &nbsp;                          `+h/                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-`                  ```````-+ss/`
    &nbsp;                                   ./ooo+:-` `.::::::///+oyssso/.
    &nbsp;                                        `-:+ooyhhhhhhyso+/-`
  </Ascii>
);

const EarthFrame120 = () => (
  <Ascii>
    &nbsp;                                         .-/+osoooooooo+/:.
    &nbsp;                                   `:osddho++/    .:ysyosyNN@ho:`
    &nbsp;                                :sso:`.      `+o``s@@:.d@@@@@@@@@@s:
    &nbsp;                             -sdd:          :-:@s@@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /hs..            .//s@yys.s@@@@N:y@dN@y@@N@@@+`
    &nbsp;                         /h/                y@@s:   `.::/dy+h@dd@@@oy@@@@N+
    &nbsp;                       .h+                -:@@@@@@@@o:::-::-:::y@@@@N@@@@@@@-
    &nbsp;                      /h.               +o@@@@@@@@@@@@@@@@@@@@Nsd@@@@@hN@@@@@o
    &nbsp;                     oy`               -@@@@@@@@@@@@@@@@@@@@@@@hh+h@@@hd@ssh@@s
    &nbsp;                    +@               .+d@@@@@@@@@@@@@@@@@@@@@@@@@+.N@@@@@s``+N@s
    &nbsp;                   -@.               y@@@@@@@@@@@@@@@@@@@@@@@@@@@@No:N@@N:```+@N:
    &nbsp;                   h/                h@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+--..````/s@
    &nbsp;                  .@@+.               .hd@@@@@Nhhhd@@@@@@@@@@@@@@@@@@@@No``````h@:
    &nbsp;                  /@@@h.                -yyyyy+   .yh@@@@@@@@@@@@@@@@N@s/```````so
    &nbsp;                  o@@@@h/:                          `@@@@@@@@@@@@@@@@h:.````````oy
    &nbsp;                  +@@@@@@@++-                       .@@@@@@@@@@@@@@@/:``````````ss
    &nbsp;                  .@@@@@@@@@s                       `+o@@@@@@@@@@@@N````````````d:
    &nbsp;                   d@@@@@@@h-                         .@@@@@@@@@@@@d```````````:@
    &nbsp;                   -NN@@@@@@`                       .hd@@@@@@@@@@@@o.ddy``````.d/
    &nbsp;                    ohN@@@NN+                       `.o@@@@@@@@@@o-.s@N:``````sy
    &nbsp;                     sN@@@N.                          o@@@@@@@@@d.`.d/```````oy
    &nbsp;                      +N@@@+                          +h@@@@@dy````````````.ys
    &nbsp;                       -d@@s                           -@y++/.````````````/d:
    &nbsp;                         +N@.                          `-    ```````````:yo`
    &nbsp;                          `+do                              ``````````/yo`
    &nbsp;                             :ss:                         `````````:sy/
    &nbsp;                               `/ss+-`                  ```````-+ss/`
    &nbsp;                                   ./oso+:-`  `-:::::///++sysso/.
    &nbsp;                                        `-:+ooshhhhhhyso+/-`
  </Ascii>
);

const EarthFrame121 = () => (
  <Ascii>
    &nbsp;                                         .-/+ossooooooo+/:.
    &nbsp;                                   `:oshdhs+++.    -+hsyoydN@ho:`
    &nbsp;                                :syo:`..      `+o``h@d--N@@@@@@@@@s:
    &nbsp;                             -sd@o`          :-:@s@@@@@@@@@@@@@@@@@@Ny:
    &nbsp;                           /hy:``            `//+@hyy-/@@@@N/y@dNdh@N@@@+`
    &nbsp;                         /h/                 /@@d:`  ``:::yh+y@dd@@Noh@@@N+
    &nbsp;                       .h+                 .:h@@@@@@@d:::--:-:::s@@@@@@@@@@@-
    &nbsp;                      /h.                -od@@@@@@@@@@@@@@@@@@@@yh@@@@@h@@@@@o
    &nbsp;                     oy`                 d@@@@@@@@@@@@@@@@@@@@@@dyss@@@h@NssN@s
    &nbsp;                    +d.                +s@@@@@@@@@@@@@@@@@@@@@@@@@h`d@@@@@+`-h@s
    &nbsp;                   -@.                .@@@@@@@@@@@@@@@@@@@@@@@@@@@@Nh-@@@N:``.@@:
    &nbsp;                   h/                 :dN@@@@@@@@@@@@@@@@@@@@@@@@@@@@@y--.````.y@
    &nbsp;                  .@@N.`                +hN@@@@@dhhh@@@@@@@@@@@@@@@@@@@@Ns`````+N:
    &nbsp;                  /N@@@s`                 oyyyyy-   /yd@@@@@@@@@@@@@@@@@y+``````so
    &nbsp;                  o@@@@@s/:                           +@@@@@@@@@@@@@@Nd:-```````oy
    &nbsp;                  +@@@@@@@@++:                        +@@@@@@@@@@@@@@y:`````````ss
    &nbsp;                  .@@@@@@@@@@d                        -+h@@@@@@@@@@@@/``````````d:
    &nbsp;                   dN@@@@@@@d:                          o@@@@@@@@@@@@.`````````:@
    &nbsp;                   -@d@@@@@@N`                        +h@@@@@@@@@@@@h`hdy`````.d/
    &nbsp;                    oyh@@@@NNo                        .-@@@@@@@@@@d-.+@N/`````sy
    &nbsp;                     sdN@@@@`                          `N@@@@@@@N@:`.h+``````oy
    &nbsp;                      +@N@@N:                          .y@@@@@@d-``````````.ys
    &nbsp;                       -d@@N:                            @d+++-.``````````/d:
    &nbsp;                         +@N+                            -`  ```````````:yo`
    &nbsp;                          `+@y`                             ``````````/yo`
    &nbsp;                             :ys:                         `````````:sy/
    &nbsp;                               `/ss+-`                  ```````-+ss/`
    &nbsp;                                   ./oso+:-`  `.:::::///++oysso/.
    &nbsp;                                        `-:+ooshhhhhhyso+/-`
  </Ascii>
);

const frames = [
  <EarthFrame1 />,
  <EarthFrame2 />,
  <EarthFrame3 />,
  <EarthFrame4 />,
  <EarthFrame5 />,
  <EarthFrame5 />,
  <EarthFrame4 />,
  <EarthFrame3 />,
  <EarthFrame2 />,
  <EarthFrame1 />,
]

const Earth = () => {
  const [frameIdx, setFrameIdx] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setFrameIdx((frameIdx + 1) % frames.length)
    }, 500)
  }, [frameIdx])

  return (
    <>
      {frames[frameIdx]}
      <div>{frameIdx}</div>
    </>
  )
}

export default Earth;
