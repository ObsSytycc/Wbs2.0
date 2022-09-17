import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function ProtectedLayout({ authenticated, children }) {
	if (!authenticated) {
		return <Navigate to="/login" replace />;
	}

	return children;
}

ProtectedLayout.propTypes = {
	authenticated: PropTypes.bool,
	children: PropTypes.element
};

export default ProtectedLayout;
