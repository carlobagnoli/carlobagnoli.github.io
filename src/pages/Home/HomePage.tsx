// libs
import React from 'react'

// CSS
import './HomePage.css'

// Components
import HomeNavBar from './components/HomeNavBar/HomeNavBar'
import HomeFooter from './components/HomeFooter/HomeFooter'

// Images
import CarloBagnoliPhoto from 'assets/images/carlo_bagnoli_photo.png'

// SVG's
import BackgroundLogo from 'assets/svgs/background_logo.svg'

function HomePageView () {
	return (
      <div className="home_page">
         <HomeNavBar />

         <h1 id="name">CARLO</h1>
         <h1 id="lastname">BAGNOLI</h1>
         <h3 id="mini_description">A medium-rare web dev.</h3>

         <img id="background_logo" src={BackgroundLogo} alt="background_logo" />

         <img
            id="main_photo"
            src={CarloBagnoliPhoto}
            alt="carlo_bagnoli_photo"
         />

         <HomeFooter />
      </div>
   );
}

export default HomePageView;
