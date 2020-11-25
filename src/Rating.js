import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Rating = ({ratingFunc,rating}) => {
    return (
        <StarRatingComponent 
        name="rate" 
        starCount={5}
        value={rating}
        onStarClick={(nextValue)=>{ratingFunc(nextValue)}}
        /> )
}

export default Rating