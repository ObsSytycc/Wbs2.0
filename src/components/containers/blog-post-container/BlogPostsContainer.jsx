import React, { useState, useEffect } from 'react';
import { blogPost, categoryList } from '../../../data';
import BlogList from '../../module/blog/components/BlogList';
import BlogSeachInput from '../../module/blog/components/BlogSearchInput';
import Categories from '../../module/blog/components/Categories';

const BlogPostsContainer = () => {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [activeTab, setActiveTab] = useState('All');

	useEffect(() => {
		setPosts(blogPost);
		setCategories(categoryList);
	}, []);

	const sortBlogs = (name) => {
		if (name === 'All') {
			setPosts([...blogPost]);
			setActiveTab(name);
			return;
		}
		setPosts(blogPost.filter((post) => post.category === name));
		setActiveTab(name);
		return;
	};

	return (
		<>
			<BlogSeachInput />
			<section className="mt-10">
				<Categories onclick={sortBlogs} categories={categories} active={activeTab} />
				<BlogList posts={posts} />
			</section>
		</>
	);
};

export default BlogPostsContainer;
