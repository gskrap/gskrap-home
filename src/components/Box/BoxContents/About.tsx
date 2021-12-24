import React, { useContext } from 'react';
import ThemeAscii from '../ThemeAscii';
import { AppContext } from '../../App';

const About = () => {
  const { variant } = useContext(AppContext);

  return (
    <>
      Engineer @ Attentive<br /><br />
      <a href={'https://attentivemobile.com'} target='_blank'>attentivemobile.com</a><br />
      <ThemeAscii />
    </>
  );
};

export default About;
