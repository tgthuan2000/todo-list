import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/test' element={<Test />} />
			</Routes>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
