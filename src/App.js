import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      records: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://tools.hiwaldo.com/hiring/?key=wkbHE5F94aJRUJmE924DW4KBayrxWQ3q6LY8dtKf9PV')
      .then(response => response.json())
      .then(users => this.setState({ records: users.data }) )
  }

  render() {

    const { records, searchField } = this.state;

    const filteredRecords = records.filter(record => record.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <input type="text" 
          placeholder="Search for a record" 
          onChange={ e => this.setState({ searchField: e.target.value }) }/>  

        <CardList records={filteredRecords} />        
      </div>
    )
  }
}
export default App;
