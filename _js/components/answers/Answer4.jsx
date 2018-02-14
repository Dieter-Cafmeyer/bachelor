'use strict';

import React, {Component} from 'react';

export default class Answer4 extends Component {
  constructor() {
    super();

    console.log('test');
  }

  render() {
    return (
      <div>

        <h1>Geen kinderen voor jou? Geen probleem!</h1>
        <div className='leftAnswer'>
          <img src='../assets/images/answer2/snowleft.png' />
          <div>
            <h2>Kinderwens veiligstellen</h2>
            <p>Wanneer je nog twijfelt, kan je er wel voor zorgen dat je je kinderwens veiligstelt. Dit kan je doen door bijvoorbeeld je eicellen te laten invriezen, waardoor ze jong en gezond blijven.</p>
          </div>
        </div>

        <div className='leftAnswer'>
          <div>
            <h2>Help een andere kinderwens</h2>
            <p>Er zijn veel andere koppels die wel hopen ooit kinderen te kunnen krijgen, maar door ziekte of onvruchtbaarheid hier niet zelf aan kunnen beginnen. Jij kan hen helpen doormiddel van <span>eiceldonatie</span>.</p>
          </div>
          <img src='../assets/images/answer2/kindrechts.png' />
        </div>

      </div>
    );
  }
}
