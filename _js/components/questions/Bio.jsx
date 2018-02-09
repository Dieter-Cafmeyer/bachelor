'use strict';

import React, {Component} from 'react';

export default class Bio extends Component {
  constructor() {
    super();
  }

  bio(value) {
    this.props.bio(value);
  }

  render() {
    return (
      <div className='qcontent'>
        <h1 className='question'>Ken je de biologische klok?</h1>
        <div className='options1'>

          <div className='q1_block option' ref='v' onClick={() => this.bio('y')}>
            <div><img src='../assets/images/jabio.png' /></div>
            <h1 className='colorBlue'>Ja</h1>
          </div>

          <div className='q1_block option' ref='m' onClick={() => this.bio('n')}>
            <div><img src='../assets/images/neebio.png' /></div>
            <h1 className='colorYellow'>Nee</h1>
          </div>

        </div>
      </div>
    );
  }
}
