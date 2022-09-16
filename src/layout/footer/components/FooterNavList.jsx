import React from 'react'
import PropTypes from 'prop-types';
import FooterLink from './FooterLink';

import '../style/footer.css';

const FooterNavList = ({ title = '', list = [] }) => {
	return (
		<section className="subnav-list-container mb-12 overflow-y-hidden lg:mb-0 lg:px-2.5">
			<div>
				<h3 className="mb-6 text-base-md font-semibold leading-llh text-accent">{title}</h3>
				<ul className="footer-nav-list">
					{list.map((link, indx) => {
						const { name, path } = link;

						return <FooterLink key={indx + 1} name={name} path={path} />;
					})}
				</ul>
			</div>
		</section>
	);
};

FooterNavList.propTypes = {
	title: PropTypes.string,
	list: PropTypes.array
};

export default FooterNavList