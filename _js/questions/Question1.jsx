'use strict';

import React, {Component} from 'react';

export default class Question1 extends Component {
  constructor() {
    super();
    this.name = 'Question1';
  }

  render() {
    return (
      <h1>This is {this.name} !!</h1>
    );
  }
}
