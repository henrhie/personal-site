import React, { useState } from 'react';

import './tabs.css';

function Tab({ title, active, onTabClick }) {
	return (
		<div
			className='tab-main'
			onClick={onTabClick}
			style={{
				margin: '0 1.2rem',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				cursor: 'pointer',
			}}>
			<p
				style={{
					marginTop: '0',
					marginBottom: '0.3rem',
					color: active ? '#646CEB' : '#333342',
				}}>
				{title}
			</p>
			<div
				style={{
					height: '0.2rem',
					width: '1.5rem',
					backgroundColor: '#646CEB',
					borderRadius: '6.25rem',
					opacity: active ? 1 : 0,
					transition: 'opacity 0.23s',
				}}></div>
		</div>
	);
}

function Tabs() {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div
			className='tabs-main'
			style={{
				display: 'flex',
				position: 'absolute',
				bottom: 0,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
			}}>
			<Tab
				title='Projects'
				active={activeTab === 0}
				onTabClick={() => setActiveTab(0)}
			/>
			<Tab
				title='Experience'
				active={activeTab === 1}
				onTabClick={() => setActiveTab(1)}
			/>
			<Tab
				title='Blogs'
				active={activeTab === 2}
				onTabClick={() => setActiveTab(2)}
			/>
		</div>
	);
}

export default Tabs;
