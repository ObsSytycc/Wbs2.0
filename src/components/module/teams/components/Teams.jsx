import React, { useState, useEffect } from 'react';
import { useAnimateOnScroll } from '../../../../hooks';
import { SectionHeader } from '../../../ui';
import { teamList } from '../../../../data/team-list';
import { TeamList } from './TeamList';

const Teams = () => {
	const [cpyList, setCpyList] = useState([]);

	const [targetElem, animation] = useAnimateOnScroll();

	useEffect(() => {
		setCpyList(teamList);
	}, []);

	return (
		<section className="overflow-y-hidden bg-white pt-28 pb-24">
			<div className="container flex flex-col gap-10">
				<SectionHeader
					title="Our Teams"
					text="Our Mission at SYTYCC is to support and inspire growth, provide network opportunities whilst collaborating, using a hands-on approach to create a better future and have fun along the way."
				/>
				<TeamList list={cpyList} />
			</div>
		</section>
	);
};

export default Teams;
