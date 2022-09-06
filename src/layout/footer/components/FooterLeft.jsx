import React from 'react';
import { svgs } from '../../../assets';

const FooterLeft = () => {
	return (
		<section className="footer-left w-full max-w-[760px]">
			<div className="footer-brand mb-12">
				<img src={svgs.footer_logo} alt="" />
			</div>
			<p className="mb-8 text-base leading-slh text-white">
				We are a fast-growing ecosystem of technology and business enthusiasts that meets the need of the rapidly
				changing digital world.
			</p>
			<p className="mb-2.5 text-base leading-slh text-white">
				Our Mission at SYTYCC is to support and inspire growth, provide network opportunities whilst collaborating,
				using a hands-on approach to create a better future and have fun along the way.
			</p>
		</section>
	);
};

export default FooterLeft;
