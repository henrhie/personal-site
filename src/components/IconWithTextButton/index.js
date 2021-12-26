import React from 'react';

import './Button.css';

function IconWithTextButton({
	_border,
	borderRadius,
	Icon,
	text,
	textColor,
	backgroundColor,
	imageSize,
	skillButton,
	font,
}) {
	return (
		<div
			className='button-main'
			style={{
				border: _border ? ['1px solid #e4e8f1'] : '',
				backgroundColor,
				borderRadius,
				display: 'flex',
				justifyContent: 'center',
				marginRight: skillButton ? '0.5rem' : '',
				padding: skillButton ? `0.03rem 1rem` : `0.08rem 1rem`,
			}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				<img src={Icon} height={imageSize} width={imageSize} />
				<p
					style={{
						letterSpacing: '-0.025rem',
						fontFamily: font,
						color: textColor,
						fontSize: '0.9rem',
						marginLeft: skillButton ? '0.2rem' : '0.4rem',
					}}>
					{text}
				</p>
			</div>
		</div>
	);
}

export default IconWithTextButton;
