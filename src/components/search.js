import React, { Component } from 'react';
import axios from "axios"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
      };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        event.preventDefault()
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault()
        const userQuery =  this.state.value
        console.log(userQuery)
        axios.get(`http://www.omdbapi.com/?s=${userQuery}&apikey=71ef6486`)
        .then(results => 
          {
              this.props.searchResults(results)}
        )};

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search for a movie" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    
export default Search;