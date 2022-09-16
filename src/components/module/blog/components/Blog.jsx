import React from 'react';
import gsap from 'gsap';

import { useAnimateOnScroll } from '../../../../hooks';
import { animation } from '../../../../utils';
import BlogHeader from './BlogHeader';
import BlogPostsContainer from '../../../containers/blog-post-container/BlogPostsContainer';
import '../styles/blog.css';

function Blog() {
	const [trigger] = useAnimateOnScroll(animateBlog);

	function animateBlog() {
		const tl = gsap.timeline();

		tl.add(animation.fade(trigger.current, {}, { duration: 1 })).add(
			animation.fade(trigger.current.querySelector('.blog-header'), {}, { duration: 1.5 }),
			'-=0.5'
		);

		return tl;
	}

	return (
		<section className="invisible overflow-y-hidden bg-[#EEF0F2] pt-28 pb-24" ref={trigger}>
			<section className="container">
				<BlogHeader />
				<BlogPostsContainer />
			</section>
		</section>
	);
}

export default Blog;
