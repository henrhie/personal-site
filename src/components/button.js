import React, { useState } from 'react';

function IconWithTextButton({
	borderRadius,
	Icon,
	text,
	hoverColor,
	backgroundColor,
	imageSize,
	font,
}) {
	const [textColor, setTextColor] = useState('#000');
	return (
		<div
			onMouseOver={() => {
				setTextColor(hoverColor);
			}}
			onMouseLeave={() => setTextColor('#000')}
			className='button-main'
			style={{
				backgroundColor,
				borderRadius,
				display: 'flex',
				justifyContent: 'center',
				paddingTop: '0.1rem',
				paddingBottom: '0.1rem',
				paddingLeft: '0.4rem',
				paddingRight: '0.9rem',
				marginRight: '0.5rem',
				marginBottom: '0.4rem',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<img src={Icon} height={imageSize} width={imageSize} crossOrigin />
				<p
					style={{
						// letterSpacing: '-0.025rem',
						fontFamily: 'neue-roman',
						color: textColor,
						fontSize: '0.9rem',
						marginLeft: '0.5rem',
						fontWeight: 'bold',
						letterSpacing: '0.5px',
					}}
				>
					{text}
				</p>
			</div>
		</div>
	);
}

export default IconWithTextButton;
