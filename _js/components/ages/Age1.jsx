'use strict';

import React, {Component} from 'react';
import {Kids, Bio} from '../questions/';
import {Info, Answer1} from '../answers/';

var question = 1;

export default class Age1 extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      kids: '',
      bio: ''
    };
  }

  wantKids(kids) {
    question++;
    this.setState({kids});
  }

  bio(bio) {
    question++;
    this.setState({bio});
  }

  renderQuestion() {
    if(question === 1) {
      return <Kids wantKids={kids => this.wantKids(kids)}/>;
    }else if(question === 2) {
      return <Bio bio={bio => this.bio(bio)}/>;
    }else if(question === 3) {
      return <Answer1 {...this.state} />;
    }
  }

  renderInfo() {
    if(question === 1) {
      var title = 'Ben je hier nu nog niet mee bezig?';
      var content = 'Dan is dit doodnormaal. Onder de twintig jaar is bijna niemand al bezig met het nadenken over kinderen. Maak je hier dus vooral geen zorgen over.';
      return <Info title={title} content={content} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderQuestion()}
        {this.renderInfo()}
      </div>
    );
  }
}
