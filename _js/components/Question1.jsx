'use strict';

import React, {Component} from 'react';

export default class Question1 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      gender: ''
    };
  }

  componentDidMount() {
  }


  setGender(value) {
    console.log(value);
  }

  render() {

    return (
      <div className='qcontent'>
        <h1 className='question'>Vraag 1: Lorem ipsum dolor set</h1>
        <div className='options'>
          <div className='questionOption blue' onClick={() => this.setGender('m')}>Man</div>
          <div className='questionOption rosegold'onClick={() => this.setGender('v')}>Vrouw</div>
        </div>
      </div>
    );
  }
}
