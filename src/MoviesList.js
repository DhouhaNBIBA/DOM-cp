import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = (props) => {
    return (
        <div className="movies">
            
            {props.movies.map(movie=>
                <MovieCard movie={movie}/>
                )}
    
        </div>
    )
}

export default MoviesList