import React, { Component } from 'react';
import { CandleList } from './components/candle-list/candle-list.component';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      candles: []
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/janiedelhi/candles/candles')
      .then(response => response.json())
      .then(users => this.setState({ candles: users}));
  }

  render() {
    return (
      <div className="App">
        <CandleList monsters={this.state.candles}/>
      </div>
    );
  }
}


export default App;
