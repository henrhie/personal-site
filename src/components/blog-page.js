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
		<div className='blog-page'>
			<div className='blog-page-inner'>{renderBlogs()}</div>
		</div>
	);
}
