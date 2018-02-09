'use strict';

import React, {Component} from 'react';

export default class AgeKids extends Component {
  constructor() {
    super();
  }

  setAge(value) {
    this.props.ageKids(value);
  }

  render() {
    return (
      <div className='qcontent'>
        <h1 className='question'>Wanneer denk je dat dit zal zijn?</h1>
        <div className='options'>
          <div className='q2_block q2bg2' ref='1' onClick={() => this.setAge('1')}><span>20 - 25 jaar</span></div>
          <div className='q2_block q2bg3' ref='2' onClick={() => this.setAge('2')}><span>25 - 30 jaar</span></div>
          <div className='q2_block q2bg4' ref='3' onClick={() => this.setAge('3')}><span>&gt; 30 jaar</span></div>
        </div>
      </div>
    );
  }
}
