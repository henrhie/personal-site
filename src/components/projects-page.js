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
		<div className='projects-page'>
			<div className='projects-page-inner'>{renderProjectCard()}</div>
		</div>
	);
}
