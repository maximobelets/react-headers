import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'normalize.css';

import { Button } from './components/Button';
import { Dropdown } from './components/Dropdown';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { SearchBar } from './components/SearchBar';
import { Form } from './components/Form';
import { Multiselect } from './components/Multiselect';

import { navConfig } from './utils/configs';

import s from './App.module.css';

const App: React.FC = () => {
	return (
		<Router>
			<Nav links={navConfig} />
			<section className={s.root}>
				<div>
					<h1 className={s.title}>
						React Components Project
					</h1>
				</div>
			</section>
			<Routes>
				<Route path='/button' element={<Button />} exact />
				<Route path='/dropdown' element={<Dropdown />} exact />
				<Route path='/header' element={<Header />} exact />
				<Route path='/search-bar' element={<SearchBar />} exact />
				<Route path='/form' element={<Form />} exact />
				<Route path='/multiselect' element={<Multiselect />} exact />
			</Routes>
		</Router>
	);
};

export default App;
