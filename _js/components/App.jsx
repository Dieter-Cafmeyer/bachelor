'use strict';

import React, {Component} from 'react';

import {Question1, Question2, Question3, Question4, Result} from './questions/';
import {Info} from './';

let questionNumber = 0;

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      questionNumber: 0,
      gender: '',
      age: '',
      wantKids: '',
      q4answer: ''
    };
  }

  setGender(gender) {
    questionNumber++;
    this.setState({gender, questionNumber});
  }

  setAge(age) {
    questionNumber++;
    this.setState({age, questionNumber});
  }

  wantKids(wantKids) {
    questionNumber++;
    this.setState({wantKids, questionNumber});
  }

  renderQuestion() {
    if(this.state.questionNumber === 0){
      return <Question1 setGender={gender => this.setGender(gender)} />;
    }else if (this.state.questionNumber === 1){
      return <Question2 {...this.state} setAge={age => this.setAge(age)}/>;
    }else if (this.state.questionNumber === 2){
      return <Question3 {...this.state} wantKids={wantKids => this.wantKids(wantKids)}/>;
    }else if (this.state.questionNumber === 3){
      return <Question4 {...this.state}/>;
    }
  }

  render() {

    return (
      <div className='quiz_content'>
        {this.renderQuestion()}
        <Info {...this.state} />
      </div>
    );
  }
}
