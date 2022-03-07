import React from 'react';

import backgroundImage from '../../assets/figma.png';
import ProfileCard from './profile-card';

function LandingPage() {
	return (
		<>
			<section className='mainPage'>
				<img src={backgroundImage} className='background-image' />
				<ProfileCard />
			</section>
			<section className='tabs-page'></section>
		</>
	);
}

export default LandingPage;
