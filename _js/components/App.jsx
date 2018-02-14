'use strict';

import React, {Component} from 'react';

import {Age1, Age2, Age3, Age4} from './ages/';
import {Gender, Age, Kids} from './questions/';
import {Answer5} from './answers/';

let questionNumber = 0;

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      questionNumber: 0,
      gender: '',
      age: '',
      kids: ''
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

  wantKids(kids) {
    questionNumber++;
    this.setState({kids, questionNumber});
  }

  renderQuestion() {
    if(this.state.questionNumber === 0){
      return <Gender setGender={gender => this.setGender(gender)} />;
    }else if (this.state.questionNumber === 1){
      return <Age {...this.state} setAge={age => this.setAge(age)}/>;
    }else if (this.state.questionNumber === 2 && this.state.gender === 'v'){
      return this.renderAge();
    }else if (this.state.questionNumber === 2 && this.state.gender === 'm'){
      return this.renderMale();
    }else if (this.state.questionNumber === 3){
      return <Answer5 {...this.state} />;
    }
  }

  renderMale() {
    if (this.state.questionNumber === 2){
      return <Kids wantKids={kids => this.wantKids(kids)}/>;
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

    console.log(this.state);
    return (
      <div className='quiz_content'>
        {this.renderQuestion()}
      </div>
    );
  }
}
