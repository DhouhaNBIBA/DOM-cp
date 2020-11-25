import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({movie}) => {
    return (
        <div  className="movie">
        <img src={movie.image} alt='' width="150px"/>
        <h4 className="movie-name">{movie.name}</h4>
<StarRatingComponent 
    name="rate" 
    starCount={5}
    value={movie.rating}
        />
        <p>{movie.year}</p>
        </div>
    )
}

export default MovieCard ;