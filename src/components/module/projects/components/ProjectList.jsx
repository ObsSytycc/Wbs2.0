import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { useAnimateOnScroll } from '../../../../hooks';
import { animation } from '../../../../utils';
import ProjectsCard from './ProjectsCard';

const ProjectList = ({ list = [] }) => {
	// Scroll animation
	const [trigger] = useAnimateOnScroll(animateProjects);

	function animateProjects() {
		const tl = gsap.timeline();
		tl.add(animation.fade(trigger.current, {}, { duration: 1 })).add(
			animation.fade(
				trigger.current.firstElementChild,
				{
					yPercent: 100
				},
				{
					yPercent: 0,
					duration: 1.5
				}
			),
			'-=0.5'
		);
		return tl;
	}
	// End of scroll animation
	return (
		<section
			className="project-list invisible translate-y-0 sm:py-14 sm:px-10 xl:-translate-y-1/2 xl:px-10"
			ref={trigger}
		>
			<div className="grid items-center">
				{list.map((project, indx) => {
					const { name, details, path } = project;

					return <ProjectsCard key={indx} name={name} details={details} path={path} />;
				})}
			</div>
		</section>
	);
};

ProjectList.propTypes = {
	list: PropTypes.array
};

export default ProjectList;
