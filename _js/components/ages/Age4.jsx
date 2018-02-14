'use strict';

import React, {Component} from 'react';
import {Kids} from '../questions/';
import {Answer3} from '../answers/';

var question = 1;

export default class Age4 extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      kids: ''
    };
  }

  wantKids(kids) {
    question++;
    this.setState({kids});
  }


  renderQuestion() {
    if(question === 1) {
      return <Kids wantKids={kids => this.wantKids(kids)}/>;
    }else if(question === 2) {
      return <Answer3 {...this.state} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderQuestion()}
      </div>
    );
  }
}
