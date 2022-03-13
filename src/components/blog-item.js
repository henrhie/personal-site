import React from 'react';

export default function BlogItem({
	image,
	blogTitle,
	blogDesc,
	blogUrl,
	poweredBy,
}) {
	return (
		<div
			className='item-card'
			style={{ display: 'flex', flexDirection: 'column' }}>
			<div
				style={{
					display: 'flex',
					padding: '1.5rem 1.2rem',
					paddingBottom: '0',
					flexDirection: 'row',
				}}>
				<img
					src={image}
					style={{
						width: '100%',
						height: '15rem',
						objectFit: 'cover',
						borderRadius: '8px',
					}}
				/>
			</div>
			<div style={{ padding: '1.1rem 1.2rem', paddingBottom: '0' }}>
				<h1>{blogTitle}</h1>
			</div>
			<div style={{ padding: '0 1.2rem' }}>
				<p
					style={{
						fontFamily: 'neue-roman',
						color: '#4B6587',
						lineHeight: '20px',
					}}>
					{blogDesc}
				</p>
			</div>
			<div
				style={{
					display: 'flex',
					padding: '0 1.2rem',
					alignItems: 'center',
					marginBottom: '0',
					marginTop: 'auto',
				}}>
				<a href={blogUrl} target='_blank'>
					<p
						className='readmore-p'
						style={{
							fontFamily: 'neue-roman',
							fontSize: '14px',
							color: '#5C7AEA',
						}}>
						Read More
					</p>
				</a>
				<a
					href='https://blog.paperspace.com'
					style={{
						display: 'flex',
						justifyContent: 'center',
						padding: '0.2rem 0.4rem',
						backgroundColor: '#E1E5EA',
						borderRadius: '4px',
						marginLeft: 'auto',
					}}>
					<div>
						<h5
							style={{
								fontFamily: 'neue-medium',
								margin: 0,
								color: '#393E46',
							}}>
							Powered by <span>{poweredBy}</span>
						</h5>
					</div>
				</a>
			</div>
		</div>
	);
}
