import { configureStore } from '@reduxjs/toolkit';
import thunk from 'react-redux';

const store = configureStore({
	reducer: {},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(thunk)
});
