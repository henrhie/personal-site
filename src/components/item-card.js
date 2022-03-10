import React from 'react';

import CollabIcon from '../../assets/icons8-portrait-of-a-classic-user-online-for-profile-picture.svg';
import TagIcon from '../../assets/icons8-flat-discount-rate-of-about-ten-percent-at-e-commerce-store.svg';
import CodeIcon from '../../assets/icons8-system-bug-isolated-on-a-white-background.svg';
import ArrowIcon from '../../assets/Arrow 2.svg';
import ItemCardBubble from './item-card-bubble';

const ToolsSection = ({ tools }) => {
	return tools.map((tool) => <ItemCardBubble title={tool} />);
};

const ItemCard = ({ icon, project_name, project_desc, tools, link }) => {
	return (
		<div className='item-card'>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '1.8rem',
				}}
			>
				<img src={icon} />
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '0.6rem',
				}}
			>
				<h1 style={{ fontFamily: 'neue-roman', letterSpacing: '0.5px' }}>
					{project_name}
				</h1>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginTop: '2rem',
					marginLeft: '1.8rem',
				}}
			>
				<img src={CollabIcon} style={{ marginRight: '1rem' }} />
				<ItemCardBubble title='Henry Ansah' />
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginTop: '0.7rem',
					marginLeft: '1.8rem',
					alignItems: 'flex-start',
				}}
			>
				<img src={TagIcon} style={{ marginRight: '1rem' }} />
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						width: '80%',
					}}
				>
					<ToolsSection tools={tools} />
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginTop: '1.8rem',
					marginLeft: '1.8rem',
					alignItems: 'start',
				}}
			>
				<img src={CodeIcon} style={{ marginRight: '1rem' }} />
				<div
					style={{
						backgroundColor: '#fff',
						width: '14.5rem',
						borderRadius: '5px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
					}}
				>
					<div
						style={{
							borderBottom: '0.01px solid #EFEFEF',
							backgroundColor: '#FBFBFB',
						}}
					>
						<div
							style={{
								display: 'flex',
								margin: '0.6rem 0',
								marginLeft: '0.5rem',
							}}
						>
							<div
								style={{
									height: '8px',
									width: '8px',
									backgroundColor: '#CCD1E4',
									borderRadius: '10000px',
									marginRight: '0.4rem',
								}}
							></div>
							<div
								style={{
									height: '8px',
									width: '8px',
									backgroundColor: '#CCD1E4',
									borderRadius: '100000px',
									marginRight: '0.4rem',
								}}
							></div>
							<div
								style={{
									height: '8px',
									width: '8px',
									backgroundColor: '#CCD1E4',
									borderRadius: '100000px',
								}}
							></div>
						</div>
					</div>
					<p
						style={{
							fontFamily: 'monaco',
							fontSize: '0.9rem',
							fontWeight: 'bold',
							padding: '0 0.8rem',
							color: '#334756',
						}}
					>
						{project_desc}
					</p>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					paddingRight: '1rem',
				}}
			>
				<a href={link} target='_blank'>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<p
							style={{
								fontFamily: 'neue-roman',
								color: '#5C7AEA',
								marginRight: '0.3rem',
							}}
						>
							view project
						</p>
						<img src={ArrowIcon} />
					</div>
				</a>
			</div>
		</div>
	);
};

export default ItemCard;
