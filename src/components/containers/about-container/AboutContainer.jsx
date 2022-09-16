import React, { useState, startTransition } from 'react';
import { About } from '../../module';
import { useAnimateFrame } from '../../../hooks';
import { aboutData } from '../../../data';

const AboutContainer = () => {
	const [count, setCount] = useState(0);

	useAnimateFrame(() => {
		startTransition(() => {
			setCount((prev) => (prev + 1) % aboutData.length);
		});
	}, 3000);

	return <About length={aboutData.length - 1} count={count} detail={aboutData[count]} />;
};

export default AboutContainer;
