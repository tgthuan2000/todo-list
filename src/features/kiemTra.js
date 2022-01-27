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
			cauChon: null,
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
			data: randomData(data, num),
		}),
		next: (state) => {
			state.index += 1;
		},
		setAnswer: (state, { payload: { index, dapAn } }) => {
			state.data[index].cauChon = dapAn;
		},
	},
});

export const { random, next, setAnswer } = kiemTra.actions;

export default kiemTra.reducer;

const randomData = (d = [], num) => {
	const data = [...d];
	const result = [];
	Array.from(new Array(num)).forEach(() => {
		const [{ cauSai, cauDung, cauHoi }] = data.splice(
			Math.floor(Math.random() * data.length),
			1
		);
		const dapAn = [...cauSai, cauDung].sort(() => Math.random() - 0.5);
		const vitriDung = dapAn.findIndex((i) => i === cauDung);
		result.push({ cauHoi, cauDung: vitriDung, dapAn, cauChon: null });
	});
	return result;
};
