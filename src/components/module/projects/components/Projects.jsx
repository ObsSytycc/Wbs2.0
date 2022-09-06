import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../../ui';

import '../styles/projects.css';
import { projectList } from '../../../../data';
import ProjectList from './ProjectList';

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setProjects(projectList);
	}, []);

	return (
		<section className="projects bg-gray-300 pt-32 pb-20">
			<div className="container">
				<SectionHeader
					title="Our Projects"
					text="Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua.  incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua.  incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"
				/>
				<section className="project-content mt-24 bg-transparent sm:bg-white xl:mt-80">
					<ProjectList list={projects} />
				</section>
			</div>
		</section>
	);
};

export default Projects;
