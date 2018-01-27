'use strict';

import React, {Component} from 'react';

import {Start, Question1, Question2 } from './';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      questionNumber: 0,
      gender: '',
      q2answer: '',
      q3answer: '',
      q4answer: ''
    };
  }

  questionNumber(val) {
    let questionNumber = this.state.questionNumber;
    if(val === 'next') {
      questionNumber++;
      this.setState({questionNumber});
    }else if(val === 'prev' && questionNumber > 0) {
      questionNumber--;
      this.setState({questionNumber});
    }
  }

  renderQuestion() {
    if(this.state.questionNumber === 0){
      return <Start />;
    }else if (this.state.questionNumber === 1){
      return <Question1 />;
    }else if (this.state.questionNumber === 2){
      return <Question2 gender={this.state.gender}/>;
    }
  }

  render() {
    return (
      <div className='quiz_content'>
        {this.renderQuestion()}

        <div className='qbtn nextbtn' onClick={() => this.questionNumber('next')}>Next</div>
        <div className='qbtn prevbtn' onClick={() => this.questionNumber('prev')}>Previous</div>
      </div>
    );
  }
}
