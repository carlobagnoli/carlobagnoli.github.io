// Libs
import React from 'react'
import {Link} from 'react-router-dom'

// SVG's
import MainLogo from 'assets/svgs/main_logo_white.svg'
import MenuIcon from 'assets/svgs/menu_icon.svg'

// CSS
import './HomeNavBar.css'

function HomeNavBar() {
	const [windowDimensions, setWindowDimensions] = React.useState({
		height: window.innerHeight,
		width: window.innerWidth
	});

	React.useEffect(() => {
      const handleChange = () => {
         setWindowDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
         });
      };

      window.addEventListener("resize", handleChange);

      return () => window.removeEventListener("resize", handleChange);
   })

	return (
      <nav className="nav_bar">
			<input type="checkbox" id="check" />
			<label htmlFor="check" className="check_button">
				<img src={MenuIcon} alt="main_logo" />
			</label>

			<img className="main_logo" src={MainLogo} alt="main_logo" />

			<ul>
				<li><h3>Contact</h3></li>
				<li><h3>Résumé</h3></li>
				<li><h3>Portfolio</h3></li>
				<li><h3>About</h3></li>
			</ul>
      </nav>
   );
}

export default HomeNavBar
