// src/features/api/apiSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ApiResponse, Hero } from '../interface/heroTypes'

const API_URL = 'http://localhost:1337/api/heroes'
const TOKEN =
	'cebaef82fe2736eee843f419f45bf1b8ba9d7472b52012bfeda2143ae61358568fd8d67b95e5d0ea0a78c46bad94c0a4d4524ef7aa3c072ac171c4e9fdf61f004b9c927239b31983853b2634bcb9ca4f565a1b8178cca52b2a5593d99297cfe7a4c2546519f1b641d3026ecd1c16b8e1ea6ae0843e6b51141743b9c0f758a57e'

export const fetchHeroes = createAsyncThunk<ApiResponse>(
	'api/fetchHeroes',
	async () => {
		const response = await axios.get<ApiResponse>(API_URL, {
			headers: {
				Authorization: `Bearer ${TOKEN}`,
			},
		})
		return response.data
	}
)

interface ApiState {
	heroes: Hero[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}

const initialState: ApiState = {
	heroes: [],
	status: 'idle',
	error: null,
}

const apiSlice = createSlice({
	name: 'api',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchHeroes.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchHeroes.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.heroes = action.payload.data
			})
			.addCase(fetchHeroes.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || 'Something went wrong'
			})
	},
})

export default apiSlice.reducer
