// libs
import React from 'react'
import {Link} from 'react-router-dom'

// SVG's
import MainLogo from './assets/svgs/main_logo_white.svg'

// CSS
import './assets/css/Home.css'

function HomePageView () {
	return (
      <div>
         <header>
            <img id="main_logo" src={MainLogo} alt="main_logo" />
				<Link to='/about'>About</Link>
         </header>
      </div>
   );
}

export default HomePageView;
