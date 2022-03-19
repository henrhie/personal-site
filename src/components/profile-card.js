import React from 'react';

import InfoSection from './info-section';

import ProfileImage from './profile-image';
import GithubIcon from '../../assets/github.svg';
import TwitterIcon from '../../assets/twitter.svg';
import LinkedInIcon from '../../assets/linkedin.svg';

import SkillsSection from './skills-section';
import Tabs from './tabs';

function ProfileCard() {
	return (
		<div className='card-wrapper'>
			<div className='main-card-wrapper'>
				<div className='main-card'>
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
						}}>
						<div className='socials'>
							<a href='https://github.com/henrhie' target='_blank'>
								<img src={GithubIcon} style={{ marginRight: '1.4rem' }} />
							</a>
							<a href='https://twitter.com/h__________1234' target='_blank'>
								<img src={TwitterIcon} style={{ marginRight: '1.4rem' }} />
							</a>
							<a
								href='https://www.linkedin.com/in/henry-ansah-6a8b84167/'
								target='_blank'>
								<img src={LinkedInIcon} style={{ marginRight: '1.4rem' }} />
							</a>
						</div>
					</div>
					<div className='top-section'>
						<ProfileImage />
					</div>
					<InfoSection />
					<SkillsSection />
					<Tabs />
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default ProfileCard;
