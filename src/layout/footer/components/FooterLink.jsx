import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const FooterLink = ({ name = '', path = '' }) => {
	return (
		<li>
			<NavLink to={path} className={({ isActive }) => (isActive ? 'footer-nav-link active' : 'footer-nav-link')}>
				{name}
			</NavLink>
		</li>
	);
};

FooterLink.propTypes = {
	name: PropTypes.string,
	path: PropTypes.string
};

export default FooterLink;
