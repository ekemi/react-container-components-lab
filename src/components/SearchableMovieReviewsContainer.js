import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'vbKCjJoYgaSQCysJ7kzKAsEh2DXJbV25';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


export class SearchableMovieReviewsContainer extends Component {

    constructor () {
        super()
        this.state = {
            searchTerm:'',
            reviews:[]

        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                reviews:data.results
            })
            
        })
    }

    handleChangeInput = (event)=> {

        this.setState({
            searchTerm: event.target.value
        })

    }

    renderReview=()=>{
      if(this.state.reviews.length > 0)
      {
          return  <MovieReviews reviews ={this.state.reviews}/>
        }
    
    }

    render () {

        return(
            <div className="searchable-movie-review">
              <form onSubmit={event=>this.handleSubmit(event)}>
              
              
            <input type="text" value={this.state.searchTerm} onChange={event=>this.handleChangeInput(event)}/>
            <input type="submit"/>
         </form>   
         {this.renderReview()}        
            </div>
        )
    }





    
}

export default SearchableMovieReviewsContainer
