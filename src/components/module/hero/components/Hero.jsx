import React from 'react';
import '../styles/hero.css';
import { Button } from '../../../ui';
import { svgs, pngs } from '../../../../assets';

const Herosection = () => {
	return (
		<section className="hero relative rounded-br-[100px] lg:rounded-br-[250px]">
			<div className="container flex min-h-[600px] flex-row items-center justify-between p-2.5 pb-5 text-center text-white lg:min-h-[800px] lg:items-start lg:pt-20 lg:text-left">
				<div className="relative z-[2] flex flex-col lg:basis-[60%]">
					<hgroup>
						<h1 className="mb-[5%] text-3xl font-semibold leading-llh">
							So You Think You Can{' '}
							<span className="text-accent" style={{ fontFamily: 'Mirza' }}>
								{'<Code/>'}
							</span>
						</h1>
						<p className="mb-[14%] text-xl leading-slh">
							Here we dive into the ocean, then we have a cup of coffee and write clean codes.
						</p>
					</hgroup>
					<div>
						<Button value="Join us" color="secondary" />
					</div>
				</div>
				<div className="hidden pl-1 pr-1 lg:block lg:basis-[40%]">
					<img className="img-fluid" src={pngs.hero_image} alt="A graphical representation of a programmer" />
				</div>
			</div>
			<section aria-label="Hero floating icon container">
				<img className="absolute  top-24 right-0 w-24" src={svgs.magnifying_glass} alt="magnifying glass" />
				<svg
					className="absolute bottom-5 left-[55%] translate-x-[-50%]"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					width="42"
					height="110"
					viewBox="0 0 42 110"
					aria-labelledby="togglerIcon"
				>
					<title id="togglerIcon">A presentational toggler icon</title>
					<g>
						<rect
							x="-2.5"
							y="2.5"
							width="37"
							height="105"
							rx="18.5"
							transform="matrix(-1 0 0 1 37 0)"
							stroke="#fff"
							strokeWidth="5"
						/>
						<rect x="12" y="56" width="18" height="41" rx="9" fill="#fff" />
					</g>
				</svg>
				<img className="absolute top-0 left-[60%] w-24 translate-x-[-50%]" src={svgs.gear} alt="A white gear" />
			</section>
		</section>
	);
};

export default Herosection;
