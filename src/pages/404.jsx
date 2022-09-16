import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<section className="flex h-screen flex-col items-center justify-center bg-gray-200">
			<h1 className="mb-4 text-2xl font-bold text-primary">404</h1>
			<p className="mb-2 text-base-md font-semibold text-primary">Bruh, no vex wetin you de fin never ready.</p>
			<p className="mb-8 text-base-md font-semibold text-primary">Or e prolly no de sef.</p>
			<Link className="rounded-[8px] bg-accent py-4 px-8 text-base font-semibold text-primary" to="/">
				I go carry you go home
			</Link>
		</section>
	);
};

export default PageNotFound;
