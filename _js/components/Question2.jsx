'use strict';

import React, {Component} from 'react';

export default class Question2 extends Component {
  constructor() {
    super();
    this.name = 'Question2';
  }

  render() {
    return (
      <h1>This is {this.name} !!</h1>
    );
  }
}
