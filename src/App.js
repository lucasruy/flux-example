import React, { Component } from 'react';

import ButtonComponent from './components/ButtonComponent';
import ColorComponent from './components/ColorComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonComponent />
        <ColorComponent />
      </div>
    );
  }
}

export default App;
