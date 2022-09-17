import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

import '../styles/blog.css';

const BlogList = ({ posts = [] }) => {
	return (
		<section className="blog-list grid">
			{posts.map((item, indx) => {
				const { image, author, title, content, published, category } = item;

				return (
					<Post
						key={indx}
						image={image}
						author={author}
						category={category}
						title={title}
						content={content}
						published={published}
					/>
				);
			})}
		</section>
	);
};

BlogList.propTypes = {
	posts: PropTypes.array
};

export default BlogList;
