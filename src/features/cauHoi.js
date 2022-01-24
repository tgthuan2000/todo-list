import { createSlice } from '@reduxjs/toolkit';
import { data } from '../assets/data';

export const cauHoi = createSlice({
	name: 'CauHoi',
	initialState: data,
	reducers: {
		them: (state, { payload }) => {
			return [...state, payload];
		},
		xoa: (state, { payload }) => {
			const temps = [...state];
			temps.splice(payload, 1);
			return temps;
		},
		sua: (state, { payload: { index, data } }) => {
			const temps = [...state];
			temps.splice(index, 1, data);
			return temps;
		},
	},
});

export const { them, xoa, sua } = cauHoi.actions;

export default cauHoi.reducer;
