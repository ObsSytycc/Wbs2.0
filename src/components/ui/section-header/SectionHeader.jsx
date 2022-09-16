import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { animation } from '../../../utils';
import { useAnimateOnScroll } from '../../../hooks';
import './styles/section-header.css';

const SectionHeader = ({ title = '', text = '' }) => {
	const [trigger] = useAnimateOnScroll(animateHeader);

	function animateHeader() {
		const tl = gsap.timeline();

		tl.add(animation.fade(trigger.current, {}, { duration: 1 })).add(
			animation.fade(
				trigger.current.children,
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
	// End of Scroll animation

	return (
		<hgroup className="invisible overflow-y-hidden text-center" ref={trigger}>
			<h2 className="section-header mb-10 text-xl font-bold leading-llh">{title}</h2>
			{text && <p className="mb-16 text-base-md font-normal leading-slh">{text}</p>}
		</hgroup>
	);
};

SectionHeader.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};

export default React.memo(SectionHeader);
