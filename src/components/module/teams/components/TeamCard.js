import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TeamCard = ({ name = '', icon = () => null, text = '', path = '' }) => {
	return (
		<article className="relative h-80 rounded-3xl bg-gray-300 px-8 pt-12 pb-10 shadow-md">
			<div className="absolute -top-16 left-1/2 -translate-x-1/2 rounded-3xl bg-white shadow-md">
				<div className="flex h-32 w-32 flex-col items-center justify-center p-6">
					<img src={icon() || ''} alt={`${name} Company logo `} />
				</div>
			</div>
			<div className="mt-8 items-center">
				<Link to={path}>
					<h3 className="mb-2 text-center text-xl font-normal text-accent">{name}</h3>
				</Link>
				<p className="text-center font-normal text-primary">{text}</p>
			</div>
		</article>
	);
};

TeamCard.propTypes = {
	name: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.func,
	path: PropTypes.string
};

export default TeamCard;
