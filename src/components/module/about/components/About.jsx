import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { useAnimateOnScroll } from '../../../../hooks';
import { animation } from '../../../../utils';
import AboutHeader from './AboutHeader';
import AboutDetails from './AboutDetails';
import '../styles/about.css';
import AboutImage from './AboutImage';
import AboutIndicator from './AboutIndicator';

const About = ({ detail = {}, length = 0, count = 0 }) => {
	const [trigger] = useAnimateOnScroll(animateHeader);

	function animateHeader() {
		const tl = gsap.timeline();
		tl.add(animation.fade(trigger.current, {}, { duration: 1 })).add(
			animation.fade(
				trigger.current.querySelector('hgroup').children,
				{
					yPercent: 100
				},
				{
					yPercent: 0,
					duration: 1.5,
					stagger: 0.5
				}
			),
			'-=0.5'
		);
		return tl;
	}
	return (
		<section className="min-height-[750px] relative pt-10 pb-28">
			<section className="container">
				<div className="relative">
					<div
						className="invisible mb-10 flex flex-col justify-between gap-10 overflow-y-hidden lg:flex-row"
						ref={trigger}
					>
						<AboutHeader title={detail?.title || ''} info={detail?.info || ''} />
						<AboutImage name={detail?.title || ''} image={detail?.image || ''} />
					</div>

					<section className="bottom-0 left-0 w-full lg:absolute lg:w-[75%]">
						<AboutDetails list={detail.details} />
					</section>
				</div>
			</section>
			<AboutIndicator count={count} length={length} />
		</section>
	);
};

About.propTypes = {
	detail: PropTypes.object,
	length: PropTypes.number,
	count: PropTypes.number
};

export default About;
