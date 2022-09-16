import React from 'react';

const BlogHeader = () => {
	return (
		<div className="blog-header flex h-32 items-center justify-center rounded-3xl bg-primary shadow-3xl md:h-48">
			<div className="w-full md:w-11/12">
				<div className="relative mt-8">
					<div className="absolute top-2 left-16 h-6 w-6 rounded-full border-2 border-accent md:left-36"></div>
					<div className="-translate-1/2 absolute -top-1 left-[38%] md:left-[42.5%] lg:left-[44.5%] xl:left-[46.5%]">
						<span className="absolute top-5 inline-block h-[3px] w-4 rotate-12 rounded-full border-2 bg-white"></span>
						<span className="absolute block inline-block h-[3px] w-6 rotate-45 rounded-full border-2 bg-white"></span>
						<span className="absolute left-7 inline-block h-[3px] w-4 rotate-90 rounded-full border-2 bg-white"></span>
					</div>
					<h2 className="ml-10 pt-2 pb-4 text-center text-xl font-medium text-white">Blog</h2>
					<div className="absolute top-[40%] left-3/4 h-6 w-6 rounded-full border-2 border-accent"></div>
				</div>
			</div>
		</div>
	);
};

export default BlogHeader;
