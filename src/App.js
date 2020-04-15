import React, { Component } from 'react';
import './App.css';
import Search from "./components/search"
import Results from "./components/movieResults"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchTerm: "",
      movieResults: [],
      selectedMovie: ""
     }

  }

  getMovieResults = (results) => {
    this.setState({movieResults:results})
    console.log(this.state.movieResults)
  }
  
  render() { 
    return (
      <div>
        <Search movieResults = {this.getMovieResults}  />
        <Results/>
      </div>
    );
  }
}
 

export default App;
