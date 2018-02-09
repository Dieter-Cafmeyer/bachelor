'use strict';

import React, {Component} from 'react';

export default class Age extends Component {
  constructor() {
    super();
  }

  setAge(value) {
    this.props.setAge(value);
  }

  render() {
    return (
      <div className='qcontent'>
        <h1 className='question'>Wat is uw leeftijd?</h1>
        <div className='options'>
          <div className='q2_block q2bg1' ref='m' onClick={() => this.setAge('1')}><span>&lt; 20 jaar</span></div>
          <div className='q2_block q2bg2' ref='v' onClick={() => this.setAge('2')}><span>20 - 25 jaar</span></div>
          <div className='q2_block q2bg3' ref='v' onClick={() => this.setAge('3')}><span>25 - 30 jaar</span></div>
          <div className='q2_block q2bg4' ref='v' onClick={() => this.setAge('4')}><span>&gt; 30 jaar</span></div>
        </div>
      </div>
    );
  }
}
