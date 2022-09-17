import React from 'react';
import { PageLayout } from '../layout';
import { AboutContainer } from '../components/containers';
import { Hero, Teams, Projectsection, Reviews, Blog } from '../components/module';

function Home() {
	return (
		<PageLayout>
			<>
				<Hero />
				<main>
					<Teams />
					<AboutContainer />
					<Projectsection />
					<Reviews />
					<Blog />
				</main>
			</>
		</PageLayout>
	);
}

export default Home;
