import React from 'react';
import PropTypes from 'prop-types';

import { animation } from '../../../../utils';
import pattern from '../../../../assets/png/pattern.png';
import { useAnimateImageAttrChange, useAnimateOnScroll } from '../../../../hooks';

const AboutImage = ({ name = '', image = '' }) => {
	const [elRef] = useAnimateImageAttrChange(image, { autoAlpha: 0.5 }, { autoAlpha: 1, duration: 1 });

	function animateImages() {
		return animation.fade(trigger.current.children, { yPercent: 100 }, { yPercent: 0, stagger: 0.5, duration: 1.5 });
	}

	const [trigger] = useAnimateOnScroll(animateImages);

	return (
		<section className="img-container relative z-0 w-full basis-[55%]" ref={trigger}>
			<img className="absolute -top-6 -right-[5px] w-32 lg:right-[50px]" src={pattern} alt="pattern" />
			<img className="absolute -left-[60px] bottom-[40%] z-10 w-32" src={pattern} alt="pattern" />
			<div className="mr-22 w-full rounded-tr-[353.5px] rounded-br-[60px] shadow-3xl">
				<img ref={elRef} className="object-fit h-96 w-full lg:h-[700px]" alt={`Graphical illustration of ${name}`} />
			</div>
		</section>
	);
};

AboutImage.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};

export default AboutImage;
