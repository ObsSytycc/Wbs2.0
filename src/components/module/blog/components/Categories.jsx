import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

const Categories = ({ categories = [], onclick = () => null, active = '' }) => {
	return (
		<ul className="mx-auto mb-16 flex w-full flex-wrap justify-between gap-2 py-4 lg:w-[80%]">
			{categories.map((category, indx) => {
				const { name, id } = category;
				return <CategoryItem key={id} id={id} active={active} value={name} onclick={onclick} />;
			})}
		</ul>
	);
};

Categories.propTypes = {
	categories: PropTypes.array,
	onclick: PropTypes.func,
	active: PropTypes.string
};

export default Categories;
