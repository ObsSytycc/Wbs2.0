import React from 'react';
import { ReviewsContainer } from '../../../containers';
import '../styles/reviews.css';

const Reviewsection = () => {
	return (
		<section className="reviews min-h-96 relative w-full py-40">
			<div className="container">
				<h2 className="mb-20 text-center text-xl font-semibold">What Our Members Say About Us</h2>

				<ReviewsContainer />
			</div>
		</section>
	);
};

export default Reviewsection;
