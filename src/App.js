import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

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
        <CardList records={this.state.records} />        
      </div>
    )
  }
}



export default App;
