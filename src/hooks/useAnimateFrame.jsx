import { useEffect, useRef } from 'react';

function useAnimateFrame(callback = () => null, interval = 1000) {
	const runAgainRef = useRef(0);
	const nextInterval = useRef(performance.now() + interval);
	const animateId = useRef(0);

	function animate(timestamp) {
		if (runAgainRef.current <= timestamp) {
			if (nextInterval.current <= timestamp) {
				callback();
				nextInterval.current = timestamp + interval;
			}
		}

		runAgainRef.current = timestamp;

		requestAnimationFrame(animate);
	}

	useEffect(() => {
		animateId.current = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animateId.current);
	}, []);
}

export default useAnimateFrame;
