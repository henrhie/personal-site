import React from 'react';

import backgroundImage from '../../assets/figma.png';
import ProfileCard from './profile-card';
import ExperiencePage from './experience-page';
import { AppContext } from './AppContext';
import ProjectsPage from './projects-page';
import BlogPage from './blog-page';

function LandingPage() {
	const context = React.useContext(AppContext);
	return (
		<>
			<section className='mainPage'>
				<img src={backgroundImage} className='background-image' />
				<ProfileCard />
			</section>
			<section className='tabs-page'>
				{context.store === 0 && <ProjectsPage />}
				{context.store === 1 && <ExperiencePage />}
				{context.store === 2 && <BlogPage />}
			</section>
			<footer>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}>
					<h4
						style={{
							fontFamily: 'neue-roman',
							color: '#21325E',
						}}>
						Design inspired by Polywork. Built with ❣️in Accra
					</h4>
				</div>
			</footer>
		</>
	);
}

export default LandingPage;
