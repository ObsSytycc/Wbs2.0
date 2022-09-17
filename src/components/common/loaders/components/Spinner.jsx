import React from 'react';
import '../styles/spinner.css';

const Spinner = () => {
	return (
		<section className="spinner-wrapper">
			<div className="loader">
				<div></div>
				<div></div>
			</div>
		</section>
	);
};

export default Spinner;
