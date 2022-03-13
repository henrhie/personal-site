import React from 'react';
import ClockIcon from '../../assets/retro-clock.svg';
import { experiences } from './data';

const renderDuties = (duties) => {
	return duties.map((duty) => {
		return <li>{duty}</li>;
	});
};

function TimelineItem({ title, company, duties, date }) {
	return (
		<div className='timeline-item'>
			<div
				style={{
					display: 'flex',
					position: 'relative',
					top: '-28px',
					left: '-12px',
					alignItems: 'center',
				}}>
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
						color: '#21325E',
						letterSpacing: '0.7px',
					}}>
					{title}&nbsp;-&nbsp;
					<span>
						<p style={{ margin: 0, fontFamily: 'neue-roman' }}>{company}</p>
					</span>
				</h3>
				<p
					style={{
						marginLeft: 'auto',
						marginRight: '1rem',
						fontFamily: 'neue-roman',
						color: '#21325E',
						marginTop: 0,
						marginBottom: 0,
					}}>
					{date}
				</p>
			</div>
			<div style={{ position: 'relative', top: '-24px' }}>
				<ul>{renderDuties(duties)}</ul>
			</div>
		</div>
	);
}

const renderExperiences = () => {
	return experiences.map(({ role, company, duties, date }) => {
		return (
			<TimelineItem
				title={role}
				company={company}
				duties={duties}
				date={date}
			/>
		);
	});
};

export default function ExperiencePage() {
	return <div className='timeline'>{renderExperiences()}</div>;
}
