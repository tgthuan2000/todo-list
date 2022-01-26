import { configureStore } from '@reduxjs/toolkit';
import cauHoi from './features/cauHoi';
import kiemTra from './features/kiemTra';

export const store = configureStore({
	reducer: { cauHoi, kiemTra },
});
