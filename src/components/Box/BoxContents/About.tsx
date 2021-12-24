import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Ascii from '../../Ascii/Ascii';

const About = () => {
  const { variant } = useContext(AppContext);

  return (
    <>
      Engineer @ Attentive<br /><br />
      <a href={'https://attentivemobile.com'} target='_blank'>attentivemobile.com</a><br />
      <Ascii />
    </>
  );
};

export default About;
