import React from 'react';
import BlogItem from './blog-item';
import { blogs } from './data';

const renderBlogs = () => {
	return blogs.map(({ image, blogDesc, blogTitle, blogUrl, poweredBy }) => {
		return (
			<BlogItem
				image={image}
				blogDesc={blogDesc}
				blogTitle={blogTitle}
				blogUrl={blogUrl}
				poweredBy={poweredBy}
			/>
		);
	});
};

export default function BlogPage() {
	return (
		<div
			style={{
				position: 'relative',
				top: '-7rem',
				width: '46rem',
			}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
				}}>
				{renderBlogs()}
			</div>
		</div>
	);
}
