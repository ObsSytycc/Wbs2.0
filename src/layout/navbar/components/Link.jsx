import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Link = ({ name = '', path = '' }) => {
	return (
		<li className="nav-item">
			<NavLink to={path} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
				{name}
				<span></span>
			</NavLink>
		</li>
	);
};

Link.propTypes = {
	name: PropTypes.string,
	path: PropTypes.string
};

export default Link;
