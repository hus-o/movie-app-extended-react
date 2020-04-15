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
                {(selectedMovie.length > 0) && 
                (<img src={selectedMovie[0].Poster} alt="movie poster"></img>)
                }
            </React.Fragment>
         );
    }
}
 

export default Info;