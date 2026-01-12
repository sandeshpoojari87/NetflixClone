import React from 'react'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import strangerthings from '../../assets/strangerthings.webp'
import Navbar from '../../Components/Navbar.jsx/Navbar'
import info from '../../assets/info.png'
import play from '../../assets/play.png'
const Home = () => {
  return (
      <div className="home">
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt="hero-banner" className='banner-image'/>
          <div className="hero-caption">
            <img src={strangerthings} alt="strangerthings"  className='caption-img'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta distinctio eligendi, saepe laudantium doloribus soluta cupiditate accusamus nisi consequuntur animi, voluptatem qui placeat ea eius eveniet obcaecati blanditiis mollitia amet!</p>
            <div className="hero-button">
              <button className='btn'><img src={info} alt="" />More info</button>
              <button className='btn'><img src={play} alt="" />Play</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home
