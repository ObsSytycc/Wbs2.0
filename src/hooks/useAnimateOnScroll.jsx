import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function useAnimateOnScroll(tween = () => null) {
	const animation = useRef(null);
	const trigger = useRef(null);

	useLayoutEffect(() => {
		animation.current = gsap.timeline({
			scrollTrigger: {
				trigger: trigger.current,
				start: '100px 90%',
				toggleActions: 'play none none none',
				fastScrollEnd: 3000,
				once: true,
				preventOverlaps: true
			}
		});

		animation.current.add(tween());

		return () => animation.current.scrollTrigger?.disable();
	}, []);

	return [trigger];
}
