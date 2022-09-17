import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectsCard = ({ name = '', details = {}, path = '' }) => {
	return (
		<article className="sytycc-project-card rounded-xl bg-white">
			<div className="img-top h-[245px]">
				<img src={details.image} loading="lazy" className="h-[245px] w-full" alt={`${name} project sample`} />
			</div>
			<div className="card-body flex items-center justify-between py-6 px-5">
				<div className="project-info">
					<h3 className="mb-2 text-base font-bold leading-slh text-accent">{name}</h3>
					<p className="text-capitalize text-dark mb-2 text-base font-semibold leading-slh">
						Project Team: {details.doneBy}
					</p>
					<p className="text-sm leading-slh text-gray-500">Launch Date: {details.launch}</p>
				</div>
				<Link to={path} className="translate-y-4">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
						<path
							fill="#1E284E"
							d="M0 20a20 20 0 1 0 40 0 20 20 0 0 0-40 0Zm23.72-7.38 5.72 6c.08.09.15.19.2.3.08.1.15.2.2.32a1.88 1.88 0 0 1 0 1.52 2 2 0 0 1-.42.66l-6 6a2 2 0 1 1-2.84-2.84l2.6-2.58H12a2 2 0 0 1 0-4h11.32l-2.5-2.62a2 2 0 0 1 2.9-2.76Z"
						/>
					</svg>
				</Link>
			</div>
		</article>
	);
};

ProjectsCard.propTypes = {
	name: PropTypes.string,
	path: PropTypes.string,
	details: PropTypes.object
};

export default ProjectsCard;
