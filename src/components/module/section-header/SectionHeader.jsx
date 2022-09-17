import React from 'react';
import PropTypes from 'prop-types';
import './styles/section-header.css';

const SectionHeader = ({ title = '', text = '' }) => {
	return (
		<hgroup className="text-center">
			<h2 className="section-header mb-10 text-xl font-bold leading-llh">{title}</h2>
			{text && <p className="mb-16 text-base-md font-normal leading-slh">{text}</p>}
		</hgroup>
	);
};

SectionHeader.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

export default SectionHeader;
