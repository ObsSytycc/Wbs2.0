
import React from 'react';
import BlogPostsContainer from '../../../containers/blog-post-container/BlogPostsContainer';
import '../styles/blog.css';

const Blog = () => {
	return (
		<section className="bg-[#EEF0F2] pt-28 pb-24">
			<section className="container">
				<div className="flex justify-center">
					<div className="mt-20 h-48 w-full rounded-3xl bg-primary shadow-3xl md:w-11/12">
						<div className="relative mt-8">
							<div className="absolute top-2 left-16 h-6 w-6 rounded-full border-2 border-accent md:left-36"></div>
							<div className="-translate-1/2 absolute -top-1 left-[38%] md:left-[42.5%] lg:left-[44.5%] xl:left-[46.5%]">
								<span className="absolute top-5 inline-block h-[3px] w-4 rotate-12 rounded-full border-2 bg-white"></span>
								<span className="absolute block inline-block h-[3px] w-6 rotate-45 rounded-full border-2 bg-white"></span>
								<span className="absolute left-7 inline-block h-[3px] w-4 rotate-90 rounded-full border-2 bg-white"></span>
							</div>
							<p className="ml-10 mt-14 pt-2 text-center text-4xl font-medium text-white">Blog</p>
						</div>
						<div className="absolute left-3/4 h-6 w-6 rounded-full border-2 border-accent"></div>
					</div>
				</div>
				<BlogPostsContainer />
			</section>
		</section>
	);
};

export default Blog;