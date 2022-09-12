import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { fade, Timer } from '../../../../utils';
import '../styles/hero.css';
import { Button } from '../../../ui';
import { svgs, pngs } from '../../../../assets';

const Herosection = () => {
	const heroRef = useRef(null);
	const tl1 = useRef(null);
	const headerTextTl = useRef(null);
	const firstCursor = useRef(null);
	const q = gsap.utils.selector(heroRef);

	// Class Instance
	const timer = new Timer();

	// Initial animation render
	useLayoutEffect(() => {
		tl1.current = gsap.timeline({ onComplete: completedLeftAnim });

		tl1.current
			.add(fade.in(heroRef.current))
			.add(fade.in(q('.magnifying'), { xPercent: 0, duration: 1 }, { xPercent: 150 }), 'start')
			.add(fade.in(q('.gear'), { yPercent: 0, duration: 1 }, { yPercent: -100 }), 'start')
			.add(fade.in(q('.toggler'), { yPercent: 0, duration: 1 }, { yPercent: 150 }), 'start')
			.add(fade.in(q('.programmer'), { scale: 1, duration: 1 }, { scale: 0.5 }), 'start')
			.add(fade.in(q('.hero-text'), { yPercent: 0, duration: 1 }, { yPercent: 100 }), 'start')
			.add(fade.in(q('.btn-container'), { yPercent: 0, duration: 1 }, { yPercent: 150 }), '-=0.5');

		return () => tl1.current.kill();
	}, []);

	// Header text animation initial render
	useLayoutEffect(() => {
		// Animates first cursor
		firstCursor.current = gsap.to('.first-cursor', {
			paused: true,
			autoAlpha: 1,
			repeat: -1,
			yoyo: true,
			ease: 'power2.inOut'
		});

		// Animates the header
		headerTextTl.current = gsap.timeline({ paused: true, onComplete: completedHeaderAnim });

		headerTextTl.current
			.to(q('.first-text'), {
				duration: 3,
				text: 'So You Think You Can',
				delay: 1,
				ease: 'power2.inOut'
			})
			.to(
				q('.second-text'),
				{
					duration: 2,
					text: `&ltCode/&gt`,
					ease: 'sine.inOut'
				},
				'-=0.5'
			);

		return () => {
			headerTextTl.current.kill();
			firstCursor.current.progress(0).kill();
		};
	}, []);

	// Start Completed Animation Handler functions
	function completedLeftAnim() {
		firstCursor.current.play();
		headerTextTl.current.play();
	}

	function completedHeaderAnim() {
		timer.setTimer(function () {
			firstCursor.current.pause();
		});
	}
	// End of Completed Animation Handler functions

	return (
		<section ref={heroRef} className="hero relative rounded-br-[100px] lg:rounded-br-[250px]">
			<section className="container flex min-h-[600px] flex-row items-center justify-between pb-5 text-center text-white lg:min-h-[800px] lg:items-start lg:pt-20 lg:text-left">
				<div className="hero-info relative z-[2] flex flex-col lg:basis-[60%]">
					<hgroup>
						<h1 className="mb-[5%] text-3xl font-semibold leading-llh">
							<span className="first-text"></span>{' '}
							<span className="second-text text-accent" style={{ fontFamily: 'Mirza' }}></span>
							<span className="first-cursor invisible">|</span>
						</h1>
						<p className="hero-text mb-[14%] text-xl leading-slh">
							Here we dive into the ocean, then we have a cup of coffee and write clean code.
						</p>
					</hgroup>
					<div className="btn-container">
						<Button value="Join us" color="secondary" />
					</div>
				</div>
				<div className="hidden pl-1 pr-1 lg:block lg:basis-[40%]">
					<img
						className="img-fluid programmer"
						src={pngs.hero_image}
						alt="A graphical representation of a programmer"
					/>
				</div>
			</section>
			<section aria-label="Hero floating icons container">
				<img className="magnifying absolute top-24 right-0 w-24" src={svgs.magnifying_glass} alt="magnifying glass" />
				<svg
					className="toggler absolute bottom-5 left-[55%] translate-x-[-50%]"
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
				<img className="gear absolute top-0 left-[60%] w-24 translate-x-[-50%]" src={svgs.gear} alt="A white gear" />
			</section>
		</section>
	);
};;

export default Herosection;
