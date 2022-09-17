import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from './ReviewsItem';
import { CarouselSlider } from '../../../../lib';
import '../styles/reviews.css';

const ReviewList = ({ reviews = [] }) => {
	return (
		<section className="reviews-list">
			<CarouselSlider>
				{reviews.map((review) => {
					const { rating, message, reviewer, id } = review;

					return <ReviewsItem key={id} id={`${id}`} r_rating={rating} r_message={message} r_details={reviewer} />;
				})}
			</CarouselSlider>
		</section>
	);
};

ReviewList.propTypes = {
	reviews: PropTypes.array
};

export default ReviewList;
