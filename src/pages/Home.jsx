import React from 'react';
import { PageLayout } from '../layout';
import { Hero, Teams, Projectsection, Mentorship, Reviews, Blog } from '../components/module';

function Home() {
	return (
		<PageLayout>
			<>
				<Hero />
				<main>
					<Teams />
					<Mentorship />
					<Projectsection />
					<Reviews />
					<Blog />
				</main>
			</>
		</PageLayout>
	);
}

export default Home;
