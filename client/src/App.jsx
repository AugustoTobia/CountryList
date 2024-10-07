import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';
import './App.css';

const App = () => {
	return (
		<div className="App">

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/countryInfo/:country/code/:countryCode' element={<CountryInfo />} />
			</Routes>
		</div>
	);
}

export default App;
