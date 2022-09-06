import React from 'react';
import PropTypes from 'prop-types';
import ProjectsCard from './ProjectsCard';

const ProjectList = ({ list = [] }) => {
	return (
		<section className="project-list grid translate-y-0 items-center sm:py-14 sm:px-10 xl:-translate-y-1/2 xl:px-10">
			{list.map((project, indx) => {
				const { name, details, path } = project;

				return <ProjectsCard key={indx} name={name} details={details} path={path} />;
			})}
		</section>
	);
};

ProjectList.propTypes = {
	list: PropTypes.array
};

export default ProjectList;
