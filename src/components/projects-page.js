import React from 'react';
import ItemCard from './item-card';
import { projects } from './data';

const renderProjectCard = () => {
	return projects.map(
		({ image, project_title, projectDesc, projectUrl, tags }) => {
			return (
				<ItemCard
					icon={image}
					project_name={project_title}
					project_desc={projectDesc}
					tools={tags}
					link={projectUrl}
				/>
			);
		}
	);
};

export default function ProjectsPage() {
	return (
		<div
			style={{
				position: 'relative',
				top: '-7rem',
				width: '46rem',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
				}}
			>
				{renderProjectCard()}
			</div>
		</div>
	);
}
