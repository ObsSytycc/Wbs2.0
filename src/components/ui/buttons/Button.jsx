import React from 'react';
import PropTypes from 'prop-types';
import './style/button.css';

const Button = ({ type = 'button', value = '', color = 'primary', onclick = () => null, icon = () => null }) => {
	return (
		<button
			type={type}
			className={`sytycc-btn text-base-md leading-slh ${color === 'primary' ? 'primary-btn' : 'secondary-btn'}`}
			onClick={() => onclick()}
		>
			{value}
			{icon && <span>{icon()}</span>}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	color: PropTypes.string,
	onclick: PropTypes.func,
	icon: PropTypes.func
};

export default Button;
