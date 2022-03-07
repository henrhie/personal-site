import React from 'react';

import InfoSection from './info-section';

import ProfileImage from './profile-image';
import GithubIcon from '../../assets/github.svg';
import TwitterIcon from '../../assets/twitter.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import VscodeIcon from '../../assets/icons8-visual-studio-code-2019 2.svg';
import ReactNativeIcon from '../../assets/icons8-react-a-javascript-library-for-building-user-interfaces (1).svg';

import SkillsSection from './skills-section';
import Tabs from './tabs';
import ItemCard from './item-card';

function ProfileCard() {
	return (
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
				</div>
				<InfoSection />
				<SkillsSection />
				<Tabs />
				<div
					style={{
						position: 'relative',
						top: '6rem',
						width: '100%',
					}}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							flexWrap: 'wrap',
						}}>
						<ItemCard
							icon={VscodeIcon}
							project_name='Note.js'
							project_desc='Note.js is a vscode extension that allows developers to quickly
 						  prototype their frontend projects in vscode'
							tools={['vscode', 'javascript', 'react', 'frontend', 'extension']}
							link='https://github.com/henrhie/Note.js'
						/>
						<ItemCard
							icon={ReactNativeIcon}
							project_name='React Native SHA'
							project_desc='React Native SHA is a Blazing fast ⚡⚡⚡ Secure Hash Algorithm solution for React Native with direct C++ bindings'
							tools={['react native', 'c++', 'java', 'javascript', 'android']}
							link='https://github.com/henrhie/react-native-sha'
						/>
						<ItemCard
							icon={ReactNativeIcon}
							project_name='React Native SHA'
							project_desc='React Native SHA is a Blazing fast ⚡⚡⚡ Secure Hash Algorithm solution for React Native with direct C++ bindings'
							tools={['react native', 'c++', 'java', 'javascript', 'android']}
							link='https://github.com/henrhie/react-native-sha'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
