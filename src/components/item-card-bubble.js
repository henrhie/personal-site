import React from 'react';

const ItemCardBubble = ({ title }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				backgroundColor: '#E1E5EA',
				borderRadius: '4px',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0.1rem 0.3rem',
				fontSize: '0.9rem',
				marginRight: '0.3rem',
				marginBottom: '0.3rem',
			}}>
			<h5
				style={{
					margin: '0px',
					fontFamily: 'monaco',
					color: '#393E46',
				}}>
				{title}
			</h5>
		</div>
	);
};

export default ItemCardBubble;
