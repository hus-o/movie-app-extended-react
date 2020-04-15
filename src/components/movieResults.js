import React, { Component } from "react";

class Results extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.selectMovie = this.selectMovie.bind(this)
    }

    selectMovie = (movie) => {
        this.props.selectedMovie(movie)
      }
    
    render(){
        const { searchResults } = this.props;
        console.log(searchResults)
        return (
            <ul className="search-results">
                {searchResults.length > 0 ? (
                    searchResults.map(movie =>(
                        <li
                            className="search-results-li"
                            key={movie.imdbID}
                            onClick={() => this.selectMovie(movie)}
                        >
                        {movie.Title}
                        </li>
                    ))
                ) :
                    (<h3>Waiting for search</h3>)
                }
            </ul>
        );
    }
}
export default Results;