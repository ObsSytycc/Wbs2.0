import React from 'react';
import PropTypes from 'prop-types';

import '../styles/about.css';

const AboutIndicator = ({ length = 0, count = 0 }) => {
	return (
		<section className="indicator-wrapper absolute left-1/2 bottom-4 flex -translate-x-1/2 items-center justify-center gap-6 py-4">
			<button className="h-2.5 w-10 rounded-2xl bg-primary lg:h-4 lg:w-14" style={{ order: count }}></button>
			{length &&
				Array.from(Array(length), (_, indx) => {
					return (
						<button
							key={indx}
							style={{
								order: `${count === 0 ? indx + 1 : count >= indx + 1 ? indx : indx + 1}`
							}}
							className="h-2.5 w-4 rounded-2xl bg-white lg:h-4 lg:w-6"
						>
							{/* When count is 0 every all indicators except the first maintains their positions, when count is greater than or equal to their current order then take the order of their array index as their current DOM order else elements with index greater than count are to maintain an order greater than their array index by 1*/}
						</button>
					);
				})}
		</section>
	);
};

AboutIndicator.propTypes = {
	length: PropTypes.number,
	count: PropTypes.number
};

export default AboutIndicator;
