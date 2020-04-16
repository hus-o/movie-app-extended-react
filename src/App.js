import React, { Component } from 'react';
import './App.css';
import Search from "./components/search"
import Results from "./components/movieResults"
import Info from "./components/moreInfo"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [],
      selectedMovie: []
     }

  }

  getSearchResults = (results) => {
    this.setState({searchResults:results})
  }

  getSelectedMovie = (movie) => {
    console.log(this.selectedMovie)
    this.setState({selectedMovie:[movie]})
    console.log(this.selectedMovie)
  }
  
  render() {
    return (
      <div className="App">
        <Search searchResults = {this.getSearchResults} />
        <Results searchResults = {this.state.searchResults} selectedMovie = {this.getSelectedMovie}/>
        <Info selectedMovie = {this.state.selectedMovie}/>
      </div>
    );
  }
}
 

export default App;
