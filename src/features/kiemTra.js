import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	time: 0,
	num: 0,
	data: [
		{
			cauHoi: 'Nội dung câu hỏi số 1',
			cauDung: 0,
			dapAn: ['Đáp án đúng', 'Đáp án sai 1', 'Đáp án sai 2', 'Đáp án sai 3'],
		},
	],
};

export const kiemTra = createSlice({
	name: 'KiemTra',
	initialState,
	reducers: {
		random: (state, { payload: { id, num, time, data } }) => ({
			id,
			time,
			num,
			data: randomData(data),
		}),
	},
});

export const { random } = kiemTra.actions;

export default kiemTra.reducer;

const randomData = (data) => {
	return [
		{
			cauHoi: data[0].cauHoi,
			cauDung: 0,
			dapAn: [data[0].cauDung, ...data[0].cauSai],
		},
	];
};
