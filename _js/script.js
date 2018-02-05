'use strict';

import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';

let quiz = document.querySelector('.quiz');
let quizInfo = document.querySelector('.quizInfo');
let allInfo = document.querySelector('.allInfo');

const init = () => {

  choice();

  quiz.style.display = 'none';

  ReactDOM.render(
    <App />,
    quiz
  );

};


function choice () {
  quizInfo.onclick = function(){
    document.querySelector('.choice').style.display = 'none';
    quiz.style.display = 'flex';
  };

  allInfo.onclick = function(){
    window.location = '/index.php?page=diepgaand';
  };
}

init();

