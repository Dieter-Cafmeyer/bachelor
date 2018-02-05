'use strict';

import React, {Component} from 'react';

export default class Answer1 extends Component {
  constructor() {
    super();
  }

  renderTitle() {
    if(this.props.age === '1'){
      return <h1>U bent nog voor uw piek!</h1>;
    }else if (this.props.age === '2'){
      return <h1>U begint nu aan uw piek!</h1>;
    }else if (this.props.age === '3'){
      return <h1>U bent nu in uw piek!</h1>;
    }else if (this.props.age === '4'){
      return <h1>U bent reeds voorbij uw piek!</h1>;
    }
  }


  renderInfo() {
    if(this.props.age === '1'){
      return <p>U bevindt zich nu in uw vruchtbare piek. Dit wil zeggen dat de kans op zwangerschap nu het grootst is. Er is nu een kans op slagen tussen de 22% - 25% per cyclus.</p>;
    }else if (this.props.age === '2'){
      return <p>U bevindt zich nu in uw vruchtbare piek. Dit wil zeggen dat de kans op zwangerschap nu het grootst is. Er is nu een kans op slagen tussen de 22% - 25% per cyclus.</p>;
    }else if (this.props.age === '3'){
      return <p>U bevindt zich nu in uw vruchtbare piek. Dit wil zeggen dat de kans op zwangerschap nu het grootst is. Er is nu een kans op slagen tussen de 22% - 25% per cyclus.</p>;
    }else if (this.props.age === '4'){
      return <p>U bevindt zich nu in uw vruchtbare piek. Dit wil zeggen dat de kans op zwangerschap nu het grootst is. Er is nu een kans op slagen tussen de 22% - 25% per cyclus.</p>;
    }
  }

  render() {

    return (
      <div className='info w3-container w3-center w3-animate-bottom' >
        {this.renderTitle()}
        {this.renderInfo()}
      </div>
    );
  }
}
