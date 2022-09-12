import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title = '', content = '', image = '', author = {}, category = '', published = '' }) => {
	return (
		<article className="flex flex-col gap-4">
			<div className="overflow-hidden rounded-2xl bg-slate-400">
				<img src={image} className="h-64 w-full object-cover lg:h-80" alt="" />
			</div>
			<div className="pt-8">
				<h3 className="mb-4 text-base-md font-bold text-accent">{category}</h3>
				<h4 className="mb-4 text-base-lg font-bold leading-[50px] text-primary">{title}</h4>
				<p className="mb-4 text-base-md font-medium leading-slh">{content}</p>
				<div className="author-details items-center">
					<div className="rounded-full bg-orange-300">
						<img src={author.image} className="h-full w-full" alt={`Image of the ${author.name}`} />
					</div>
					<div>
						<h5 className="mb-2 text-sm font-semibold">{author.name}</h5>
						<p className="text-xs font-normal">{published}</p>
					</div>
				</div>
			</div>
		</article>
	);
};

Post.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	category: PropTypes.string,
	published: PropTypes.string,
	author: PropTypes.object,
	image: PropTypes.string
};

export default Post;
