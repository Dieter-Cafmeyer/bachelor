'use strict';

import React, {Component} from 'react';

import {Question1} from '../questions/';

export default class Quiz extends Component {
  constructor() {
    super();
    this.name = 'Dieter';
  }

  render() {
    return (
      <div>
        <Question1 />
      </div>
    );
  }
}
