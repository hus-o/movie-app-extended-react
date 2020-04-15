import React, { Component } from "react";

class Results extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        const { searchResults, setSelectedMovie } = this.props;
        console.log(searchResults)
        return (
            <ul className="search-results">
                {searchResults.searchResults.length > 0 ? (
                    searchResults.searchResults.map(movie =>(
                        <li
                            className="search-results-li"
                            key={movie.imdbID}
                            onClick={event=>setSelectedMovie(event, movie)}
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