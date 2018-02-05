'use strict';

import React, {Component} from 'react';

import {Answer1} from './answers/';

export default class Info extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderAnswer() {
    if(this.props.questionNumber === 2){
      return <Answer1 {...this.props}/>;
    }
  }

  render() {
    console.log(this.props);

    return (
      <div>
        {this.renderAnswer()}
      </div>
    );
  }
}
