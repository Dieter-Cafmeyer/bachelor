'use strict';

import React, {Component} from 'react';

export default class Gender extends Component {
  constructor() {
    super();
  }

  setGender(value) {
    this.props.setGender(value);
  }

  render() {

    return (
      <div className='qcontent'>
        <h1 className='question'>Ben je een man of een vrouw?</h1>
        <div className='options1'>

          <div className='q1_block option' ref='v' onClick={() => this.setGender('v')}>
            <div><img src='../assets/images/vrouw.png' /></div>
            <h1 className='colorBlue'>Vrouw</h1>
          </div>

          <div className='q1_block option' ref='m' onClick={() => this.setGender('m')}>
            <div><img src='../assets/images/man.png' /></div>
            <h1 className='colorYellow'>Man</h1>
          </div>

        </div>
      </div>
    );
  }
}
