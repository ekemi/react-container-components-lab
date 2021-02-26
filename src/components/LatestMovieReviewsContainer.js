import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vbKCjJoYgaSQCysJ7kzKAsEh2DXJbV25'
// 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default  class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }
    
    fetchMovies=() =>{
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            // debugger
            this.setState({
                reviews: data.reseults
            })
            
    })
}

componentDidMount() {
    this.fetchMovies()
}
    render() {
        return (
            <div className="latest-movie-reviews">
            <h6>Reviews:</h6>
              <MovieReviews reviews={this.state.reviews}/>  
            </div>
        )
    }
}


