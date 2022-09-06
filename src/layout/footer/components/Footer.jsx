import React, { useState, useEffect } from 'react';

import '../style/footer.css';
import { footerSubNav, socialLink } from '../../../data';
import FooterNavList from './FooterNavList';
import FooterContact from './FooterContact';
import SocialLinks from './SocialLinks';
import FooterLeft from './FooterLeft';

const Footer = () => {
	const [subNavList, setSubNavList] = useState(footerSubNav);
	const [socialMediaList, setSocialMediaList] = useState(socialLink);

	useEffect(() => {
		setSubNavList(footerSubNav);
		setSocialMediaList(socialLink);
	}, []);

	return (
		<footer id="footer" className="bg-primary py-24 px-14">
			<div className="container">
				<section className="footer-content grid justify-center md:flex-row md:justify-between lg:items-end">
					<FooterLeft />
					<section className="footer-left flex flex-col justify-between lg:flex-row">
						<FooterNavList title={subNavList.title} list={subNavList.list} />
						<FooterContact />
					</section>
				</section>
				<section className="social-media mt-10">
					<SocialLinks list={socialMediaList} />
				</section>
				<section className="footer-bottom mt-16">
					<p className="text-center text-base font-semibold text-white">Copyright. SYTYCC. All Right Reserved 2022</p>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
