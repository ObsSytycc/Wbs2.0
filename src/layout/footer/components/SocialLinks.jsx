import React from 'react'
import PropTypes from 'prop-types';

const SocialLinks = ({ list }) => {
	return (
		<ul className="social-media-list">
			{list.map((item, indx) => {
				return (
					<li key={indx + 1}>
						<a href={item.path}>
							<img src={item.icon()} alt="" />
						</a>
					</li>
				);
			})}
		</ul>
	);
};

SocialLinks.propTypes = {
	list: PropTypes.array
};

export default SocialLinks