'use strict';

import React, {Component} from 'react';

export default class Answer1 extends Component {
  constructor() {
    super();

    console.log('test');
  }

  render() {
    return (
      <div>

        <h1>Kinderen boven de dertig jaar?</h1>
        <div className='leftAnswer'>
          <img src='../assets/images/answer1/leftmountain.png' />
          <div>
            <h2>Voorbij de piek</h2>
            <p>Maar weet dat dit helemaal niet erg is. De kans op een natuurlijke zwangerschap bestaat nog steeds, al is het iets moeilijker.</p>
          </div>
        </div>

        <div className='leftAnswer'>
          <div>
            <h2>Denk nog niet te veel na!</h2>
            <p>Een van de andere opties is IVF (In-vitrofertilisatie). Deze optie geeft ook geen garanties met zich mee en slaagt meestal pas na een aantal pogingen. Lees hier meer over IVF.</p>
          </div>
          <img src='../assets/images/answer2/eiright.png' />
        </div>

        <div className='leftAnswer'>
          <img src='../assets/images/answer2/crossleft.png' />
          <div>
            <h2>Risicofactoren</h2>
            <p>Bij een zwangerschap boven de dertig jaar komen ook verschillende risicofactoren kijken, waaronder hogere bloeddruk, <span>zwangerschapsdiabetes</span> en <span>zwangerschapsvergiftiging</span>.</p>
          </div>
        </div>

      </div>
    );
  }
}
