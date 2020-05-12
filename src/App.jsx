import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      candles: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/janiedelhi/candles/candles')
      .then(response => response.json())
      .then(items => this.setState({ candles: items }));
  }

  search = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { candles, searchField } = this.state;
    const filteredCandles = candles.filter(candle =>
      candle.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <SearchBox
          placeholder='search candles'
          handleChange={this.search} />
        <CardList items={filteredCandles} />
      </div>
    );
  }
}

export default App;
