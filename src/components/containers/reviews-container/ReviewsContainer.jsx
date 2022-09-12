import React, { useState, useEffect } from 'react';
import ReviewList from '../../module/reviews/components/ReviewList';
import { reviewList } from '../../../data/reviewsList';

const ReviewsContainer = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		setReviews(reviewList);
	}, []);
	return (
		<>
			<ReviewList reviews={reviews} />
		</>
	);
};

export default ReviewsContainer;
