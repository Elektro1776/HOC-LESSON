import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';
import Carousel from './containers/Carousel';
import CarouselItems from './components/carousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Carousel id={'carousel1'}>
            {CarouselItems.items}
          </Carousel>
        </header>
      </div>
    );
  }
}

export default App;
