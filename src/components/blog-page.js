import React from 'react';
import BlogItem from './blog-item';
import { blogs } from './data';

const renderBlogs = () => {
	return blogs.map(({ image, blogDesc, blogTitle, blogUrl }) => {
		return (
			<BlogItem
				image={image}
				blogDesc={blogDesc}
				blogTitle={blogTitle}
				blogUrl={blogUrl}
			/>
		);
	});
};

export default function BlogPage() {
	return (
		<div
			style={{
				position: 'relative',
				top: '-5rem',
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
				{renderBlogs()}
			</div>
		</div>
	);
}
