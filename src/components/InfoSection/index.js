import React from 'react';

import './infoSection.css';
import verifiedIcon from '../../../assets/icons8-tiktok-verified-account.svg';

function Dot() {
	return (
		<div
			style={{
				height: '0.1rem',
				width: '0.1rem',
				backgroundColor: 'black',
				marginLeft: '1rem',
				marginRight: '1rem',
				borderRadius: '100px',
				backgroundColor: '#666c86',
			}}></div>
	);
}

function InfoSection() {
	return (
		<div>
			<div
				style={{
					marginLeft: '2.8rem',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: '1.2rem',
				}}>
				<h1>Henry Ansah</h1>
				<img
					src={verifiedIcon}
					style={{ height: '1.7rem', width: '1.7rem', marginLeft: '0.3rem' }}
				/>
			</div>
			<div
				className='status'
				style={{
					marginLeft: '2.8rem',
					marginTop: '0.5rem',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				<p>devops@Stanbic</p>
				<Dot />
				<p>Accra, Ghana</p>
			</div>
		</div>
	);
}

export default InfoSection;
