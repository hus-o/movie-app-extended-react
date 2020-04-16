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
                {(selectedMovie.length > 0) && <p className="moreInfo">Release Year: {selectedMovie[0].Year}<br/>IMDB Link: <a href={"https://imdb.com/title/"+selectedMovie[0].imdbID}>{selectedMovie[0].Title}</a></p>}
            </React.Fragment>
         );
    }
}
 

export default Info;