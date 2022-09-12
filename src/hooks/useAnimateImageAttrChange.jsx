import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const useAnimateImageAttrChange = (value = '', fromVars = {}, toVars = {}) => {
	const elRef = useRef(null);
	const tl = useRef(null);

	useLayoutEffect(() => {
		tl.current = gsap.timeline();

		tl.current
			.set(elRef.current, { attr: { src: value } })
			.fromTo(elRef.current, { ...fromVars }, { ease: 'sine.in', ...toVars });

		return () => tl.current.kill(0);
	}, [value]);

	return [elRef];
};

export default useAnimateImageAttrChange;
