'use strict';

import React, {Component} from 'react';

import {Age1, Age2, Age3, Age4} from './ages/';
import {Gender, Age} from './questions/';

let questionNumber = 0;

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      questionNumber: 0,
      gender: '',
      age: ''
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

  renderQuestion() {
    if(this.state.questionNumber === 0){
      return <Gender setGender={gender => this.setGender(gender)} />;
    }else if (this.state.questionNumber === 1){
      return <Age {...this.state} setAge={age => this.setAge(age)}/>;
    }else if (this.state.questionNumber === 2){
      return this.renderAge();
    }
  }

  renderAge() {
    if(this.state.age === '1') {
      return <Age1 {...this.state} />;
    }else if(this.state.age === '2') {
      return <Age2 {...this.state} />;
    }else if(this.state.age === '3') {
      return <Age3 {...this.state} />;
    }else if(this.state.age === '4') {
      return <Age4 {...this.state} />;
    }
  }

  render() {
    return (
      <div className='quiz_content'>
        {this.renderQuestion()}
      </div>
    );
  }
}
