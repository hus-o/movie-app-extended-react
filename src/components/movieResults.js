import React, { Component } from "react";

class Results extends Component{
    render(){
        const { searchResults, setSelectedMovie } = this.props;
        return (
            <ul className="search-results">
                {searchResults ? (
                    searchResults.map(movie =>(
                        <li
                            className="search-results-li"
                            key={movie.imdbID}
                            onClick={event=>setSelectedMovie(event, movie)}
                        >
                            {movie.Title}
                        </li>
                    ))
                ) : (
                    <li>Be Patient</li>
                )}
            </ul>
        );
    }
}
export default Results;