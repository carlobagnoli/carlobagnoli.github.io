// Libs
import React from 'react'
import {Link} from 'react-router-dom'

// SVG's
import MainLogo from 'assets/svgs/main_logo_white.svg'

// CSS
import './HomeNavBar.css'

function HomeNavBar() {
	return (
      <div className="nav_bar">
         <Link id="logo" to="/">
            <img src={MainLogo} alt="main_logo" />
         </Link>
         <Link id="link" to="/contact">
            Contact me
         </Link>
         <Link id="link" to="/resume">
            Résumé
         </Link>
         <Link id="link" to="/portfolio">
            Portfolio
         </Link>
         <Link id="link" to="/about">
            About me
         </Link>
      </div>
   );
}

export default HomeNavBar
