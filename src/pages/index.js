import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from '../components/common';

const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./404'));

const PageRoutes = () => {
	return (
		<Suspense
			fallback={
				<div
					style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}
				>
					<Spinner />
				</div>
			}
		>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
				</Route>
				<Route element={<NotFound />} path="*" />
			</Routes>
		</Suspense>
	);
};

export default PageRoutes;
