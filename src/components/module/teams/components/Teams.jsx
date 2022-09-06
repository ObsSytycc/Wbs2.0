import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../../ui';
import { teamList } from '../../../../data/team-list';
import { TeamList } from './TeamList';

const Teams = () => {
	const [cpyList, setCpyList] = useState([]);

	useEffect(() => {
		setCpyList(teamList);
	}, []);

	return (
		<section className="bg-white pt-24 pb-14">
			<div className="container flex flex-col gap-10">
				<SectionHeader
					title="Our Teams"
					text="Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, incididunt ut labore et dolore magna aliqua.  incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<TeamList list={cpyList} />
			</div>
		</section>
	);
};

export default Teams;
