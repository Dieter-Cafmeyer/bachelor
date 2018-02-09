'use strict';

import React, {Component} from 'react';

export default class Kids extends Component {
  constructor() {
    super();
  }

  wantKids(value) {
    this.props.wantKids(value);
  }

  render() {
    return (
      <div className='qcontent'>
        <h1 className='question'>Overweeg je ooit (nog) kinderen?</h1>
        <div className='options1'>

          <div className='q1_block option' ref='v' onClick={() => this.wantKids('y')}>
            <div><img src='../assets/images/kindjes.png' /></div>
            <h1 className='colorBlue'>Ja</h1>
          </div>

          <div className='q1_block option' ref='m' onClick={() => this.wantKids('n')}>
            <div><img src='../assets/images/geenkindjes.png' /></div>
            <h1 className='colorYellow'>Nee</h1>
          </div>

        </div>
      </div>
    );
  }
}
