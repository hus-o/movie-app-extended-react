import React, { Component } from "react";

class Results extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        const { searchResults, setSelectedMovie } = this.props;
        console.log(searchResults, setSelectedMovie)
        return (
            <ul className="search-results">
                {searchResults.length > 0 ? (
                    searchResults.data.Search.map(movie =>(
                        <li
                            className="search-results-li"
                            key={movie.imdbID}
                            onClick={event=>setSelectedMovie(event, movie)}
                        >
                        {movie.Title}
                        </li>
                    ))
                ) :
                    (<li>Be Patient, loading</li>)
                }
            </ul>
        );
    }
}
export default Results;