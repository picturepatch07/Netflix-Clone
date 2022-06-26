import React from 'react'
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
        <img 
            className="nav__logo"
            src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
            alt="Netflix Logo"
        />

        <img 
            className="nav_avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkohTJNgr4OxbfK1WgyKVM7ipPiFH4xdKj_w&usqp=CAU"
            alt="Netflix Logo"
        />
    </div>
  )
}

export default Nav