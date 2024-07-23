import React, { useState } from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const [menu, setmenu] = useState("home")

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" /></Link>
      <ul className="navbar-menu">
        <a href='#header' onClick={() => { setmenu("home") }} className={menu === "home" ? "active" : ""}>Home</a>
        <a href='#explore-menu' onClick={() => { setmenu("menu") }} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => { setmenu("mobile-app") }} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => { setmenu("contact-us") }} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="navbar-search_icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="basket_icon" /></Link>
          <div className="  "></div>
        </div>
        <button onClick={()=>{setShowLogin(true)}}>Sign In</button>
      </div>

    </div>
  )
}

export default Navbar