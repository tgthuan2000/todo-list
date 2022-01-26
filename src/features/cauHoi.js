import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: Math.random(),
		cauHoi: 'Hôm nay là thứ mấy?',
		cauDung: 'Thứ high',
		cauSai: ['Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu'],
	},
];

export const cauHoi = createSlice({
	name: 'CauHoi',
	initialState,
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
