import React from 'react';
import PropTypes from 'prop-types';

const BlogSearchInput = ({ onsubmit = () => null, value = '', onchange = () => null }) => {
	return (
		<form onSubmit={() => onsubmit}>
			<section className="-mt-6 flex items-center justify-center">
				<input
					type="text"
					className="search-input h-20 w-[80%] rounded-3xl bg-white py-2 pl-20 text-base-md leading-slh shadow-3xl lg:w-2/4 lg:py-4"
					placeholder="Search"
					name="search"
					id="searchInput"
					value={value}
					onChange={() => onchange()}
				/>
			</section>
		</form>
	);
};

BlogSearchInput.propTypes = {
	onchange: PropTypes.func,
	onsubmit: PropTypes.func,
	value: PropTypes.string
};

export default BlogSearchInput;
