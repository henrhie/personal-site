import React from 'react';

import './profileImage.css';
import profileImage from '../../../assets/memoji.jpg';

function ProfileImage() {
	return (
		<div className='profile-image-main'>
			<img src={profileImage} className='profile-image' />
		</div>
	);
}

export default ProfileImage;
