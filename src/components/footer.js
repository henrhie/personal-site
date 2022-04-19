import React from 'react';

const Footer = () => {
	return (
		<footer
			style={{
				backgroundColor: '#646ceb',
				marginTop: '1.9rem',
			}}>
			<div
				className='footer-inner'
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}>
				<h4
					style={{
						fontFamily: 'neue-roman',
						color: '#fff',
						padding: '0',
						textAlign: 'center',
					}}>
					Design inspired by Polywork. Built with ❣️ in Accra
				</h4>
			</div>
		</footer>
	);
};

export default Footer;
