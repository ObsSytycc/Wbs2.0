import React from 'react';
import PropTypes from 'prop-types';

const BlogSearchInput = ({ value = '', search = () => null }) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				search(value);
			}}
		>
			<section className="input-container -mt-6 flex items-center justify-center">
				<input
					type="text"
					className="search-input h-14 w-[80%] rounded-3xl bg-white py-2 pl-20 text-base-md leading-slh shadow-3xl md:h-20 lg:w-2/4 lg:py-4"
					placeholder="Search"
					name="search"
					id="searchInput"
					value={value}
					onChange={(e) => search(e.target.value)}
				/>
			</section>
		</form>
	);
};

BlogSearchInput.propTypes = {
	search: PropTypes.func,
	value: PropTypes.string
};

export default BlogSearchInput;
