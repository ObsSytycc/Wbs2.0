import React from 'react';
import PropTypes from 'prop-types';

const AboutHeader = ({ title = '', info = '' }) => {
	return (
		<hgroup className="mb-8 basis-[35%]">
			<h2 className="mb-16 text-xl font-semibold">{title}</h2>
			<p className="text-base">{info}</p>
		</hgroup>
	);
};

AboutHeader.propTypes = {
	title: PropTypes.string,
	info: PropTypes.string
};

export default AboutHeader;
