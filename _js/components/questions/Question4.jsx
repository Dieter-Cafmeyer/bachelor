'use strict';

import React, {Component} from 'react';

export default class Question4 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='qcontent'>
        <h1 className='question'>Wanneer denkt u aan kinderen te zullen beginnen?</h1>
        <div className='options'>
          <div className='q2_block q2bg2' ref='v' onClick={() => this.setAge('2')}><span>20 - 25 jaar</span></div>
          <div className='q2_block q2bg3' ref='v' onClick={() => this.setAge('3')}><span>25 - 30 jaar</span></div>
          <div className='q2_block q2bg4' ref='v' onClick={() => this.setAge('4')}><span>&gt; 30 jaar</span></div>
        </div>
      </div>
    );
  }
}
