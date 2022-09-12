import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';

const FadeIn = ({ children, fromVars = {}, toVars = {} }) => {
	const el = useRef(null);

	useLayoutEffect(() => {
		const animation = gsap.fromTo(
			el.current,
			{ autoAlpha: 0, ...fromVars },
			{ autoAlpha: 1, ...toVars, ease: 'power2.out' }
		);

		return () => animation.progress(0).kill();
	}, []);
	return <div ref={el}>{children}</div>;
};

FadeIn.propTypes = {
	children: PropTypes.element,
	fromVars: PropTypes.object,
	toVars: PropTypes.object
};

export default React.memo(FadeIn);
