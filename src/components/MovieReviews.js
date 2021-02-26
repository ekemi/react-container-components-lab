// Code MovieReviews Here
import React from 'react'
//We can destructure by using {reviews}
function MovieReviews({reviews}) {

    
   let i = 0
    return (

        
        <div className ="review-list">
        <ul>
        {reviews.map(review=>
            <div className="review">
            <li>
            <h6>{review.headline}</h6>
            <h6>By: {review.byline}</h6>
            <h6>{review.summary_short}</h6>
            </li>
            </div>
        )
        }
    
        </ul>
        
        </div>
           
      
    )
}

MovieReviews.defaultProps={
    reviews:[]
}
export default MovieReviews
