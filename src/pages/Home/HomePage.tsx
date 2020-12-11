import React from 'react'

// SVG's
import MainLogo from './assets/svgs/main_logo_white.svg'

// CSS
import './assets/css/Home.css'

function HomePageView () {
	return (
      <div>
         <header>
            <img id="main_logo" src={MainLogo} alt="main_logo" />
         </header>
      </div>
   );
}

export default HomePageView;
