import React from 'react';
import PropTypes from 'prop-types';
import TeamCard from './TeamCard';
import '../styles/teams.css';

export const TeamList = ({ list = [] }) => {
	return (
		<section className="team-list grid bg-white">
			{list.map((item, indx) => {
				const { name, desc, logo, url } = item;
				return <TeamCard key={indx} name={name} text={desc} icon={logo} path={url} />;
			})}
		</section>
	);
};

TeamList.propTypes = {
	list: PropTypes.array
};
