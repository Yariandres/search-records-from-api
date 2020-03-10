import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      records: []
    }
  }

  componentDidMount() {
    fetch('https://tools.hiwaldo.com/hiring/?key=wkbHE5F94aJRUJmE924DW4KBayrxWQ3q6LY8dtKf9PV')
      .then(response => response.json())
      .then(users => this.setState({ records: users.data }) )
  }

  render() {
    return (
      <div className="App">
      <CardList name='Yari'/>
        {this.state.records.map(record => (<h1 key={record.id}>{record.name}</h1>))}
      </div>
    )
  }
}



export default App;
