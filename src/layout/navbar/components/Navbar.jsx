import React from 'react';

import Link from './Link';
import { Button } from '../../../components/ui';

import '../styles/navbar.css';
import { svgs } from '../../../assets';
import { navLinks } from '../../../data';

const Navbar = () => {
	return (
		<nav>
			<div className="container">
				<div className="nav-content grid">
					<div className="nav-brand">
						<img src={svgs.community_logo} alt="SYTYCC Logo" />
					</div>
					<div className="nav-links-container">
						<div className="nav-links">
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
