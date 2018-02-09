'use strict';

import React, {Component} from 'react';

export default class Answer1 extends Component {
  constructor() {
    super();

    console.log('test');
  }

  componentDidMount() {
    if(this.props.bio === 'n') {
      document.querySelector('.negative').style.display = 'block';
    }else {
      document.querySelector('.positive').style.display = 'block';
    }
  }

  render() {
    return (
      <div>
      <div className='hidden positive'>
        <h1>We zijn blij dat je de biologische klok al kent!</h1>
        <div className='leftAnswer'>
          <img src='../assets/images/answer1/leftmountain.png' />
          <div>
            <h2>Je zit nog voor je piek!</h2>
            <p>Dit wil zeggen dat jouw meest vruchtbare periode er nog aan moet komen. Geen zorgen, je hoeft er nu nog niet over na te denken. De meest vruchtbare periode bevindt zich tussen je 25 en 30 jaar.</p>
          </div>
        </div>

        <div className='leftAnswer'>
          <div>
            <h2>Denk nog niet te veel na!</h2>
            <p>Kinderen zijn op dit moment waarschijnlijk nog een "ver van je bed - show". En dit kan gerust nog enkele jaren zo blijven. Weet wel dat je piek tussen de leeftijd van 25 en 30 jaar ligt.</p>
          </div>
          <img src='../assets/images/answer1/rightbrain.png' />
        </div>
      </div>

      <div className='hidden negative'>
        <h1></h1>
        <div className='leftAnswer'>
          <img src='../assets/images/answer1/leftclock.png' />
          <div>
            <h2>De biologische klok tikt</h2>
            <p>Met biologische klok bedoelen we de leeftijden waarop jouw vruchtbaarheid verandert. Dit is van belang als je ooit kinderen wil.</p>
          </div>
        </div>

        <div className='leftAnswer'>
          <div>
            <h2>Je meest vruchtbare periode</h2>
            <p>Voor vrouwen begint de meest vruchtbare periode tussen de 25 en 30 jaar. Binnen deze periode is de kans op een natuurlijke zwangerschap tot 22% per cyclus!</p>
          </div>
          <img src='../assets/images/answer1/rightwoman.png' />
        </div>
      </div>
      </div>
    );
  }
}
