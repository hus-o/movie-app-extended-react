import React, { Component } from "react";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    
    render() {
        const {selectedMovie} = this.props
        console.log(selectedMovie.length, selectedMovie)
        return ( 
            <React.Fragment>
                <p className="moreInfo">Release Year: {this.props.selectedMovie.Year}<br/>IMDB ID: {this.props.selectedMovie.imdbID}</p>
            </React.Fragment>
         );
    }
}
 

export default Info;