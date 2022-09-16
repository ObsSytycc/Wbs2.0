import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

import { useAnimateOnScroll } from '../../../hooks';
import { animation } from '../../../utils';
import '../style/footer.css';
import { footerSubNav, socialLink } from '../../../data';
import FooterNavList from './FooterNavList';
import FooterContact from './FooterContact';
import SocialLinks from './SocialLinks';
import FooterLeft from './FooterLeft';

function Footer() {
	const [subNavList, setSubNavList] = useState(footerSubNav);
	const [socialMediaList, setSocialMediaList] = useState(socialLink);

	const [trigger] = useAnimateOnScroll(animateFooter);

	useEffect(() => {
		setSubNavList(footerSubNav);
		setSocialMediaList(socialLink);
	}, []);

	function animateFooter() {
		const tl = gsap.timeline();

		tl.add(animation.fade(trigger.current, {}, { duration: 1 }))
			.add(
				animation.fade(
					trigger.current.querySelector('.footer-left > div'),
					{ yPercent: 100 },
					{ yPercent: 0, duration: 1.5 }
				),
				'-=0.5'
			)
			.add(
				animation.fade(
					trigger.current.querySelector('.subnav-list-container > div'),
					{ yPercent: 100 },
					{ yPercent: 0, duration: 1.5 }
				),
				'-=0.5'
			)
			.add(
				animation.fade(
					trigger.current.querySelector('.footer-contact > div'),
					{ yPercent: 100 },
					{ yPercent: 0, duration: 1.5 }
				),
				'<'
			)
			.add(
				animation.fade(
					trigger.current.querySelector('.social-media > ul'),
					{ yPercent: 100 },
					{ yPercent: 0, duration: 1 }
				),
				'-=0.5'
			)
			.add(
				animation.fade(
					trigger.current.querySelector('.footer-bottom > p'),
					{ yPercent: 100 },
					{ yPercent: 0, duration: 1 }
				),
				'<'
			);

		return tl;
	}

	return (
		<footer id="footer" className="invisible bg-primary px-14 pt-24 pb-16" ref={trigger}>
			<div className="container">
				<section className="footer-content grid justify-center md:flex-row md:justify-between lg:items-end">
					<FooterLeft />
					<section className="footer-left flex flex-col justify-between lg:flex-row">
						<FooterNavList title={subNavList.title} list={subNavList.list} />
						<FooterContact />
					</section>
				</section>
				<section className="social-media mt-10 overflow-y-hidden">
					<SocialLinks list={socialMediaList} />
				</section>
				<section className="footer-bottom mt-8 overflow-y-hidden md:mt-16">
					<p className="text-center text-base font-semibold text-white">Copyright. SYTYCC. All Right Reserved 2022</p>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
