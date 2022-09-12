import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

import Link from './Link';
import { Button } from '../../../components/ui';
import '../styles/navbar.css';
import { svgs } from '../../../assets';
import { navLinks } from '../../../data';

const Navbar = () => {
	const linksContainer = useRef(null);
	const links = useRef(null);
	const hamburgerTl = useRef(null);
	const hamburgerRef = useRef(null);
	const q = gsap.utils.selector(hamburgerRef);

	useEffect(() => {
		hamburgerTl.current = gsap.timeline({ paused: true, reversed: true });

		hamburgerTl.current
			.to(q('.bar-1'), { attr: { d: 'M0,15 L30,15' }, duration: 0.3, ease: 'power2.in' }, 'start')
			.to(q('.bar-3'), { attr: { d: 'M0,15 L30,15' }, duration: 0.3, ease: 'power2.in' }, 'start')
			.to(q('.bar-1'), { attr: { d: 'M3,26 L27,4' }, duration: 0.3, ease: 'power2.in' }, 'end')
			.to(q('.bar-3'), { attr: { d: 'M3,4 L27,26' }, duration: 0.3, ease: 'power2.in' }, 'end')
			.to(q('.bar-2'), { autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, 'end');

		return () => hamburgerTl.current.kill(0);
	}, []);

	const showLinks = () => {
		hamburgerTl.current.reversed() ? hamburgerTl.current.play() : hamburgerTl.current.reverse(0.8);

		const containerHeight = linksContainer.current.getBoundingClientRect().height;
		const linksHeight = links.current.getBoundingClientRect().height;

		if (containerHeight === 0) {
			linksContainer.current.style.height = linksHeight + 'px';
		} else {
			linksContainer.current.style.height = '0px';
		}
	};

	return (
		<nav>
			<div className="container">
				<div className="nav-content grid">
					<div className="nav-brand flex items-center justify-between">
						<img src={svgs.community_logo} alt="SYTYCC Logo" />
						<button
							id="hamburgerBtn"
							aria-label="Show Navigation Links"
							aria-controls="navLinksContainer"
							aria-expanded="false"
							onClick={showLinks}
							ref={hamburgerRef}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
								<path stroke="#06113C" strokeWidth="2" className="bar-1" d="M30,4 L0,4" />
								<path stroke="#06113C" strokeWidth="2" className="bar-2" d="M0,15 L30,15" />
								<path stroke="#06113C" strokeWidth="2" className="bar-3" d="M30,26 L0,26" />
							</svg>
						</button>
					</div>
					<div className="nav-links-container" id="navLinksContainer" ref={linksContainer}>
						<div className="nav-links" ref={links}>
							<ul className="links-list">
								{navLinks.map((link, index) => {
									const { name, path } = link;

									return <Link key={index + 1} path={path} name={name} />;
								})}
							</ul>
							<div>
								<Button value="Login" onclick={() => null} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
