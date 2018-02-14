'use strict';

import React, {Component} from 'react';
import {Kids, AgeKids} from '../questions/';
import {Info, Answer2, Answer4} from '../answers/';

var question = 1;

export default class Age3 extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      kids: '',
      ageKids: ''
    };
  }

  wantKids(kids) {
    question++;
    this.setState({kids});
  }

  ageKids(ageKids) {
    question++;
    this.setState({ageKids});
  }

  renderQuestion() {
    if(question === 1) {
      return <Kids wantKids={kids => this.wantKids(kids)}/>;
    }else if(question === 2 && this.state.kids === 'y') {
      return <AgeKids {...this.props} ageKids={ageKids => this.ageKids(ageKids)} />;
    }else if(question === 2 && this.state.kids === 'n') {
      return <Answer4 {...this.state} />;
    }else if(question === 3) {
      return <Answer2 {...this.state} />;
    }
  }

  renderInfo() {
    if(question === 1) {
      var title = 'U bent nu in Uw piek!';
      var content = 'U bevindt zich nu in uw vruchtbare piek. Dit wil zeggen dat de kans op zwangerschap nu het grootst is. Er is nu een kans op slagen tussen de 22% - 25% per cyclus.';
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
