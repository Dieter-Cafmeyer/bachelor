'use strict';

import React, {Component} from 'react';

export default class Answer2 extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if(this.props.ageKids === '1') {
      document.querySelector('.first').style.display = 'block';
    }else if (this.props.ageKids === '2') {
      document.querySelector('.second').style.display = 'block';
    }else {
      document.querySelector('.third').style.display = 'block';
    }
  }

  render() {
    return (
      <div>
      <div className='hidden first'>
        <h1>Je zit nog net voor je piek</h1>
        <div className='leftAnswer'>
          <img src='../assets/images/answer2/lefteicel.png' />
          <div>
            <h2>Onvruchtbaar?</h2>
            <p>Dit wil niet zeggen dat je onvruchtbaar bent. Dit wil enkel zeggen dat jouw eicellen nog niet op hun méést vruchtbare moment zitten.</p>
          </div>
        </div>

        <div className='leftAnswer'>
          <div>
            <h2>Genieten</h2>
            <p>Een van de grootste redenen waarom mensen later aan kinderen beginnen is omdat ze zichzelf in de eerste plaats kiezen.</p>
          </div>
          <img src='../assets/images/answer2/rightenjoy.png' />
        </div>
      </div>

      <div className='hidden second'>
        <h1>25-30 jaar is de perfecte periode!</h1>
        <div className='leftAnswer'>
          <img src='../assets/images/answer2/likeleft.png' />
          <div>
            <h2>De grootste kans op slagen!</h2>
            <p>Tussen de 25 en 30 jaar is het kans op een natuurlijke zwangerschap per cyclus tot wel 22%! Dit is de piek van je vruchtbaarheid.</p>
          </div>
        </div>

        <div className='leftAnswer'>
          <div>
            <h2>Stel het niet te ver uit</h2>
            <p>Vanaf je 30 jaar neemt je vruchtbaarheid een knik. De slaagkansen dalen geleidelijk aan, en vanaf je 32 zakt het steeds verder.
De boodschap? Stel het niet te lang uit!</p>
          </div>
          <img src='../assets/images/answer2/clockright.png' />
        </div>

        <div className='leftAnswer'>
          <img src='../assets/images/answer2/eileft.png' />
          <div>
            <h2>Er zijn andere opties!</h2>
            <p>Weet je het toch nog niet zeker? Dan zijn er zeker nog andere opties. Zo is er bijvoorbeeld nog <span>IVF</span> of het <span>invriezen van je eicellen</span>.</p>
          </div>
        </div>
      </div>

      <div className='hidden third'>
        <h1>De piek is voorbij, maar…</h1>
        <div className='leftAnswer'>
          <img src='../assets/images/answer2/crieleft.png' />
          <div>
            <h2>…niet getreurd!</h2>
            <p>De piek mag na je dertigste dan wel voorbij zijn, maar dit wil niet zeggen dat er helemaal geen kans op een natuurlijke zwangerschap meer is!</p>
          </div>
        </div>

        <div className='leftAnswer'>
          <div>
            <h2>…er zijn nog andere opties</h2>
            <p>Lukt het natuurlijk zwanger worden dan echt niet? Dan kan je ook altijd nog gebruik maken van IVF! OF je laat voor je dertigste je eicellen invriezen!</p>
          </div>
          <img src='../assets/images/answer2/eiright.png' />
        </div>
      </div>
      </div>
    );
  }
}
