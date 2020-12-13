// libs
import React, {useState, useEffect} from 'react'

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
	const [carloPhotoStyle, setCarloPhotoStyle] = useState("main_photo");
	const [descriptionStyle, setDescriptionStyle] = useState("hide_desc");

	useEffect(() => {
      setTimeout(() => setDescriptionStyle("show_desc"), 1000);
   }, []);

	return (
      <div className="home_page">
         <HomeNavBar />

			<h1 className={descriptionStyle} id="name">CARLO</h1>
			<h1 className={descriptionStyle} id="lastname">BAGNOLI</h1>
			<h3 className={descriptionStyle} id="mini_description">A medium-rare web dev.</h3>

         <img id="background_logo" src={BackgroundLogo} alt="background_logo" />

         <img
            className={carloPhotoStyle}
            onLoad={() => setCarloPhotoStyle("main_photo show")}
            src={CarloBagnoliPhoto}
            alt="carlo_bagnoli_photo"
         />

         <HomeFooter />
      </div>
   );
}

export default HomePageView;
