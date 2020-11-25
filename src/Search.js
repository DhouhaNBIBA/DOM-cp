import React,{useState,useEffect} from 'react'

const Search  = ({search}) => {
    return (
    <input type="text" 
    style={{margin:"20px"}} 
    onChange={(e)=>search(e.target.value) }
    />)
}

export default Search ;