import React,{useState} from 'react';
import './App.css';
import MoviesList from './MoviesList'
import AddMovie from './AddMovie'
import  Search from './Search' 
import Rating  from './Rating' 
function App () {
  const moviesList=[
    {
      name:'Let Him Go',
      image:'http://cima4u.io/wp-content/uploads/0-1191.jpg',
      rating:4,
      year:2020
    },
    {
      name:"300",
      image:"http://cima4u.io/wp-content/uploads/0-2659.jpg" ,
      rating:5,
      year:2006
    },
    {
      name:"Jumanji 2:The Next Level ",
      image:'http://cima4u.io/wp-content/uploads/00-2300.jpg',
      rating:4,
      year:2020,
    }
  ];
  const [movies,setMovies]=useState(moviesList) ;
  const addMovie=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  const [search,setSearch]=useState("");
  const [rating,setRating]=useState(1);
  const searchFunc=(value)=>{
    setSearch(value);
  }
  const ratingFunc=(rate)=>{
    setRating(rate);
  }
  return (
    <div className="App">
      <div className="adding">
          <div className="search">
          <h4> Search in the Website </h4>
      <Search search={searchFunc}/>
          </div>
        <div className="rate">
          <h4> Your rating counts</h4>
        <Rating ratingFunc={ratingFunc} rating={rating}/>
        </div>
        <div className="add">
          <h4>Add a new movie</h4>
        <AddMovie addMovie={addMovie}/>
        </div>
        </div>
        <div className="list">
        <MoviesList movies={movies.filter(movie=>
          movie.name
          .toLocaleLowerCase()
          .includes(search.trim().toLocaleLowerCase()) && movie.rating>=rating
          ) }/>
        </div>
        
    </div>
  )
}
export default App ;