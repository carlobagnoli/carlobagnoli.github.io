import React from 'react'

// SVG's
import GithubLogo from 'assets/svgs/github_logo.svg'
import FacebookLogo from 'assets/svgs/facebook_logo.svg'
import InstagramLogo from 'assets/svgs/instagram_logo.svg'

// CSS
import './HomeFooter.css'

function HomeFooter() {
	return (
		<div className="social_media">
			<img src={GithubLogo} alt="github_logo" />
			<img src={FacebookLogo} alt="facebook_logo" />
			<img src={InstagramLogo} alt="instagram_logo" />
		</div>
	)
}

export default HomeFooter
