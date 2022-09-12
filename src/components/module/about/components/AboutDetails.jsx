import React from 'react';
import PropTypes from 'prop-types';

const AboutDetails = ({ list = [] }) => {
	return (
		<section className="flex w-full items-center justify-around border-2 border-slate-500 bg-primary py-8 px-2.5 shadow-2xl lg:px-5">
			{list.map((item, indx) => {
				return (
					<article key={indx} className="px-2.5 text-center">
						<h4 className="px-2.5 text-xl font-semibold text-accent">{item[0]}</h4>
						<p className="text-base-lg text-white">{item[1]}</p>
					</article>
				);
			})}
		</section>
	);
};

AboutDetails.propTypes = {
	list: PropTypes.array
};

export default AboutDetails;
