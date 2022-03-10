import React from 'react';
import ClockIcon from '../../assets/retro-clock.svg';
import { experiences } from './data';

function TimelineItem({ title, company }) {
	return (
		<div className='timeline-item'>
			<div
				style={{
					display: 'flex',
					position: 'relative',
					top: '-28px',
					left: '-12px',
					alignItems: 'center',
				}}
			>
				<img
					src={ClockIcon}
					style={{
						marginRight: '1.4rem',
					}}
				/>
				<h3
					style={{
						margin: '0',
						display: 'flex',
						alignItems: 'center',
						fontFamily: 'neue-roman',
						fontSize: '16px',
						color: '#92A9BD',
						letterSpacing: '0.7px',
					}}
				>
					{title}&nbsp;-&nbsp;
					<span>
						<p style={{ margin: 0, fontFamily: 'neue-roman' }}>{company}</p>
					</span>
				</h3>
			</div>
		</div>
	);
}

const renderExperiences = () => {
	return experiences.map(({ role, company }) => {
		return <TimelineItem title={role} company={company} />;
	});
};

export default function ExperiencePage() {
	return <div className='timeline'>{renderExperiences()}</div>;
}
