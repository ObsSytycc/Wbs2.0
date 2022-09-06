import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));

const PageRoutes = () => {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default PageRoutes;
