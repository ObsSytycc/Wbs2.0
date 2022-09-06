import React from 'react';

import '../style/footer.css';
import { svgs } from '../../../assets';

const FooterContact = () => {
	return (
		<section className="footer-contact px-0 lg:px-2.5">
			<h3 className="mb-6 text-base-md font-semibold leading-llh text-accent">Contact us</h3>
			<div className="flex flex-col justify-center">
				<a className="mb-4 flex text-base-md leading-llh text-white" href="tel:+234-790-2784-987">
					<img src={svgs.emailIcon} className="mr-2" alt="Phone icon" /> <span>+234-790-2784-987</span>
				</a>
				<a className="mb-4 flex items-center text-base-md leading-llh text-white" href="mailto:support@sytycc.com">
					<img src={svgs.phoneIcon} className="mr-2" alt="An email icon" /> <span>support@sytycc.com</span>
				</a>
				<p className="flex items-center text-base-md leading-llh text-white">
					<img src={svgs.locationIcon} className="mr-2" alt="A location icon" />{' '}
					<span>Lekki Phase 2 Ext, Lagos State, Nigeria</span>
				</p>
			</div>
		</section>
	);
};

export default FooterContact;
