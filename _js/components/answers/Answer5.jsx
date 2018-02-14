'use strict';

import React, {Component} from 'react';

export default class Answer5 extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if(this.props.kids === 'y') {
      document.querySelector('.first').style.display = 'block';
    }else if (this.props.kids === 'n') {
      document.querySelector('.second').style.display = 'block';
    }
  }

  render() {
    return (
      <div>

        <div className='first hidden'>
        <h1>U wilt nog kinderen? Geen probleem!</h1>
        <div className='leftAnswer'>
          <img src='../assets/images/answer2/likeleft.png' />
          <div>
            <h2>Voor jou geen probleem!</h2>
            <p>Bij mannen is er meestal geen probleem met de vruchtbaarheid onder de 45 jaar! Slaagkansen zakken pas echt na 50 jaar.</p>
          </div>
        </div>

        </div>

        <div className='second hidden'>
        <h1>Geen kinderen voor jou? Geen probleem!</h1>
        <div className='leftAnswer'>
          <img src='../assets/images/answer2/clockleft.png' />
          <div>
            <h2>Stel het niet te ver uit</h2>
            <p>Vanaf je 45 jaar neemt je vruchtbaarheid een knik. De slaagkansen dalen geleidelijk aan, en vanaf je 50 zakt het steeds verder.
De boodschap? Stel het niet te lang uit!</p>
          </div>
        </div>

        <div className='leftAnswer'>
          <div>
            <h2>Help een andere kinderwens</h2>
            <p>Er zijn veel andere koppels die wel hopen ooit kinderen te kunnen krijgen, maar door ziekte of onvruchtbaarheid hier niet zelf aan kunnen beginnen. Jij kan hen helpen doormiddel van <span>zaadceldonatie</span>.</p>
          </div>
          <img src='../assets/images/answer2/kindrechts.png' />
        </div>

        </div>

      </div>
    );
  }
}
