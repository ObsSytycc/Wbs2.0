import React from 'react';
import PropTypes from 'prop-types';

import AboutHeader from './AboutHeader';
import AboutDetails from './AboutDetails';
import '../styles/about.css';
import AboutImage from './AboutImage';
import AboutIndicator from './AboutIndicator';

const About = ({ detail = {}, length = 0, count = 0 }) => {
	return (
		<section className="relative pt-10 pb-28">
			<section className="container">
				<div className="relative">
					<div className="mb-10 flex flex-col justify-between gap-10 lg:flex-row">
						<AboutHeader title={detail?.title || ''} info={detail?.info || ''} />
						<AboutImage name={detail?.title || ''} image={detail?.image || ''} />
					</div>

					<section className="bottom-0 left-0 w-full lg:absolute lg:w-[75%]">
						<AboutDetails list={detail.details} />
					</section>
				</div>
			</section>
			<AboutIndicator count={count} length={length} />
		</section>
	);
};

About.propTypes = {
	detail: PropTypes.object,
	length: PropTypes.number,
	count: PropTypes.number
};

export default About;
