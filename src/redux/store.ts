// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit'
import apiReducer from '../redux/apiSlice';

const store = configureStore({
	reducer: {
		api: apiReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
