'use strict';

import React, {Component} from 'react';

export default class Info extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div className='info' >
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
