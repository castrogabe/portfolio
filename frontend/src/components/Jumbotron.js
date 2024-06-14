import React from 'react';
import Typewriter from 'typewriter-effect';

const Jumbotron = ({ text }) => (
  <div className='jumbotron jumbotron-fluid'>
    <div className='typewriter-container'>
      <Typewriter
        options={{
          strings: text,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  </div>
);

export default Jumbotron;
