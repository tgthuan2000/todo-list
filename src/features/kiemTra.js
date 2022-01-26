import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	index: 0,
	time: 0,
	num: 0,
	data: [
		{
			cauHoi: '',
			cauDung: 0,
			dapAn: [],
		},
	],
};

export const kiemTra = createSlice({
	name: 'KiemTra',
	initialState,
	reducers: {
		random: (state, { payload: { id, num, time, data } }) => ({
			id,
			index: 0,
			time,
			num,
			data: randomData(data),
		}),
		next: (state) => ({
			...state,
			index: state.index + 1,
		}),
	},
});

export const { random, next } = kiemTra.actions;

export default kiemTra.reducer;

const randomData = (data) => {
	return [
		{
			cauHoi: 'Nội dung câu hỏi số 1',
			cauDung: 0,
			dapAn: ['Đáp án đúng', 'Đáp án sai 1', 'Đáp án sai 2', 'Đáp án sai 3'],
		},
		{
			cauHoi: 'Nội dung câu hỏi số 2',
			cauDung: 0,
			dapAn: ['Đáp án sai 1', 'Đáp án đúng', 'Đáp án sai 2', 'Đáp án sai 3'],
		},
	];
};
