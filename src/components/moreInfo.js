import React, { Component } from "react";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        console.log(this.props.selectedMovie.Poster)
        return ( 
            <React.Fragment>
                <img src={this.props.selectedMovie.Poster} alt="movie poster"></img>
            </React.Fragment>
         );
    }
}
 

export default Info;