import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar/components/Navbar';
import Footer from '../footer/components/Footer';

function PageLayout({ children }) {
	return (
		<>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</>
	);
}

PageLayout.propTypes = {
	children: PropTypes.element
};

export default PageLayout;
