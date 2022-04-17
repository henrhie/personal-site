import React from 'react';

import backgroundImage from '../../assets/bk_img.png';
import ProfileCard from './profile-card';
import ExperiencePage from './experience-page';
import { AppContext } from './AppContext';
import ProjectsPage from './projects-page';
import BlogPage from './blog-page';
import Footer from './footer';

function LandingPage() {
	const context = React.useContext(AppContext);
	return (
		<>
			<section className='mainPage'>
				<img src={backgroundImage} className='background-image' />
				<ProfileCard />
				<div style={{ height: 'calc(100vh/2.7)' }}></div>
				<div className='tabs-page'>
					{context.store === 0 && <ProjectsPage />}
					{context.store === 1 && <ExperiencePage />}
					{context.store === 2 && <BlogPage />}
				</div>
				<Footer />
			</section>
		</>
	);
}

export default LandingPage;
