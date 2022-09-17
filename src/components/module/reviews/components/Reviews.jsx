import React from 'react';

import { useAnimateOnScroll } from '../../../../hooks';
import { animation } from '../../../../utils';
import { SectionHeader } from '../../../ui';
import { ReviewsContainer } from '../../../containers';
import '../styles/reviews.css';

const Reviewsection = () => {
	const [trigger] = useAnimateOnScroll(animateReview);

	function animateReview() {
		return animation.fade(trigger.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 });
	}

	return (
		<section className="reviews min-h-96 relative w-full py-40">
			<div className="container">
				<SectionHeader title="What Our Members Say About Us" />
				<div className="invisible" ref={trigger}>
					<ReviewsContainer />
				</div>
			</div>
		</section>
	);
};

export default Reviewsection;
