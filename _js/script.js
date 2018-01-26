'use strict';

import ReactDOM from 'react-dom';
import React from 'react';

import Quiz from './components/Quiz';

const init = () => {

  ReactDOM.render(
    <Quiz />,
    document.querySelector('.quiz')
  );

};

init();
