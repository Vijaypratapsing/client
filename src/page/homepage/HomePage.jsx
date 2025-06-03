import React from 'react'
import "./home.scss"
import SearchBar from '../../component/searchBar/SearchBar'

function HomePage() {
  return (
    <div className='homepage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci mollitia ea nemo molestias provident amet culpa, minima a. Cum, architecto eveniet? Harum, deserunt nisi accusamus facilis placeat enim neque?</p>
            <SearchBar/>
            <div className="boxes">
             <div className="box">
                <h1>16+</h1>
                <h2>Year of Experience</h2>
             </div>
             <div className="box">
                <h1>200</h1>
                <h2>Award Gainds</h2>
             </div>
             <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
             </div>
            </div>
            </div>
        </div>
        <div className="imageContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage