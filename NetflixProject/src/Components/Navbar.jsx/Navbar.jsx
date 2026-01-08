import React from 'react'
import './Navbar.css'
import netflix_fevicon from '../../assets/netflix_fevicon.png'
import search_icon from '../../assets/search_icon.png'
import bellbutton from '../../assets/bellbutton.png'
import user from '../../assets/user.png'
import dropdown from '../../assets/dropdown.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={netflix_fevicon} alt="Netflix_logo" height={100} />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse By languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="search" className='icons' />
        <img src={bellbutton} alt="Bell_button" className='icons' />

        
        <div className="profile">
          <img src={user} alt="profilebutton" className="profile-img" />
          <img src={dropdown} alt="dropdownimage" className="icons" />

          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
