import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { useAnimateOnScroll } from '../../../../hooks';
import { animation } from '../../../../utils';
import TeamCard from './TeamCard';
import '../styles/teams.css';

export const TeamList = ({ list = [] }) => {
	const [trigger] = useAnimateOnScroll(animateTeamList);

	function animateTeamList() {
		const tl = gsap.timeline();

		tl.add(animation.fade(trigger.current, {}, { duration: 1 })).add(
			animation.fade(trigger.current.children, { yPercent: 100 }, { yPercent: 0, duration: 1.5 }),
			'-=0.5'
		);

		return tl;
	}

	return (
		<section ref={trigger} className="invisible">
			<section className="team-list grid bg-white">
				{list.map((item, indx) => {
					const { name, desc, logo, url } = item;
					return <TeamCard key={indx} name={name} text={desc} icon={logo} path={url} />;
				})}
			</section>
		</section>
	);
};

TeamList.propTypes = {
	list: PropTypes.array
};
