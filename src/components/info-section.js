import React from 'react';

import verifiedIcon from '../../assets/icons8-tiktok-verified-account.svg';

function Dot() {
	return (
		<div
			style={{
				height: '0.2rem',
				width: '0.2rem',
				backgroundColor: 'black',
				marginLeft: '0.5rem',
				marginRight: '0.5rem',
				borderRadius: '100px',
				backgroundColor: '#666c86',
			}}></div>
	);
}

function InfoSection() {
	return (
		<div>
			<div className='info-section'>
				<h1>Henry Ansah</h1>
				<img
					src={verifiedIcon}
					style={{ height: '1.35rem', width: '1.35rem', marginLeft: '0.3rem' }}
				/>
			</div>
			<div className='status'>
				<p>SRE @Stanbic</p>
				<Dot />
				<p>Accra, Ghana</p>
				<Dot />
				<p>Henryansah083@gmail.com</p>
			</div>
		</div>
	);
}

export default InfoSection;
