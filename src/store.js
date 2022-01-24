import { configureStore } from '@reduxjs/toolkit';
import cauHoiSlice from './features/cauHoi';

export const store = configureStore({
	reducer: {
		cauHoi: cauHoiSlice,
	},
});
