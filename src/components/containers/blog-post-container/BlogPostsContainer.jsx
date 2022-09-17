import React, { useState, useEffect, useRef, startTransition } from 'react';
import gsap from 'gsap';

import { useAnimateOnScroll } from '../../../hooks';
import { animation } from '../../../utils';
import { blogPost, categoryList } from '../../../data';
import BlogList from '../../module/blog/components/BlogList';
import BlogSeachInput from '../../module/blog/components/BlogSearchInput';
import Categories from '../../module/blog/components/Categories';

function BlogPostsContainer() {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [activeTab, setActiveTab] = useState('All');
	const [searchValue, setSeachValue] = useState('');

	const [trigger] = useAnimateOnScroll(animateBlogActions);
	const catContainerRef = useRef(null);

	useEffect(() => {
		setPosts(blogPost);
		setCategories(categoryList);
	}, []);

	useEffect(() => {
		setPosts([...blogPost].filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase())));
	}, [searchValue]);

	// Sorts blog on search input
	const searchPost = (value) => {
		startTransition(() => {
			setSeachValue(value);
		});
	};

	// Scroll animation
	function animateBlogActions() {
		const tl = gsap.timeline();

		tl.add(
			animation.fade(trigger.current.querySelector('.input-container'), { yPercent: 100 }, { yPercent: 0, duration: 1 })
		).add(
			animation.fade(trigger.current.querySelector('.blog-list'), { yPercent: 100 }, { yPercent: 0, duration: 1.5 }),
			'-=0.5'
		);

		return tl;
	}

	// Sort blog on clicking tab
	const sortBlogs = (name) => {
		startTransition(() => {
			if (name === 'All') {
				setPosts([...blogPost]);
			} else {
				setPosts(blogPost.filter((post) => post.category === name));
			}

			setActiveTab(name);
			return;
		});
	};

	return (
		<div ref={trigger}>
			<BlogSeachInput search={searchPost} value={searchValue} />
			<section className="mt-10">
				<div ref={catContainerRef}>
					<Categories onclick={sortBlogs} categories={categories} active={activeTab} />
				</div>
				<BlogList posts={posts} />
			</section>
		</div>
	);
}

export default BlogPostsContainer;
