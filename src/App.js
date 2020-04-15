import React, { Component } from 'react';
import './App.css';
import Search from "./components/search"
import Results from "./components/movieResults"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [],
      selectedMovie: ""
     }

  }

  getSearchResults = (results) => {
    this.setState({searchResults:results})
  }
  
  render() { 
    return (
      <div>
        <Search searchResults = {this.getSearchResults} />
        <Results searchResults = {this.state} selectedMovie={this.state}/>
      </div>
    );
  }
}
 

export default App;
