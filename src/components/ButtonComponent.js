import React, { Component } from 'react';

import * as ColorAppActions from '../actions/ColorAppActions'

class ButtonComponent extends Component {
  onButtonClick(colorName) {
    ColorAppActions.changeColor(colorName)
  }

  render() {
    return (
      <div>
        <p>Colors:</p>
        <button className="color-button" onClick={ () => this.onButtonClick('red') }>Red</button>
        <button className="color-button" onClick={ () => this.onButtonClick('blue') }>Blue</button>
      </div>
    );
  }
}

export default ButtonComponent;
