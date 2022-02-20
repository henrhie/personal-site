import React from 'react';

import InfoSection from '../InfoSection';

import IconWithTextButton from '../IconWithTextButton';
import ProfileImage from '../ProfileImage';
import MessageIcon from '../../../assets/message-favorite.svg';
import DocumentCodeIcon from '../../../assets/document-code.svg';
import GithubIcon from '../../../assets/github.svg';
import TwitterIcon from '../../../assets/twitter.svg';
import LinkedInIcon from '../../../assets/linkedin.svg';

import './profileCard.css';
import SkillsSection from '../SkillsSection';
import Tabs from '../Tabs';
import ItemCard from '../ItemCard';

function ProfileCard() {
	return (
		<>
			<div className='card-wrapper'>
				<div className='main-card'>
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
							marginTop: '1.9rem',
						}}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginRight: '2.2rem',
							}}>
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
						{/* <div style={{ display: 'flex', flexDirection: 'row' }}>
							<IconWithTextButton
								Icon={MessageIcon}
								text='Reach out'
								borderRadius='5px'
								textColor='#646CEB'
								backgroundColor='#EFF0FD'
								font='inter-semibold'
							/>
							<div style={{ marginLeft: '0.7rem' }}></div>
							<IconWithTextButton
								Icon={DocumentCodeIcon}
								text='Resume'
								borderRadius='5px'
								textColor='#37C5B7'
								backgroundColor='#EBF9F6'
								font='inter-semibold'
							/>
						</div> */}
					</div>
					<InfoSection />
					<SkillsSection />
					<Tabs />
					<div style={{ position: 'relative', top: '6rem', width: '100%' }}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
							<ItemCard />
							<ItemCard />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileCard;
