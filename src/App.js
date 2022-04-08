import React from 'react'
import { useEffect } from 'react'
// ea3f4e91
import './App.css'
import SearchIcon from './search.svg'

const API_URL= "http://www.omdbapi.com?apikey=ea3f4e91"
const App = () => {

    const searchMovie = async(title)=>{
        const response =await fetch(`${API_URL}&s=${title}`)
        const data =await response.json()
        console.log(data.Search)
    }

useEffect(()=>{
searchMovie('batman')
},[])
  return (
    <div>hello world</div>
  )
}

export default App