import { createSlice } from '@reduxjs/toolkit'
import { LOCALSTORAGE_QUESTION } from '../Constants'

const initialState = JSON.parse(localStorage.getItem(LOCALSTORAGE_QUESTION)) || [
	{
		id: Math.random(),
		cauHoi: 'Hôm nay là thứ mấy?',
		cauDung: 'Thứ high',
		cauSai: ['Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu'],
	},
]

export const cauHoi = createSlice({
	name: 'CauHoi',
	initialState,
	reducers: {
		them: (state, { payload }) => {
			const data = [...state, payload]
			localStorage.setItem(LOCALSTORAGE_QUESTION, JSON.stringify(data))
			return data
		},
		xoa: (state, { payload }) => {
			const temps = [...state]
			temps.splice(payload, 1)
			localStorage.setItem(LOCALSTORAGE_QUESTION, JSON.stringify(temps))
			return temps
		},
		sua: (state, { payload: { index, data } }) => {
			const temps = [...state]
			temps.splice(index, 1, data)
			localStorage.setItem(LOCALSTORAGE_QUESTION, JSON.stringify(temps))
			return temps
		},
	},
})

export const { them, xoa, sua } = cauHoi.actions

export default cauHoi.reducer
