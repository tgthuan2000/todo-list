import { configureStore } from '@reduxjs/toolkit';
import cauHoi from './features/cauHoi';

export const store = configureStore({
	reducer: { cauHoi },
});
