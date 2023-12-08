import React, { useState,useEffect } from 'react'
import tmdbAxioinstance from '../tmdbAxioInstance'
import './row.css'

function Row({title,fetchUrl}) {
    const [allMovies,setAllmovies]=useState([])
    const base_url_img='https://image.tmdb.org/t/p/original'
    
    const fetchData=async()=>{
        const responce= await tmdbAxioinstance.get(fetchUrl)
        // console.log(responce.data.results)
        setAllmovies(responce.data.results)
        // console.log(allmovies)
    }
    // fetchData()
    useEffect(()=>{
        fetchData()},[]
    )
    console.log(allMovies)
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='movies-row'>
            {
                allMovies?.map((item)=>(
                    <img className='movie' src={`${base_url_img}${item.backdrop_path}`} alt="no image" />
                ))
            }
        </div>
    </div>
    
  )
}

export default Row