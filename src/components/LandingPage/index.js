import React from 'react';

import backgroundImage from '../../../assets/figma.png';
import ProfileCard from '../ProfileCard';

import './landingPage.css';

function LandingPage() {
	return (
		<div className='mainPage'>
			<img src={backgroundImage} className='background-image' />
			<ProfileCard />
		</div>
	);
}

export default LandingPage;
