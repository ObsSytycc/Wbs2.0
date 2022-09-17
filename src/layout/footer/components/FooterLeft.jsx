import React from 'react';
import { svgs } from '../../../assets';

const FooterLeft = () => {
	return (
		<section className="footer-left w-full max-w-[760px] overflow-y-hidden">
			<div>
				<div className="footer-brand mb-12">
					<img src={svgs.footer_logo} alt="" />
				</div>
				<p className="mb-8 text-base leading-slh text-white">
					We are a fast-growing ecosystem of technology and business enthusiasts that meets the need of the rapidly
					changing digital world.
				</p>
			</div>
		</section>
	);
};

export default FooterLeft;
