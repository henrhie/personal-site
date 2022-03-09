import React from 'react';

import backgroundImage from '../../assets/figma.png';
import ProfileCard from './profile-card';
import ExperiencePage from './experience-page';
import { AppContext, ContextProvider } from './AppContext';
import ProjectsPage from './projects-page';

function LandingPage() {
	const context = React.useContext(AppContext);
	console.log(context);
	return (
		<>
			<section className='mainPage'>
				<img src={backgroundImage} className='background-image' />
				<ProfileCard />
			</section>
			<section className='tabs-page'>
				{context.store === 0 && <ProjectsPage />}
				{context.store === 1 && <ExperiencePage />}
			</section>
		</>
	);
}

export default LandingPage;
