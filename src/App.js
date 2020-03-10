import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Pagination } from "./components/pagination/pagination.component";

import "./main.css"

class App extends Component {
  constructor() {
    super();

    this.state = {
      records: [],
      searchField: '',
      title: '',
      totalResults: 10,
      currentPage: 1
    }
  }

  componentDidMount() {
    fetch('https://tools.hiwaldo.com/hiring/?key=wkbHE5F94aJRUJmE924DW4KBayrxWQ3q6LY8dtKf9PV')
      .then(response => response.json())
      .then(users => this.setState({ 
            records: users.data, 
            totalResults: users.data.totalResults,

          }));
  }

  handleChange = e => {
    this.setState({ 
      searchField: e.target.value,
      title: e.target.value
    })
  }

  nextPage = (pageNumber) => {
    fetch(`https://tools.hiwaldo.com/hiring/?key=wkbHE5F94aJRUJmE924DW4KBayrxWQ3q6LY8dtKf9PV&page=${pageNumber}`)
      .then(response => response.json())
      .then(users => this.setState({ 
        records: users.data, 
        currentPage: pageNumber 
      }))
  }

  render() {
    const { records, searchField, title } = this.state;
    const filteredRecords = records.filter(record => record.name.toLowerCase().includes(searchField.toLowerCase()));
    const numberPages = 19;

    return (
      <div className="app">      
        <SearchBox
          placeholder="Search for a record"
          handleChange={this.handleChange}  
        />
        <h1 className="title">{ title }</h1>
        <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/>          
        <CardList records={filteredRecords} />        
      </div>
    )
  }
}
export default App;
