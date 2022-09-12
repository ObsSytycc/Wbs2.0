import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsiveOptions = {
	superLargeDesktop: {
		breakpoint: { max: 3000, min: 1921 },
		items: 3
	},
	desktop: {
		breakpoint: { max: 1920, min: 1025 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 521 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 520, min: 0 },
		items: 1
	}
};

const CarouselSlider = ({ children }) => {
	return (
		<Carousel
			responsive={responsiveOptions}
			containerClass="carousel-wrapper"
			removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
			dotListClass="items-dot"
			itemClass="carousel-custom-item"
			autoPlaySpeed={3000}
			transitionDuration={300}
			keyBoardControl
			showDots
			swipeable
			renderDotsOutside
			autoPlay
			rewind
		>
			{children}
		</Carousel>
	);
};

CarouselSlider.propTypes = {
	children: PropTypes.array,
	additionalTransform: PropTypes.number
};

export default CarouselSlider;
