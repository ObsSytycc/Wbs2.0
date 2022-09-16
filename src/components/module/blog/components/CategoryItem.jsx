import React from 'react';
import PropTypes from 'prop-types';
import '../styles/blog.css';

const CategoryItem = ({ id = '', value = '', onclick = () => null, active = '', addRefs = () => null }) => {
	return (
		<li className="category-item" id={id}>
			<button
				className={`${
					active === value ? 'bg-primary text-white' : ''
				} inline-block rounded-md px-8 py-2.5 text-base font-semibold`}
				onClick={() => onclick(value)}
				ref={addRefs}
			>
				{value}
			</button>
		</li>
	);
};

CategoryItem.propTypes = {
	id: PropTypes.string,
	value: PropTypes.string,
	onclick: PropTypes.func,
	addRefs: PropTypes.func,
	active: PropTypes.string
};

export default CategoryItem;
