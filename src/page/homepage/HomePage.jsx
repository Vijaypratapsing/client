import React from 'react'
import "./home.scss"
import SearchBar from '../../component/searchBar/SearchBar'

function HomePage() {
  return (
    <div className='homepage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p>Discover your dream home in the heart of the city. This stunning 3BHK apartment offers spacious living, modern amenities, and a peaceful environment. Perfect for families or professionals seeking comfort and convenience.</p>

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