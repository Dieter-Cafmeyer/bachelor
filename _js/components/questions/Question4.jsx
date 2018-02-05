'use strict';

import React, {Component} from 'react';

export default class Question4 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='qcontent'>
        <h1 className='question'>Overweegt u ooit (nog) kinderen?</h1>
        <div className='options'>

          <div className='q1_block option' ref='v' onClick={() => this.wantKids('y')}>
            <div><img src='../assets/images/vrouw.png' /></div>
            <h1 className='colorBlue'>Ja</h1>
          </div>

          <div className='q1_block option' ref='m' onClick={() => this.wantKids('n')}>
            <div><img src='../assets/images/man.png' /></div>
            <h1 className='colorYellow'>Nee</h1>
          </div>

        </div>
      </div>
    );
  }
}
