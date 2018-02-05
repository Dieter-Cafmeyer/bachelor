'use strict';

import React, {Component} from 'react';

export default class Result extends Component {
  constructor() {
    super();
  }

  renderTitle() {
    if(this.props.age === '1'){
      return <h1>25-30 jaar is de perfecte periode!</h1>;
    }else if (this.props.age === '2'){
      return <h1>25-30 jaar is de perfecte periode!</h1>;
    }else if (this.props.age === '3'){
      return <h1>25-30 jaar is de perfecte periode!</h1>;
    }else if (this.props.age === '4'){
      return <h1>25-30 jaar is de perfecte periode!</h1>;
    }
  }

  render() {
    return (
      <div className='result'>
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
